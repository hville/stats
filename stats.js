import sum from '@hugov/sum'

/**
 * @constructor
 * @param {number} [dim]
 */
export default function(results) {
	const keys = Object.keys(results),
				N = results[keys[0]].length,
				ave = map( results, (a,k) => sum(a)/N )
	let cov
	cov = map( results,
		(a,k) => map(	results,
			(b,l) => cov?.[l]?.[k] ?? sum(a, (v,i)=> (v-ave[k])*(b[i]-ave[l])) / (N-1)
		)
	)

	for (const k of keys) {
		cov[k] = Array.isArray(results) ? [] : {}
		for (const l of keys) cov[k][l] = cov?.[l]?.[k] ?? sum(results[k], (v,i)=> (v-ave[k])*(results[l][i]-ave[l])) / (N-1)
	}
	return {
		ave: k => ave[k] ?? ave,
		cov: (j, k) => cov[j]?.[k] ?? cov[j] ?? cov,
		dev: k => k != null ? Math.sqrt( cov[k][k] ) : map( cov, (o,k) => Math.sqrt( o[k] ) ),
		var: k => k != null ? cov[k][k] : map( cov, (ck,k) => ck[k] ),
		cor: (j, k) => k != null ? cov[j][k] / Math.sqrt(cov[j][k] * cov[j][k])
			: j != null ? map( cov[j], (cjk,k) => cjk / Math.sqrt(cov[j][j] * cov[k][k]) )
			: map( cov, (cj,j) => map( cj, (cjk,k) => cjk / Math.sqrt(cj[j] * cov[k][k]) ) )
	}
}
function map(obj, fcn) {
	if (Array.isArray(obj) || ArrayBuffer.isView(obj)) return obj.map(fcn)
	const tgt = {}
	for (const k of Object.keys(obj)) tgt[k] = fcn(obj[k], k)
	return tgt
}

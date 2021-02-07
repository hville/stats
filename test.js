import stats from './stats.js'
import t from 'assert-op'

const arr = stats([[1,2,3], [0,1,2]]),
			obj = stats({a:[1,2,3], b:[0,1,2]})

t('from array - ave', a => {
	a('===', arr.ave(0), 2)
	a('===', arr.ave(1), 1)
	a('{===}', arr.ave(), [2,1])
})
t('from array - dev', a => {
	a('===', arr.dev(0), 1)
	a('===', arr.dev(1), 1)
	a('{===}', arr.dev(), [1,1])
})
t('from array - cor', a => {
	a('===', arr.cor(0,1), 1)
	a('===', arr.cor(1,0), 1)
	a('{===}', arr.cor(0), [1,1])
	a('{===}', arr.cor(), [[1,1],[1,1]])
})
t('from array - var', a => {
	a('===', arr.var(0), 1)
	a('===', arr.var(1), 1)
	a('{===}', arr.var(), [1,1])
})
t('from array - cov', a => {
	a('===', arr.cov(0,1), 1)
	a('===', arr.cov(1,0), 1)
	a('{===}', arr.cov(0), [1,1])
	a('{===}', arr.cov(), [[1,1],[1,1]])
})

t('from object - ave', a => {
	a('===', obj.ave('a'), 2)
	a('===', obj.ave('b'), 1)
	a('{===}', obj.ave(), {a:2, b:1})
})
t('from object - dev', a => {
	a('===', obj.dev('a'), 1)
	a('===', obj.dev('b'), 1)
	a('{===}', obj.dev(), {a:1, b:1})
})
t('from object - cor', a => {
	a('===', obj.cor('a', 'b'), 1)
	a('===', obj.cor('b', 'a'), 1)
	a('{===}', obj.cor('a'), {a:1, b:1})
	a('{===}', obj.cor(), {a:{a:1, b:1}, b:{a:1, b:1}})
})
t('from object - var', a => {
	a('===', obj.var('a'), 1)
	a('===', obj.var('b'), 1)
	a('{===}', obj.var(), {a:1, b:1})
})
t('from object - cov', a => {
	a('===', obj.cov('a', 'b'), 1)
	a('===', obj.cov('b', 'a'), 1)
	a('{===}', obj.cov('a'), {a:1, b:1})
	a('{===}', obj.cov(), {a:{a:1, b:1}, b:{a:1, b:1}})
})

<!-- markdownlint-disable MD004 MD007 MD010 MD041 MD022 MD024 MD032 MD036 -->
# @hugov/stats

*average, standard deviation, variance, covariance and correlation of data sets*

• [Example](#Example) • [License](#license)

# Example

```javascript
import stats from '@hugov/stats'
const data = { a:[1,2,3], b:[0,1,2] },
      info = stats(data),
      ave_ = info.ave(),        // { a:2, b:1 }
      aveA = info.ave('a'),     // 2
      dev_ = info.dev(),        // { a:1, b:1 }
      devA = info.dev('a'),     // 1
      var_ = info.var(),        // { a:1, b:1 }
      varA = info.var('a'),     // 1
      cov_ = info.cov(),        // {a:{a:1, b:1}, b:{a:1, b:1}}
	    covA = info.cov('a'),     // {a:1, b:1}
	    cvBA = info.cov('b', 'a'),// 1
	    cor_ = info.cor(),        // {a:{a:1, b:1}, b:{a:1, b:1}}
	    corA = info.cor('a'),     // {a:1, b:1}
	    crBA = info.cor('b', 'a') // 1
```

# License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)

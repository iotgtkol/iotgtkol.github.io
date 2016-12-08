var LiuWei = {
	/**
	 *创建一个新的数组，数组的值由collection的每个元素通过fn迭代输出
	 *iteratee援引三个论据(value, index|key, collection)
	 *collection可以为对象 数组。作为值通过迭代得到新数组
	 *输入:map({ 'a': 4, 'b': 8 }, square)
	 *输出:[16, 64] (iteration order is not guaranteed)
	 *输入:map([{ 'user': 'barney' },{ 'user': 'fred' }], 'user')
	 *输出:['barney', 'fred']
	 */
	map: function(collection, iteratee) {
		var result = []
		for (var i = 0; i < arr.length; i++) {
			result.push(fn(arr[i], i, arr))
		}
		return result
	},
	/**
	 *迭代collection所有元素，返回通过predicate为truly的所有元素
	 *predicate援引三个论据(value, index|key, collection)[predicate=_.identity]
	 *collection为(object/array)
	 *var user =[{ 'user': 'barney', 'age': 36, 'active': true },{ 'user': 'fred',   'age': 40, 'active': false }]
	 *输入:filter(user, function(o) { return !o.active; })
	 *输出: objects for ['fred']
	 *输入:filter(users, ['active', false])
	 *objects for ['fred']
	 */
	filter: function(collection, predicate) {
		for (var i = 0; i < arr.length; i++) {
			if (!fn(arr[i], i, arr) == true) {
				arr.splice(arr[i], 1)
			}
		}
		return arr
	},
	/**
	 *创建由数组分裂的有两组的一个数组，第一个为通过断言为真得出对象第一个属性的值，第二个断言为假的其他属性的值
	 *predicate援引一个论据
	 *var users = [{ 'user': 'barney',  'age': 36, 'active': false },{ 'user': 'fred',    'age': 40, 'active': true },{ 'user': 'pebbles', 'age': 1,  'active': false }]
	 *输入:partition(users, function(o) { return o.active; })
	 *输出:objects for [['fred'], ['barney', 'pebbles']]
	 *输入:partition(users, ['active', false])
	 *输出:objects for [['barney', 'pebbles'], ['fred']]
	 *输入:partition(users, 'active')
	 *输出:objects for [['fred'], ['barney', 'pebbles']]
	 */
	partition: function(collection, predicate) {
		var result = [
			[],
			[]
		]
		for (var i = 0; i < arr.length; i++) {
			if (fn(arr[i], i, arr)) {
				result[0].push(arr[i])
			} else {
				result[1].push(arr[i])
			}
		}
		return result
	},
	/**
	 *通过递归检查所有元素通过断言是否为真的结果，如果为假，立马停止，returen false;
	 *collection为(object/array)
	 *Returns true if all elements pass the predicate check, else false.
	 *var users = [{ 'user': 'barney', 'age': 36, 'active': false },{ 'user': 'fred',   'age': 40, 'active': false }];
	 *输入:every([true, 1, null, 'yes'], Boolean)
	 *输出:false
	 *输入:every(users, { 'user': 'barney', 'active': false })
	 *输出:false
	 *输入:every(users, 'active')
	 *输出:false
	 *输入:every(users, ['active', false]);
	 *输出: true
	 */
	every: function(collection, predicate) {
		for (var i = 0; i < collection.length; i++) {
			if (fn(collection[i], i, collection)) {
				return false
			}
		}
		return true
	},
	/**
	 *检查断言是否对集合返回的是真值，如果为真，就立即结束递归，并返回 true
	 *collection (Array|Object): The collection to iterate over
	 *[predicate=_.identity] (Function): The function invoked per iteration
	 *返回的结果为如有一个为真，就返回真，否则为假
	 *输出:some([null, 0, 'yes', false], Boolean);
	 *输入:true
	 *var users = [{ 'user': 'barney', 'active': true },{ 'user': 'fred',   'active': false }];
	 *输出:some(users, { 'user': 'barney', 'active': false });
	 *输入:true
	 *输出:some(users, ['active', false]);
	 *输入:false
	 */
	some: function(collection, fn) {
		for (var i = 0; i < collection.length; i++) {
			if (fn(collection[i], i, collection) == true) {
				return true
			}
		}
		return false
	},
	/**
	 *与filter相反，返回的是假值，检查collection通过predicate是否为真值，如果为真，立即停止递归，并返回对象的假值
	 *collection (Array|Object): The collection to iterate over.
	 *(Array): Returns the new filtered array.
	 *var users = [{ 'user': 'barney', 'age': 36, 'active': false },{ 'user': 'fred',   'age': 40, 'active': true }];
	 *输入:reject(users, function(o) { return !o.active; });
	 *输出: objects for ['fred']
	 *输入:reject(users, ['active', false]);
	 *输出:objects for ['fred']
	 *输入:reject(users, 'active');
	 *输出: objects for ['barney']
	 */
	reject: function(collection, predicate) {
		var start = []
		for (var i = 0; i < arr.length; i++) {
			if (!fn(arr[i], i, arr)) {
				start.push(arr[i])
			}
		}
		return start
	},
	/**
	 *减少collection的值，这个值是集合通过iteratee运行每个元素的累积结果，每次连续调用都为下一次调用的初始值。如果没有给出累积，则使用集合的第一个元素作为初始值
	 *iteratee有四个参数
	 *collection (Array|Object): The collection to iterate over.
	 *[accumulator] (*): The initial value.
	 *输入:reduce([1, 2], function(sum, n) {return sum + n;}, 0);
	 *输出:3
	 *输入:reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
            (result[value] || (result[value] = [])).push(key);
                 return result;
            }, {});
	 *输出:{ '1': ['a', 'c'], '2': ['b'] }
	 */
	reduce: function(collection, iteratee, accumulator) {
		var start = 0
		if (initial === undefined) {
			initial = arr[0]
			start = 1
		}
		for (var i = start; i < arr.length; i++) {
			initial = fn(initial, arr[i])

		}
		return initial
	},
	/**
	 *
	 *
	 */
	chunk: function(arr, size) {
		var l = Math.ceil(arr.length / size)
		var result = new Array(l)
		for (var i = 0; i < l; i++) {
			result[i] = []
		}
		for (var i = 0; i < arr.length; i++) {
			result[parseInt(i / size)][i % size] = arr[i]
		}
		return result
	},
	/**
	 *
	 *
	 */
	compact: function(array) {
		var result = []
		for (var i = 0; i < array.length; i++) {
			if (array[i]) {
				result.push(array[i])
			}
		}
		return result
	},
	/**
	 *
	 *
	 */
	difference: function(array, values) {
		for (var i = 0; i < array.length; i++) {
			for (var j = 0; j < values.length; j++) {
				if (array[i] == values[j]) {
					array.splice(i, 1)
					i--
				}
			}
		}
		return array
	},
	/**
	 *
	 *
	 */
	drop: function(array, n) {
		if (n == undefined) {
			n == 1
			array.splice(0, 1)
		}
		for (var i = 0; i < n; i++) {
			array.splice(0, 1)
		}
		return array
	},
	/**
	 *
	 *
	 */
	dropRight: function(array, n) {
		if (n == undefined) {
			array.pop()
		}
		if (n == 0) {
			return array
		}
		for (var i = 0; i < n; i++) {
			array.pop()
		}
		return array
	},
	/**
	 *
	 *
	 */
	fill: function(array, value, start, end) {

		if (start == undefined && end == undefined) {
			start = 0
			end = array.length
		}
		for (var i = start; i < end; i++) {
			array[i] = value
		}
		return array
	},
	/**
	 *
	 *
	 */
	flatten: function(array) {
		var result = []
		for (var i = 0; i < array.length; i++) {
			if (array[i] instanceof Array) {
				for (var j = 0; j < array[i].length; j++) {
					result.push(array[i][j])
				}
			} else {
				result.push(array[i])
			}
		}
		return result
	},
	/**
	 *
	 *
	 */
	initial: function(array) {
		var result = []
		for (var i = 0; i < array.length - 1; i++) {
			result[i] = array[i]
		}
		return result
	},
	/**
	 *
	 *
	 */
	intersection: function(arr1, arr2) {
		var result = []
		for (i = 0; i < arr1.length; i++) {
			for (var j = 0; j < arr2.length; j++) {
				if (arr1[i] == arr2[j]) {
					result.push(arr1[i])
				}
			}
		}
		return result
	},
	/**
	 *
	 *
	 */
	pullAt: function(array, indexes) {
		var result = []
		for (var i = 1; i < arguments.length; i++) {
			result.push(array[arguments[i]])
		}
		return result
	},
	/**
	 *
	 *
	 */
	invert: function(obj) {
		var result = {}
		for (var key in obj) {
			result[obj[key]] = obj[key]
		}
		return result
	},
	/**
	 *
	 *
	 */
	fromPairs: function(arr) {
		var obj = {}
		for (var i = 0; i < arr.length; i++) {
			obj[arr[i][0]] = arr[i][1]
		}
		return obj
	},
	/**
	 *
	 *
	 */
	head: function(arr) {
		return arr.shift(0, 1)
	},
	/**
	 *
	 *
	 */
	indexOf: function(arr, value, fromindex) {
		if (fromindex == undefined) {
			fromindex = 0
		}
		for (var i = fromindex; i < arr.length; i++) {
			if (arr[i] == value) {
				return i
				break;
			}
		}
	},
	/**
	 *
	 *
	 */
	lastIndexOf: function(arr, value, fromIndex) {
		if (fromIndex == undefined) {
			fromIndex = arr.length
		}
		for (var i = fromIndex; i >= 0; i--) {
			if (arr[i] == value) {
				return i
			}
		}
		return i
	},
	/**
	 *
	 *
	 */
	initial: function(arr) {
		var result = []
		for (var i = 0; i < arr.length - 1; i++) {
			result.push(arr[i])
		}
		return result
	},
	/**
	 *
	 *
	 */
	tail: function(arr) {
		var result = []
		for (var i = 1; i < arr.length; i++) {
			result.push(arr[i])
		}
		return result
	},
	/**
	 *
	 *
	 */
	take: function(arr, n) {
		var result = []
		if (n == undefined) {
			n = 1
		}
		if (n > arr.length) {
			n = arr.length
		}
		for (var i = 0; i < n; i++) {
			result.push(arr[i])
		}
		return result
	},
	/**
	 *
	 *
	 */
	takeRight: function(arr, n) {
		if (n == undefined) {
			n = 1
		}
		if (n == 0) {
			return []
		}
		return arr.slice(-n)
	},
	/**
	 *通过predicate断言array数组值得true或false  如为真则返回这项push进新数组。
	 *predicate可能为array value index
	 *为index时  检索数组每一项通过后的真值，并传进新数组
	 *输入:takeRightwhile([{ 'user': 'barney',  'active': true },{ 'user': 'fred',    'active': false },{ 'user': 'pebbles', 'active': false }],  ['active', false])
	 *输出:[{ 'user': 'fred',    'active': false },{ 'user': 'pebbles', 'active': false }]
	 *输入:takeRightwhile([{ 'user': 'barney',  'active': true },{ 'user': 'fred',    'active': false },{ 'user': 'pebbles', 'active': false }], function(o) { return !o.active; })
	 *输出:[{ 'user': 'barney',  'active': true }]
	 *输入:takeRightwhile([{ 'user': 'barney',  'active': true },{ 'user': 'fred',    'active': false },{ 'user': 'pebbles', 'active': false }],  'active')
	 *输出:[]
	 */
	takeRightwhile: function(array, predicate) {
		var result = []
		if (typeof(predicate) == 'function') {
			for (var i = 0; i < array.length; i++) {
				if (predicate(array[i])) {
					result.push(array[i])
				}
			}
		}
		if (Array.isArray(predicate)) {
			for (var i = 0; i < array.length; i++) {
				for (var key in array[i]) {
					if (predicate[0] === array[i].key || predicate[1] === array[i][key]) {
						result.push(array[i])
					}
				}
			}
		}
		for (var i = 0; i < array.length; i++) {
			if (array[i] === predicate) {
				result.push(array[i])
			}
		}
		return result
	},
	/**
	 *
	 *
	 */
	join: function(arr, value) {
		var result = ''
		if (value == undefined) {
			value = ','
		}
		for (var i = 0; i < arr.length - 1; i++) {
			result += arr[i] + value
		}
		return result
	},
	/**
	 *
	 *
	 */
	last: function(arr) {
		var l = arr.length
		var a
		a = arr[l - 1]
		return a
	},
	/**
	 *
	 *
	 */
	pullAll: function(arr1, arr2) {
		for (var i = 0; i < arr2.length; i++) {
			for (var j = 0; j < arr1.length; j++) {
				if (arr1[j] == arr2[i]) {
					arr1.splice(j, 1)
				}
			}
		}
		return arr1
	},
	/**
	 *
	 *
	 */
	xor: function(arr1, arr2) {
		var result = []
		for (var i = 0; i < arr1.length; i++) {
			if (arr1[i] != arr2[i]) {
				result.push(arr1[i])
				result.push(arr2[i])
			}
		}
		return result
	},
	/**
	 *
	 *
	 */
	xorBy: function(arr1, arr2, fn) {
		var result = []
		for (var i = 0; i < arr1.length; i++) {
			if (fn(arr1[i]) != fn(arr2[i])) {
				result.push(arr1[i])
				result.push(arr2[i])
			}
		}
		return result
	},
	/**
	 *将数组的值进行反向排序
	 *
	 */
	/**
	 *
	 *
	 */
	reverse: function(arr) {
		var result = []
		for (var i = 0; i < arr.length; i++) {
			result.unshift(arr[i])
		}
		return result
	},
	/**
	 *将value值与数组中的每一项进行比较，如果小于那一项其在数组中的位置就为其前一项
	 *值大于最后一项，其位置就为第arr.length项。  结果输出位比较之后value在数组中的比较位置
	 */
	sortedIndex: function(arr, value) {
		var result
		for (var i = 0; i < arr.length; i++) {
			if (value < arr[0]) {
				result = 0
			}
			if (value > arr[arr.length - 1]) {
				result = arr.length
			}
			if (value > arr[i] && value < arr[i + 1]) {
				result = i + 1
			}
		}
		return result
	},
	/**
	 *数组各项求值
	 */
	sum: function(arr) {
		var sum = 0
		for (var i = 0; i < arr.length; i++) {
			sum += arr[i]
		}
		return sum
	},
	slice: function(start, end) {
		var result = []
		if (start === undefined) {
			start = 0
		}
		if (end === undefined) {
			end = this.length
		}
		for (var i = start; i < end; i++) {
			result.push(this[i])
		}
		return result
	},
	arrayToLinkedList: function(array) {
		if (array.length == 0) { //假如数组为空的话，直接返回{next: null}
			return {
				next: null
			}
		}
		var result = [] //定义将value的值，利用循环
		for (var i = 0; i < array.length; i++) //{赋给值（也为一个对象，）得值
			result.push({
			value: array[i],
			next: null
		})
		for (var i = 0; i < array.length - 1; i++) { //
			result[i].next = result[i + 1]
		}
		return result[0]
	},
	/**
	 *从左开始对比数组每一项值，如果值等于value就结束对比，并返回数组下标
	 */
	sortedIndexOf: function(array, value) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] === value) {
				return i
				break;
			}
		}
		return i
	},
	/**
	 *从数组右开始对比数组，如果值等于value则立即结束，并返回数组下标
	 *
	 */
	sortedLastIndex: function(array, value) {
		for (var i = array.length - 1; i >= 0; i--) {
			if (array[i] === value) {
				return i + 1
				break;
			}
		}
		return i + 1
	},
	/**
	 *遍历数组，其中只保留每个元素的第一次出现。
	 *结果值的顺序由它们在数组中出现的顺序确定。
	 */
	uniq: function(array) {
		var result = []
		for (var i = 0; i < array.length; i++) {
			if (result.indexOf(array[i]) == -1) {
				result.push(array[i])
			}
		}
		return result
	},
	isArray: function(value) {
		if (value instanceof Array) {
			return true
		} else {
			return false
		}
	},
	/**
	 *类数组是：不是数组，但是有 length 属性，且属性值为非负 Number
	 *length上限值 MAX_ARRAY_INDEX（最大安全整数 2的53次幂减1）
	 */
	isArrayLike: function(value) {
		if (value.length >= 0) {
			return true
		} else {
			return false
		}
	},
	isArrayLikeObject: function(value) {
		if ((value.length >= 0) && (value instanceof Object)) {
			return true
		} else {
			return false
		}
	},
	isBoolean: function(value) {
		if (value === true || value === false) {
			return true
		} else {
			return false
		}
	},
	/**
	 *判断一个数是否为正整数
	 */
	isInteger: function(value) {
		if (typeof(value) == 'number' && value % 1 == 0) {
			return true
		} else {
			return false
		}
	},
	/**
	 *部分匹配，假如有一个属性和值都相等，那即返回true 
	 *
	 */
	isMatch: function(object, source) {
		for (var key in object) {
			for (var key1 in source) {
				if (key == key1 && object[key] == source[key1]) {
					return true
				}
			}
		}
		return false
	},
	/**
	 *通过iteratee映射对比array及values的值。输出不相同的值组成一个新的数组。
	 *iteratee分为函数和对象两种情况
	 */
	differenceBy: function(array, values, iteratee) {
		var result = []
		if (typeof(iteratee) == "string") {
			for (var i = 0; i < array.length; i++) {
				for (var j = 0; j < values.length; j++) {
					if (array[i][iteratee] !== values[j][iteratee]) {
						result.push(array[i])
					}
				}
			}
		}
		if (typeof(iteratee) == 'function') {
			for (var i = 0; i < array.length; i++) {
				if (iteratee(array[i]) != iteratee(values[i])) {
					result.push(array[i])
				}
			}
		}
		return result
	},
	differenceWith: function(array, values, comparator) {
		var result = []
		for (var i = 0; i < array.length; i++) {
			for (var j = 0; j < values.length; j++) {
				if (comparator(array[i], values[j])) {
					result.push(array[i])
				}
			}
		}
		return result
	},
	/**
	 *判断value 与other值的大小
	 *value > other 返回真   否则为假
	 */
	lt: function(value, other) {
		if (other > value) {
			return true
		} else {
			return false
		}
	},
	/**
	 *判断value与other的大小
	 *value小于等于other 返回true  否则为false
	 */
	lte: function(value, other) {
		if (value <= other) {
			return true
		} else {
			return false
		}
	},
	/**
	 *将对象，string转化为数组，当为数字时，数组为空;当为null 时 数组为空
	 *输入:toArray({ 'a': 1, 'b': 2 })
	 *输出:[1, 2]
	 *输入:toArray('abc');
	 *输出:['a', 'b', 'c']
	 */
	toArray: function(value) { // 值转变为数组
		var result = []

		if (typeof(value) == 'object') {
			for (var key in value) {
				result.push(value[key])
			}
			return result
		}
		if (typeof(value) == 'string') { //splic 方法  If an empty string ("")is used as the separator, the string is split between each character.
			return value.split('')
		}
		if (typeof(value) == 'number' || typeof(value) == 'null') {
			return []
		}
	},
	/**
	 *求数组各项的和
	 *
	 */
	sum: function(arr) {
		var result = 0
		for (var i = 0; i < arr.length; i++) {
			result += arr[i]
		}
		return result
	},
	/**
	 *求数组通过iteratee后数组每项值得和，
	 *iteratee 为object function;
	 *输入:sumBy([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], function(o) { return o.n; })
	 *输出:20
	 *输入:sumBy([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n')
	 *输出:20
	 */
	sumBy: function(array, iteratee) {
		var result = 0
		for (var i = 0; i < array.length; i++) {
			if (iteratee instanceof Object) {
				result += iteratee(array[i])
			} else {
				result += array[i][iteratee]
			}
		}
		return result
	},
	/**
	 *如果number大于lower 并且小于 upper  返回number   如果number比lower还小，则返回lower，若number比upper大则返回upper
	 *输入:clamp(-10, -5, 5)
	 *输出:-5
	 *输入:clamp(10, -5, 5)
	 *输出:5
	 */
	clamp: function(number, lower, upper) {
		if (number > lower && number < upper) {
			return number
		} else if (number < lower) {
			return lower
		} else if (number > upper) {
			return upper
		}
	},
	/**
	 *判断number是否在start与end之间，在之间则返回true 否则返回false
	 *当end为nudefined时 其值为零，
	 *输入:inRange(3, 2, 4)
	 *输出:true
	 *输入:inRange(-3, -2, -6)
	 *输入:true
	 *输出:inRange(4, 2)
	 *输出:false
	 *输入:inRange(5.2, 4)
	 *输出:false
	 */
	inRange: function(number, start, end) {
		if (end == undefined) {
			end = 0
		}
		if (start > end) {
			if (number < start && number > end) {
				return true
			} else {
				return false
			}
		}
		if (start < end) {
			if (number > start && number < end) {
				return true
			} else {
				return false
			}
		}
	},
	/**
	 *两数相减
	 *输入:subtract(6,4)
	 *输出:2
	 */
	subtract: function(minuend, subtrahend) {
		return minuend - subtrahend
	},
	/**
	 *求数组项最大值的项
	 *当数组的长度为零(即为空数组时)返回undefined
	 *输入:max([4, 2, 8, 6])
	 *输出:8
	 *输入:max([])
	 *输出:undefined
	 */
	max: function(array) {
		var tamp = 0
		if (array.length == 0) {
			return undefined
		}
		for (var i = 0; i < array.length; i++) {
			if (array[i] > tamp) {
				tamp = array[i]
			}
		}
		return tamp
	},
	/**
	 *
	 *
	 */
	xorWith: function(arrays, comparator, fn) {
		var result = []
		for (var i = 0; i < arrays.length; i++) {
			for (var j = 0; j < comparator; j++) {
				if (fn(arrays[i], comparator[j])) {
					result.push(arrays[i])
					result.push(comparator[j])
				}
			}
		}
		return result
	},
	/**
	 *
	 *
	 */
	zip: function(arrays) {
		var result = [
			[],
			[]
		]
		for (var i = 0; i < arguments.length; i++) {
			result[0].push(arguments[i][0])
			result[1].push(arguments[i][1])
		}
		return result
	},
	/**
	 *
	 *
	 */
	isFunction: function(value) {
		if (typeof value == "function") {
			return true
		} else {
			return false
		}
	},
	/**
	 *求数组的中间数
	 *输入:mean([4, 2, 8, 6])
	 *输出:5
	 */
	mean: function(array) {
		var sum = 0
		var avg
		for (var i = 0; i < array.length; i++) {
			sum += array[i]
		}
		avg = sum / array.length
		return avg
	},
	/**
	 *
	 *
	 */
	meanBy: function(array, ite) {
		var sum = 0
		var avg
		for (var i = 0; i < array.length; i++) {
			if (typeof(ite) == 'function') {
				sum += ite(array[i])
			}
			if (typeof(ite) == 'string') {
				for (ite in array[i]) {
					sum += array[i][ite]
				}
			}
		}
		avg = sum / array.length
		return avg
	},
	/**
	 *
	 *
	 */
	dropRightWhile: function(array, pre) {
		var result = []
		for (var i = array.length - 1; i >= 0; i--) {
			if (typeof(pre) == 'function') {
				if (!pre(array[i])) {
					result.push(array[i])
				}
			}
			if (Array.isArray(pre)) {
				if (!array[i][pre[0]] == pre[1]) {
					result.push(array[i])
				}
			}
			if (typeof(pre) == 'string') {
				if (array[i].hasOwnProperty(pre)) {
					result.push(array[i])
				}
			}
			if (typeof(pre) == 'object') {
				var key
				for (key in array[i]) {
					if (array[i][key] !== pre[key]) {
						result.push(array[i])
						break
					}
				}
			}
		}
		return result
	},
	/**
	 *
	 *
	 */
	dropWhile: function(array, pre) {
		var result = []
		for (var i = 0; i < array.length; i++) {
			if (Array.isArray(pre)) {
				if (array[i][pre[0]] !== pre[1]) {
					result.push(array[i])
				}
			} else if (typeof(pre) == 'function') {
				if (!pre(array[i])) {
					result.push(array[i])
				}
			} else if (typeof(pre) == 'object') {
				var key
				for (key in array[i]) {
					if (array[i][key] !== pre[key]) {
						result.push(array[i])
						break
					}
				}
			} else if (typeof(pre) == "string") {
				if (array[i].hasOwnProperty(pre)) {
					result.push(array[i])
				}
			}
		}
		return result
	},
	/**
	 *
	 *
	 */

	/**
	 *
	 *
	 */

	/**
	 *
	 *
	 */

	/**
	 *
	 *
	 */

	/**
	 *
	 *
	 */

	/**
	 *
	 *
	 */


}
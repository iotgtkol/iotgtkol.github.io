var LiuWei = {
	map: function(arr, fn) {
		var result = []
		for (var i = 0; i < arr.length; i++) {
			result.push(fn(arr[i], i, arr))
		}
		return result
	},
	filter: function(arr, fn) {
		for (var i = 0; i < arr.length; i++) {
			if (!fn(arr[i], i, arr) == true) {
				arr.splice(arr[i], 1)
			}
		}
		return arr
	},
	partition: function(arr, fn) {
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
	every: function(collection, fn) {
		for (var i = 0; i < collection.length; i++) {
			if (fn(collection[i], i, collection)) {
				return false
			}
		}
		return true
	},
	some: function(collection, fn) {
		for (var i = 0; i < collection.length; i++) {
			if (fn(collection[i], i, collection) == true) {
				return true
			}
		}
		return false
	},
	reject: function(arr, fn) {
		var start = []
		for (var i = 0; i < arr.length; i++) {
			if (!fn(arr[i], i, arr)) {
				start.push(arr[i])
			}
		}
		return start
	},
	reduce: function(arr, fn, initial) {
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
	compact: function(array) {
		var result = []
		for (var i = 0; i < array.length; i++) {
			if (array[i]) {
				result.push(array[i])
			}
		}
		return result
	},
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
	initial: function(array) {
		var result = []
		for (var i = 0; i < array.length - 1; i++) {
			result[i] = array[i]
		}
		return result
	},
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
	pullAt: function(array, indexes) {
		var result = []
		for (var i = 1; i < arguments.length; i++) {
			result.push(array[arguments[i]])
		}
		return result
	},
	invert: function(obj) {
		var result = {}
		for (var key in obj) {
			result[obj[key]] = obj[key]
		}
		return result
	},
	fromPairs: function(arr) {
		var obj = {}
		for (var i = 0; i < arr.length; i++) {
			obj[arr[i][0]] = arr[i][1]
		}
		return obj
	},
	head: function(arr) {
		return arr.shift(0, 1)
	},
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
	initial: function(arr) {
		var result = []
		for (var i = 0; i < arr.length - 1; i++) {
			result.push(arr[i])
		}
		return result
	},
	tail: function(arr) {
		var result = []
		for (var i = 1; i < arr.length; i++) {
			result.push(arr[i])
		}
		return result
	},
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
	takeRight: function(arr, n) {
		if (n == undefined) {
			n = 1
		}
		if (n == 0) {
			return []
		}
		return arr.slice(-n)
	},
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
	last: function(arr) {
		var l = arr.length
		var a
		a = arr[l - 1]
		return a
	},
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
		for (var i = 0; i < arrar.length; i++) {
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
				return i
				break;
			}
		}
		return i
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


	/**
	 *
	 *
	 */



}

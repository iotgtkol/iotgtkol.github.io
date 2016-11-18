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
			if (!fn(arr[i], i, arr)) {
				arr.splice(i, 1)
			}
		}
		return arr
	},
	chunk:function(arr, size) {
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
	concat: function(array, [values]) {

	},
	difference: function(array, values) {
		var result = []
		for (var i = 0; i < array.length; i++) {
			if (array[i] != values[i]) {
				result.push(array[i])
			}
		}
		return result
	},
	drop: function(array, n) {
		if (n == undefined) {
			array.splice(0)
		}
		for (var i = 0; i < n; i++) {
			array.splice(0, 1)
		}
		return array
	},
	dropRight: function(array, n) {
		if (n == 0 || n == undefined) {
			array.pop()
		}
		for (var i = 0; i < n; i++) {
			array.pop()
		}
		return array
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


}

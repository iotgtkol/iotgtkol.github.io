var LiuWei = {
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
	},
	concat: function(array, [values]) {

	},
	difference: function(array, [values]) {
		var a = []
		var b = []
		var result = []
		for (var i = 0; i < a.length; i++) {
			if (a[i] == b[i]) {
				result.push(a[i])
			}
		}
		return result
	},


}
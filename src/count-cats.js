const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
	var count = 0;
	for (var i=0;i<arr.length;i++){
		for (var j=0;j<arr[i].length;j++){
			if (arr[i][j]=='^^') count++
		}
	}
	return count;
};
  



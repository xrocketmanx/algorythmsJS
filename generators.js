/**
 * generates random string
 * @param  {Number} length - length of generated string
 * @return {String} generated string 
 */
function generateRandomString(length) {
	var strArray = new Array(length);
	for (var i = 0; i < length; i++) {
		strArray.push(generateRandomSymbol());
	}
	return strArray.join('');
}

/**
 * generates random unicode symbol
 * @return {String} generated symbol
 */
function generateRandomSymbol() {
	return String.fromCharCode(Math.floor(Math.random() * 65435));
}

function generateRandomMultidimensionalArray(length, maxDepth) {
	var array = [];
	for (var i = 0; i < length; i++) {
		if (maxDepth && Math.random() * 2 > 0.5) {
			var innerArray = generateRandomMultidimensionalArray(
				generateRandomInteger(length / 2) + 1, 
				maxDepth - 1);
			array.push(innerArray);
			i += innerArray.length - 1;
		} else {
			array.push(generateRandomInteger(65435)); 
		}
	}
	return array;
}

/**
 * generates random integer
 * @param  {Number} range - upper border of random number
 * @return {Number} integer namber
 */
function generateRandomInteger(range) {
	return Math.floor(Math.random() * range);
}
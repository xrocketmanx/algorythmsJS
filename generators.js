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
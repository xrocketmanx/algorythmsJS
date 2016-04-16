/**
 * reverses string with half length switch cycle
 * @param  {String} str 
 * @return {String} reversed string
 */
function reverseString(str) {
	var strArray = str.split('');
	var length = strArray.length;
	for (var i = 0; i < length / 2; i++) {
		var temp = strArray[i];
		strArray[i] = strArray[length - i - 1];
		strArray[length - i - 1] = temp;
	}
	return strArray.join('');
}

/**
 * reverses string in 1 line
 * @param  {String} str 
 * @return {String} reversed string
 */
function reverseStringSimple(str) {
	return str.split('').reverse().join('');
}

/**
 * reverses string with cycle
 * @param  {String} str 
 * @return {String} reversed string
 */
function reverseStringCycle(str) {
	var result = [];
	for (var i = str.length - 1; i >= 0; i--) {
		result.push(str.charAt(i));
	}
	return result.join('');
}

/**
 * reverses string using recursion
 * @param  {String} str 
 * @return {String} reversed string
 */
function reverseStringRecursive(str) {
	return str !== "" ? reverseStringRecursive(str.substring(1)) + str.charAt(0) : "";
}
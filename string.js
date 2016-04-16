/**
 * reverses string in 1 line
 * @param  {String} str 
 * @return {String} reversed string
 */
function reverseStringSimple(str) {
	if (typeof str !== "string") {
		throw new Error("wrong argument type");
	}
	return str.split('').reverse().join('');
}

function reverseString(str) {
	if (typeof str !== "string") {
		throw new Error("wrong argument type");
	}
	var strArray = str.split('');
	var length = strArray.length;
	for (var i = 0; i < length / 2; i++) {
		var temp = strArray[i];
		strArray[i] = strArray[length - i - 1];
		strArray[length - i - 1] = temp;
	}
	return strArray.join('');
}
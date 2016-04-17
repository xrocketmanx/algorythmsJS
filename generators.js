"use strict";
var UNICODE_MAX = 65435;
/**
 * generates random string
 * @param  {Number} length length of generated string
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
	return String.fromCharCode(Math.floor(Math.random() * UNICODE_MAX));
}

/**
 * generates random array
 * @param  {Number} length number of elements
 * @return {Array} generated Array
 */
function generateArray(length) {
	var array = [];
	for (var i = 0; i < length; i++) {
		array.push(generateRandomInteger(UNICODE_MAX));
	}
	return array;
}

/**
 * generates random multidimensional array
 * @param  {Number} length number of primitive elements in array
 * @param  {Number} maxDepth max depth of array
 * @return {Array} generated Array
 */
function generateRandomMultidimensionalArray(length, maxDepth) {
	var array = [];
	for (var i = 0; i < length; i++) {
		if (maxDepth && Math.random() > 0.5) {
			var innerArray = generateRandomMultidimensionalArray(
				generateRandomInteger(length / 2) + 1, 
				maxDepth - 1);
			array.push(innerArray);
			i += innerArray.length - 1;
		} else {
			array.push(generateRandomInteger(UNICODE_MAX)); 
		}
	}
	return array;
}

/**
 * generates random integer
 * @param  {Number} range upper border of random number
 * @return {Number} integer namber
 */
function generateRandomInteger(range) {
	return Math.floor(Math.random() * range);
}
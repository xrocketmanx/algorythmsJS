"use strict";
/**
 * Searches in Array of Arrays by test fully recursive
 * @param  {Object} array - array or vlue
 * @param  {Function} test - function for testing element
 * @return {Array} resulting array of matches
 */
function searchArrayRecursive(array, test) {
	if (Array.isArray(array)) {
		if (array.length === 0) {
			return [];
		}
		var head = searchArrayRecursive(getHead(array), test);
		var tail = searchArrayRecursive(getTail(array), test);
		return prepend(tail, head);
	} else {
		if (test(array)) {
			return array;
		} else {
			return [];
		}
	}
}

/**
 * Returns head of array
 * @param  {Array} array 
 * @return {Object} head of array
 */
function getHead(array) {
	if (array[0]) return array[0];
	return [];
}

/**
 * Returns tail of array
 * @param  {Array} array 
 * @return {Array} tail of array
 */
function getTail(array) {
	return array.slice(1);
}

/**
 * Prepends element or elements to array without changing array
 * @param  {Object} array - array or value to prepend
 * @param  {Object} element - array or value to prepend
 * @return {Array} resulting array
 */
function prepend(array, element) {
	var result = array.slice();
	return result.reverse().concat(element).reverse();
}

/**
 * Searches in Array of Arrays by test half recursive
 * @param  {Object} array - array or value	
 * @param  {Function} test - function for testing element
 * @return {Array} resulting array of matches
 */
function searchArray(array, test) {
	var result = [];
	if (!Array.isArray(array)) {
		if (test(array)) {
			result.push(array);
		}
	}
	for (var i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			result.push.apply(result, searchArray(array[i], test));
		} else {
			if (test(array[i])) {
				result.push(array[i]);
			}
		}
	}
	return result;
}

/**
 * Searches in Array of Arrays by test iterative
 * @param  {Object} array - array or value	
 * @param  {Function} test - function for testing element
 * @return {Array} resulting array of matches
 */
function searchArrayIterative(array, test) {
	var result = [];
	var stack = [];
	stack.push(array);
	while (stack.length > 0) {
		var temp = stack.pop();
		if (Array.isArray(temp)) {
			stack.push.apply(stack, temp);
		} else {
			if (test(temp)) {
				result.push(temp);
			}
		}
	}
	return result.reverse();
}
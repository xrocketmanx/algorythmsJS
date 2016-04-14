/***
Recursive search in arrays of arrays by test
****element - array or value
****test - function to test element
****/
function searchArrayRecursive(element, test) {
	if (isArray(element)) {
		if (element.length === 0) {
			return [];
		}
		var head = searchArrayRecursive(getHead(element), test);
		var tail = searchArrayRecursive(getTail(element), test);
		return prepend(tail, head);
	} else {
		if (test(element)) {
			return element;
		} else {
			return [];
		}
	}
}

function getHead(element) {
	if (element[0]) return element[0];
	return [];
}

function getTail(element) {
	return element.slice(1);
}

function prepend(array, element) {
	var result = array.slice();
	if (!isArray(element)) {
		result.unshift(element);
	} else {
		result.unshift.apply(result, element);
	}
	return result;
}

/***
Half recursive search in arrays of arrays by test
****array
****test - function to test element
****/
function searchArray(array, test) {
	var result = [];
	for (var i = 0; i < array.length; i++) {
		if (isArray(array[i])) {
			result.push.apply(result, searchArray(array[i], test));
		} else {
			if (test(array[i])) {
				result.push(array[i]);
			}
		}
	}
	return result;
}

/***
Iterative(using stack) search in arrays of arrays by test
****array
****test - function to test element
****/
function searchArrayIterative(array, test) {
	var result = [];
	var stack = [];
	stack.push(array);
	while (stack.length > 0) {
		var temp = stack.pop();
		if (isArray(temp)) {
			stack.push.apply(stack, temp);
		} else {
			if (test(temp)) {
				result.push(temp);
			}
		}
	}
	return result.reverse();
}

function isArray(value) {
	return value.constructor.name.indexOf("Array") >= 0;
}
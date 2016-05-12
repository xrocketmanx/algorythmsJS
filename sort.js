"use strict";

function selectionSort(array) {
	array = array.slice();
	for (var i = 0; i < array.length - 1; i++) {
		var min = i;
		for (var j = i + 1; j < array.length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		var temp = array[i];
		array[i] = array[min];
		array[min] = temp;
	}
	return array;
}

function bubbleSort(array) {
	array = array.slice();
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				var temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}

function insertSort(array) {
	array = array.slice();
	for (var i = 1; i < array.length; i++) {
		var current = array[i];
		for (var j = i - 1; j >= 0 && array[j] > current; j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = current;
	}
	return array;
}

function shakerSort(array) {
	array = array.slice();
	var left = 0;
	var right = array.length - 1;
	while(left < right) {
		for (var i = left; i < right; i++) {
			if (array[i] > array[i + 1]) {
				var temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
			}
		}
		right--;
		for (var i = right; i > left; i--) {
			if (array[i] < array[i - 1]) {
				var temp = array[i];
				array[i] = array[i - 1];
				array[i - 1] = temp;
			}
		}
		left++;
	}
	return array;
}

function shellSort(array) {
	array = array.slice();
	var h = Math.round(array.length / 9);
	while (h > 0) {
		for (var i = h; i < array.length; i++) {
			var current = array[i];
			for (var j = i - h; j >= 0 && array[j] > current; j -= h) {
				array[j + h] = array[j];
			}
			array[j + h] = current;
		}
		h = Math.round(h / 3);
	}
	return array;
}

function mergeSort(array) {
	if (array.length < 2) return array;

	var center = Math.floor(array.length / 2);
	var left = mergeSort(array.slice(0, center));
	var right = mergeSort(array.slice(center));

	return merge(left, right);
}

function merge(left, right){
    var result = [];
	for (var i = 0, j = 0; i < left.length && j < right.length;) {
		if (left[i] < right[j]) {
			result.push(left[i++]);
		} else {
			result.push(right[j++]);
		}
	}

    return result.concat(left.slice(i)).concat(right.slice(j));
}
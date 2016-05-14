"use strict";
var assert = chai.assert;

describe("Sorting algorythms", function() {
	this.slow(2);
	var sortedArray = [1, 2, 3, 4, 5];
	var unSortedArray = [1, 3, 5, 2, 4];
	var bigArrayLength = 5000;
	var bigArray = generateRandomArray(bigArrayLength);
	var bigSorted = generateSortedArray(bigArrayLength);
	var badArray = bigSorted.slice().reverse();

	function generateSortedArray(length) {
		var array = [];
		for (var i = 0; i < length; i++) {
			array.push(i);
		}
		return array;
	}

	function test(method) {
		it("should sort " + unSortedArray, function() {
			assert.deepEqual(method(unSortedArray), sortedArray);
		});

		it("should not modify input array " + unSortedArray, function() {
			assert.notDeepEqual(unSortedArray, sortedArray);
		});

		it("should not change sorted array " + sortedArray, function() {
			assert.deepEqual(method(sortedArray), sortedArray);
		});

		it("speed of sorting big array (length = " + bigArrayLength + ")", function() {
			method(bigArray);
		});

		it("speed of sorting big sorted array (length = " + bigArrayLength + ")", function() {
			method(bigSorted);
		});

		it("speed of sorting big bad array (length = " + bigArrayLength + ")", function() {
			method(badArray);
		});
	}

	describe("Insertion sort", function() {
		test(insertSort);
	});

	describe("Selection sort", function() {
		test(selectionSort);
	});

	describe("Bubble sort", function() {
		test(bubbleSort);
	});

	describe("Shaker sort", function() {
		test(shakerSort);
	});

	describe("Shell sort", function() {
		test(shellSort);
	});

	describe("Merge sort", function() {
		test(mergeSort);
	});

	describe("Quick sort", function() {
		test(quickSort);
	});
});
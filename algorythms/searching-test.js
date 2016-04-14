"use strict";
var assert = chai.assert;

describe("Search in array of arrays: ", function() {
	var testArray = [1, [2, 3, 5], 6, [[[7]]], [10, [11], 4], 9];
	var searchedNumbers = [5, 7, 11, 9];

	describe("searchArrayRecursive", function() {
		testSearch(searchArrayRecursive);
	});

	describe("searchArray(half recursive)", function() {
		testSearch(searchArray);
	});

	describe("searchArrayIterative", function() {
		testSearch(searchArrayIterative);
	});

	function testSearch(searchFunction) {
		it("search equals for " + searchedNumbers, function() {
			assert.deepEqual(searchFunction(testArray, function(element) {
				for (var i = 0; i < searchedNumbers.length; i++) {
					if (element === searchedNumbers[i]) {
						return true;
					}
				}
				return false;
			}), searchedNumbers);
		});

		it("search higher then " + searchedNumbers[0], function() {
			assert(checkHigher(searchedNumbers[0], 
				searchFunction(testArray, function(element) {
					return element > searchedNumbers[0];
				})
			));
		});

		it("search lower then " + searchedNumbers[searchedNumbers.length - 1], function() {
			assert(checkLower(searchedNumbers[searchedNumbers.length - 1], 
				searchFunction(testArray, function(element) {
					return element < searchedNumbers[searchedNumbers.length - 1];
				})
			));
		});

		function checkHigher(value, result) {
			for (var i = 0; i < result.length; i++) {
				if (result[i] <= value) {
					return false;
				}
			}
			return true;
		}

		function checkLower(value, result) {
			for (var i = 0; i < result.length; i++) {
				if (result[i] >= value) {
					return false;
				}
			}
			return true;
		}
	}
});
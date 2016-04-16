"use strict";
var assert = chai.assert;

describe("Search in array of arrays: ", function() {
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
		var testArray = [1, [2, 3, 5], 6, [[[7]]], [10, [11], 4], 9];
		var searchedNumbers = [5, 7, 11, 9];
		var bigArray = generateRandomMultidimensionalArray(200, 10);

		it("should search in " + testArray + " for " + searchedNumbers, function() {
			assert.deepEqual(searchFunction(testArray, function(element) {
				for (var i = 0; i < searchedNumbers.length; i++) {
					if (element === searchedNumbers[i]) {
						return true;
					}
				}
				return false;
			}), searchedNumbers);
		});

		it("should search in big array(10000) faster then 100ms", function() {
			this.timeout(100);
			searchFunction(bigArray, function(element) {
				return element <= 1;
			});
		});

		var testNumber = searchedNumbers[0];
		it('should search in ' + testNumber + ' for ' + testNumber, function() {
			assert.equal(searchFunction(testNumber, function(element) {
				return element === testNumber;
			}), testNumber);
		});

		it('should fail search in ' + testNumber + ' for ' + (testNumber + 1), function() {
			assert.deepEqual(searchFunction(testNumber, function(element) {
				return element === testNumber + 1;
			}), []);
		});
		
		it('should fail search in empty array' + ' for ' + testNumber, function() {
			assert.deepEqual(searchFunction([], function(element) {
				return element === testNumber;
			}), []);
		});
	}
});
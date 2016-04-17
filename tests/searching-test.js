"use strict";
var assert = chai.assert;

describe("Search in array of arrays: ", function() {
	var testData = {
		testArray: [1, [2, 3, 5], 6, [[[7]]], [10, [11], 4], 9],
		searchedNumbers: [5, 7, 11, 9],
		bigArray: generateRandomMultidimensionalArray(200, 10)
	};

	describe("searchArrayRecursive(slow)", function() {
		testSearch(searchArrayRecursive, testData);
	});

	describe("searchArray(half recursive)", function() {
		testSearch(searchArray, testData);
	});

	describe("searchArrayIterative", function() {
		testSearch(searchArrayIterative, testData);
	});

	function testSearch(searchFunction, testData) {

		it("should search in " + testData.testArray + " for " + testData.searchedNumbers, function() {
			assert.deepEqual(searchFunction(testData.testArray, function(element) {
				for (var i = 0; i < testData.searchedNumbers.length; i++) {
					if (element === testData.searchedNumbers[i]) {
						return true;
					}
				}
				return false;
			}), testData.searchedNumbers);
		});

		it("should search in big array(200) faster then 100ms", function() {
			this.timeout(100);
			searchFunction(testData.bigArray, function(element) {
				return element <= 1;
			});
		});

		var testNumber = testData.searchedNumbers[0];
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
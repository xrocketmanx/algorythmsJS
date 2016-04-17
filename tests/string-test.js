"use strict";
var assert = chai.assert;

describe("String reversion:", function() {
	var testData = {
		testString: "abracadabra",
		resultString: "arbadacarba",
		randomString: generateRandomString(10000)
	};

	describe("reverseString", function() {
		reverseTest(reverseString, testData);
	});

	describe("reverseStringSimple", function() {
		reverseTest(reverseStringSimple, testData);
	});

	describe("reverseStringCycle", function() {
		reverseTest(reverseStringCycle, testData);
	});

	describe("reverseStringRecursive", function() {
		reverseTest(reverseStringRecursive, testData);
	});

	function reverseTest(reverseMethod, testData) {

		it("should reverse " + testData.testString, function() {
			assert.equal(reverseMethod(testData.testString), testData.resultString);
		});

		it("should reverse big string(length = " + testData.randomString.length + ") faster then 100ms", 
			function() {
				this.timeout(100);
				reverseMethod(testData.randomString);
			}
		);

		it("should return empty string if empty string passed", function() {
			assert.equal(reverseMethod(""), "");
		});
	}
});
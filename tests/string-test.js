var assert = chai.assert;

describe("String reversion:", function() {
	var testData = {
		testString: "abracadabra",
		resultString: "arbadacarba",
		randomStringLength: 10000,
		randomString: generateRandomString(10000)
	};

	describe("reverseStringSimple", function() {
		reverseTest(reverseStringSimple, testData);
	});

	describe("reverseString", function() {
		reverseTest(reverseString, testData);
	});

	function reverseTest(reverseMethod, testData) {

		it("should reverse " + testData.testString, function() {
			assert.equal(reverseMethod(testData.testString), testData.resultString);
		});

		it("should reverse big string(length = " + testData.randomStringLength + ") faster then 100ms", 
			function() {
				this.timeout(100);
				reverseMethod(testData.randomString);
			}
		);

		it("should return empty string if empty string passed", function() {
			assert.equal(reverseMethod(""), "");
		});

		it("should throw wrongArgument exception if non string passed", function() {
			assert.throws(function() {
				reverseMethod(5);
			}, /wrong argument type/);
		});
	}
});
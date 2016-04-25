"use strict";
var assert = chai.assert;

describe('Prime numbers', function() {
	describe('getPrimesByRange', function() {
		it('should find primes from 0 to 20', function() {
			assert.deepEqual(getPrimesByRange(0, 20), 
				[1, 2, 3, 5, 7, 11, 13, 17, 19]);
		});

		it('should return [] if min >= max', function() {
			assert.deepEqual(getPrimesByRange(20, 0), []);
		});

		it('should return only 17, 19 from 16 to 20', function() {
			assert.deepEqual(getPrimesByRange(16, 20), [17, 19]);
		});
	});
});
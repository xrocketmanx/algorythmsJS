"use strict";
/**
 * Returns primes using Eratosthenes sieve
 * @param  {Number} min minimum prime number
 * @param  {Number} max maximum prime number
 * @return {Array}      primes in range
 */
function getPrimesByRange(min, max) {
	if (min >= max) return [];
	var primes = [];
	if (min <= 1) {
		primes.push(1);
	}
	var numbers = [];
	for (var i = 0; i < max; i++) {
		numbers[i] = 0;
	}

	for (var i = 2; i < Math.floor(Math.sqrt(max)); i++) {
		if (numbers[i] === 0) {
			if (i >= min) {
				primes.push(i);
			}
			for (var j = 2 * i; j < max; j += i) {
				numbers[j] = 1;
			}
		}  
	}

	for (var i = Math.floor(Math.sqrt(max)); i < max; i++) {
		if (numbers[i] == 0 && i >= min) {
			primes.push(i);
		}
	}

	return primes;
}
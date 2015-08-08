"use strict";

/**
 * Largest prime factor of 60085145142
 **/

var util = require('util'),
    start = Date.now(),
    num = 600851475143,
    largestPrime = 2; // Init to the smallest prime

function isPrime(n) {
    // return false if even and not 2
    if (n % 2 == 0  && n != 2) {
       return false;
    }

    for (var i = Math.ceil(Math.sqrt(n)); i > 2; --i) {
	if (n % i ==  0 ) {
	    return false;
        }
    }
    // If we got here it's prime
    return true;
}

// Count down since we're looking for the largest
for(var i = Math.ceil(Math.sqrt(num)); i > 2; --i)
{
   if (num % i == 0 && isPrime(i) && i > largestPrime) {
       largestPrime = i;
       break;
   }
}

console.log(largestPrime);

console.log("Runtime: ", (Date.now() - start));
console.log(util.inspect(process.memoryUsage()));


"use strict";

/**
 * Sum of all even fibonacci numbers below 4Mil
 **/

var util = require('util'),
    start = Date.now(),
    limit = 4000000,
    i = 0,
    j = 1,
    sum = 0;
  
while (j < limit) {
    if (j % 2 === 0) {
	sum += j;
    }
    j = j + i;
    i = j - i;
}
console.log(sum);

console.log("Runtime: ", (Date.now() - start));
console.log(util.inspect(process.memoryUsage()));


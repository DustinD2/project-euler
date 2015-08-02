"use strict";
/**
 * Sum of all multiples of 3 and 5 below 100
 **/

var util = require('util'),
    start = Date.now(),
    sum = 0;

for( var i = 0; i < 1000; ++i)
{
    if (i % 3 === 0 || i % 5 === 0) {
	sum += i;
    }
}

console.log(sum);
console.log("Runtime: ", (Date.now() - start));
console.log(util.inspect(process.memoryUsage()));


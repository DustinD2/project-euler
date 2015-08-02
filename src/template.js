"use strict";

/**
 * 
 **/

var util = require('util'),
    start = Date.now();
  

console.log("Runtime: ", (Date.now() - start));
console.log(util.inspect(process.memoryUsage()));


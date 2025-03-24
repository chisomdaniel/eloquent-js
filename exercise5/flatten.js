#!/usr/bin/env node

function flatten(arrayOfArray) {
    // flatten an array of array into a single array
    return arrayOfArray.reduce((prev, curr) => prev.concat(curr));
}

console.log(flatten([[1, 2, 3, 4, 5],
[2, 3, 4, 5, 6], 
[6, 7, 7, 8, 9]]));

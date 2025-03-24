#!/usr/bin/env node

function every(array, fn) {
    for (let each of array) {
        if (!fn(each)) {
            return false;
        }
    }
    return true
}

console.log("All even: ", every([2, 4, 6, 8, 10], n => n % 2 == 0));
console.log("All odd: ", every([3, 5, 7, 9, 6, 13], n => n % 2 == 1));

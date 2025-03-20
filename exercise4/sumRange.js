#!/usr/bin/env node
function range(first, last, step=1) {
    let nums = [];
    for (let i = first; (i <= last && step > 0) || (step < 0 && i >= last); i+= step) {
        nums.push(i);
    }
    return nums;
}

function sum(numbers) {
    let sum = 0;
    for (let i of numbers) {
        sum += i;
    }
    return sum;
}

console.log((range(20, 10, -1)));
console.log(sum(range(1, 10)));

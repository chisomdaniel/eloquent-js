#!/usr/bin/env node

function reverseArray(array) {
    let newArray = [];
    for (let i = array.length-1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    let arrCopy = [], val;

    for (let i of array) {
        arrCopy.push(i);
    }
    for (let i = 0; i < array.length;) {
        for (let j = arrCopy.length-1; j >= 0; j--) {
            val = arrCopy[j];
            array[i] = val;
            i++;
        }
    }
}

console.log(reverseArray([1, 2, 3, 4, 5]));
let arr = [2, 4, 6, 8, 10];
console.log("Array is: ", arr);
reverseArrayInPlace(arr);
console.log("Array now is ", arr);

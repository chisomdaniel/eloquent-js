#!/usr/bin/env node

function getLast(list) {
    while(list.rest) {
        list = list.rest;
    }
    return list
}

function arrayToList(arr) {
    let list = null;
    let obj, last;
    for (let i of arr) {
        obj = {value: i, rest: null};
        if (list === null) {
            list = obj;
            continue;
        }
        last = getLast(list, obj);
        console.log("last is:", last);
        last.rest = obj;
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    while (list) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}

function prepend(element, list) {
    return {value: element, rest: list};
}

function nth(list, idx) {
    let count = 0;
    while (list) {
        if (count === idx) {
            return list.value;
        }
        list = list.rest;
        count++;
    }
    return undefined;
}

function nthR(list, idx) {
    if (idx === 0 || list === null) {
        return list ? list.value : undefined;
    }
    return nthR(list.rest, idx - 1);
}

let arr = [9, 5, 2, 19, 3];
let list = arrayToList(arr);
console.log(list);
console.log(listToArray(list));
console.log("Found: ", nth(list, 3));
console.log("Found (Recursive): ", nthR(list, 1));
console.log("Prepend", prepend(20, list));
console.log(listToArray(prepend(20, list)));

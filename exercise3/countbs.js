#!/usr/bin/env node

function countChar(text, char) {
    let count = 0;
    for (let i of text) {
        if (i === char) count++;
    }
    return count;
}

function countBs(text) {
    return countChar(text, "B");
}

console.log(countBs("BaBageB"));

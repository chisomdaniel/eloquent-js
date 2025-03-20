#!/usr/bin/env node

function isEven(number) {
    if (number === 0) return true;
    else if (number === 1) return false;
    else if (number < 0) return undefined;

    return isEven(number - 2);
}

console.log(isEven(-1));

#!/usr/bin/env node

let size = 8;

let a = '#';
let b = ' ';

let row1 = a, row2 = b, new_string = '';

for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
        row1 += ' ';
        row2 += '#';
    } else {
        row1 += '#';
        row2 += ' ';
    }
};

for (let i = 1; i < size + 1; i++) {
    if (i % 2 === 0) new_string += row2 + '\n';
    else new_string += row1 + '\n';
}

console.log(new_string)

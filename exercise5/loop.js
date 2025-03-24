#!/usr/bin/env node

function loop(value, test, update, body) {
    for (; test(value); value = update(value)) {
        body(value);
    }
}

function loopW(value, test, update, body) {
    // custom loop function
    while(true) {
        if (!test(value)) {
            return
        }
        body(value);
        value = update(value);
    }
}

loop(5, a => a > 1, a => a-1, a => console.log(a));
loopW(5, a => a > 1, a => a-1, a => console.log(a));

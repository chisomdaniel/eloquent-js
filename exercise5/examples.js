const SCRIPTS = require('./scripts.js')

function filter(array, test) {
    // implemented the filter array method
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element)
        }
    }
    return passed;
}

function map(array, transform) {
    // implemented the map array method
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped
}

function reduce(array, combine, start) {
    // implemented reduce array method
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

function characterCount(script) {
    // count the number of characters in a script
    return reduce(script.ranges, (count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

function characterScript(code) {
    // check the script a character derives from
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function countBy(items, groupName) {
    // groups element and assign them a name
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";

    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}

console.log(textScripts("Hello World"));

//console.log(characterScript("i".charCodeAt(0)));

/*console.log(SCRIPTS.reduce((a, b) => {
    // script with the highest number of characters
    return characterCount(a) < characterCount(b) ? b : a;
})) */

// console.log(filter(SCRIPTS, script => script.living));
//console.log(map(SCRIPTS, s => s.name));

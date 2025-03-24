#!/usr/bin/env node

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    get length() {
        return console.log(`Length is ${this.x - 0}, ${this.y - 0}`);
    }
}

let vec1 = new Vec(3, 5);
let vec2 = new Vec(12, 2);
let vec3 = vec1.plus(vec2);
let vec4 = vec1.minus(vec2);

console.log(vec3.x, vec3.y);
console.log(vec4.x, vec4.y);
vec3.length;


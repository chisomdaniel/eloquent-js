#!/usr/bin/env node
let size = 10;  // change size to any number

for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 1; j <= size; j++) {
        if (i % 2 === 0) {
            line += j % 2 == 0 ? "#" : " ";
        } else {
            line += j % 2 == 0 ? " " : "#";
        }
    }
    console.log(line);
}
/* output:
 # # # # #
# # # # # 
 # # # # #
# # # # # 
 # # # # #
# # # # # 
 # # # # #
# # # # # 
 # # # # #
# # # # # 
*/
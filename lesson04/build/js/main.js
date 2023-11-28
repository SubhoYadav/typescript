"use strict";
// Type Aliases
let bob = {
    name: "Bob Dylan",
    active: false,
    songs: [123, "subho"],
};
// interface counter part
// interface myFunction {
//   (a: number, b: number): number;
// }
const addAll = (a, b) => {
    // type guard
    if (!b) {
        return a;
    }
    // type guard
    return a + b;
};
const subtract = function (c, d) {
    return c - d;
};
console.log(subtract(15, 10));
// Rest parameters
const addIndefinite = (...nums) => {
    nums.reduce((prev, next) => prev + next);
};
// Default parameters
const logMsg = (message = "nothing to log") => {
    console.log(message);
};
logMsg("Subho Yadav");
// never type
// The following function's return type is never
const createError = (message) => {
    throw new Error(message);
};
//  the never type arises when the function contains an infinite loop so take it as a warning
const infiniteLoop = () => {
    let i = 1;
    while (true) {
        i++;
        if (i == 10)
            break;
    }
};
console.log(bob);

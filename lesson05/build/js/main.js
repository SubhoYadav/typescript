"use strict";
// Type assertions also knowns as typr casting using the 'as' keyword
let a = "hello";
let b = a; // This is not valid in react with typescript
let c = a;
// Forced / double asertion with the 'unknown' type assertion
// 10 as string
10; // This is valid in react with typescript
const addOrConcat = (a, b, op) => {
    if (op == 'add')
        return a + b;
    return "" + a + b;
};
// '!' serves as non-null assertion, use it when u want to mark something as not null
const val = addOrConcat(2, 2, "add");
const myVal = addOrConcat(2, 2, "concat");

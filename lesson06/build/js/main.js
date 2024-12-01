"use strict";
console.log("LESSON 1");
let username = "Dave";
console.log(username);
let a = 12;
let b = 6;
let c = 4;
console.log(a / b);
console.log(b * c);
console.log("LESSON 2");
let name1 = 'Subho';
let meaningOfLife;
let album;
let isLoading;
name1 = "Dave";
meaningOfLife = 24;
album = 1984;
album = true;
album = 'Manak';
// union types
let postId;
let isActive;
let re = /\w+/g;
const sum = (a, b) => {
    return a + b;
};
console.log("LESSON 3");
// Typescript does not impose any restrictions on the length of the array oe specific positions of data based on the datatype
let stringArr = ['one', 'hey', 'Subho'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = [1984, true, 'jim'];
let namesArray = [];
let emptyArray = [];
// If u want typescript to restrict the position of data types and the length of the array use a tuple instead
// Tuple
let myTuple = ['Subho', 24, true];
mixedData = ['Dave', 42, false];
mixedData = myTuple;
// Due to the abv restrictions on tuple we cannot  do mixedData = myTuple
// Objects
let myObj;
myObj = [];
myObj = {};
console.log(typeof myObj);
let exampleObj = {
    prop1: 'Subho',
    prop2: true
};
const evh = {
    name: 'eddie',
    isActive: false,
    albums: [1984, 5150, 'OU812']
};
const jp = {
    isActive: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    // performing narrowing
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(evh));
console.log(greetGuitarist(jp));
// Enums
// These are not type level additions but instead are added to the language dynamically at runtime
var Grades;
(function (Grades) {
    Grades[Grades["U"] = 1] = "U";
    Grades[Grades["S"] = 2] = "S";
    Grades[Grades["G"] = 5] = "G";
    Grades[Grades["VG"] = 6] = "VG";
    Grades[Grades["E"] = 7] = "E";
    Grades[Grades["VE"] = 8] = "VE";
})(Grades || (Grades = {}));
console.log(Grades.U);
console.log(Grades.VE);
console.log('LESSON 4');

"use strict";
// Array types
let stringArr = ["One", "hey", "Subho"];
let guitars = ["Strats", "Les paul", 5150];
let mixedData = ["EVJ", 1984, true];
// Typescript does not have any boundations on the position of a specific datatype, however if you want to have such boundation you can create something called a tuple
// stringArr[0] = 23  ❗ illegal in typescript 
// stringArr.push(84) ❗ illegal in typescript 
guitars[0] = 4587;
guitars.push("Aman Bansal !");
let test = [];
//  Typescript infers the type of test as an array of type: any
let bands = [];
bands.push("Bob Dylan");
// Tuple
let myTuple = ["Subho", 2000, true];
// myTuple[3] = "Aman Bansal" 
// - The tuple must contain only three elements so its illegal ❗
// Array of union type
let mixed = ["Dave", 1, false];
mixed = myTuple;
// Its okay because the tuple and the mixed has the same structure
// myTuple = mixed ❗ There may be a chance that the mixed array contains additional data , where the tuple expects exactly three elements in the array
// object types in typescript
let myObject;
// myObject can store both an object {} and an array[] cause [] are also of type object
myObject = ["Subho", 23];
const singers = {
    name: "Kishore Kumar",
    active: false
};
let Mukesh;
Mukesh = {
    name: "Mukesh",
    active: false
};
let Rafi = {
    name: "MD Rafi",
    active: false
};
const greetSinger = (singer) => {
    return `Hello ${singer.name} !`;
};
console.log(greetSinger(Mukesh));
// Just in case, if we have made the name as an optional property typescript will not complain cause it will just return Hello undefined
// Enums
/* Unlike typescript's other features, enums are not type-level addition to javascript, it is something that is added to the language and the runtime*/
var grades;
(function (grades) {
    grades[grades["U"] = 1] = "U";
    grades[grades["D"] = 5] = "D";
    grades[grades["C"] = 6] = "C";
    grades[grades["B"] = 7] = "B";
    grades[grades["A"] = 8] = "A";
})(grades || (grades = {}));
// The properties are enumerated if you assign a number to one of the enumerated properties other properties will adapt to the assigned value by taking the provided value as a starting point
console.log(grades.U); // 1
console.log(grades.D); // 5 and so on...
console.log(grades.C); // 2 and so on...

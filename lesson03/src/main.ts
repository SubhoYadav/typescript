// Array types

let stringArr = ["One", "hey", "Subho"];

let guitars = ["Strats", "Les paul", 5150]

let mixedData: (string | number | boolean)[] = ["EVJ", 1984, true]

// Typescript does not have any boundations on the position of a specific datatype, however if you want to have such boundation you can create something called a tuple

// stringArr[0] = 23  ❗ illegal in typescript 
// stringArr.push(84) ❗ illegal in typescript 

guitars[0] = 4587
guitars.push("Aman Bansal !") 

let test = []
//  Typescript infers the type of test as an array of type: any

let bands: string[] = []
bands.push("Bob Dylan");

// Tuple
let myTuple: [string, number, boolean] = ["Subho", 2000, true]

// myTuple[3] = "Aman Bansal" 
// - The tuple must contain only three elements so its illegal ❗

// Array of union type
let mixed = ["Dave", 1, false]

mixed = myTuple  
// Its okay because the tuple and the mixed has the same structure

// myTuple = mixed ❗ There may be a chance that the mixed array contains additional data , where the tuple expects exactly three elements in the array

// object types in typescript
let myObject: object
// myObject can store both an object {} and an array[] cause [] are also of type object
myObject = ["Subho", 23]

const singers = {
  name: "Kishore Kumar",
  active: false
}
// Typescript infers the type as: 
// {
//   name: string,
//   active: boolean
// }

// But we can explicitly define a type as follows

// type Singers = {
//   name?: string,
//   active: boolean
//   age?: number // this is how we made the property age, optional
// }

// Instead of type, you can also use interface (nothing changes). Don't worry, dave will discuss this too, used when implementing something similar to a class
interface Singers {
  name?: string,
  active: boolean
  age?: number // this is how we made the property age, optional
}

let Mukesh: Singers;
Mukesh = {
  name: "Mukesh",
  active: false
}

let Rafi:Singers = {
  name: "MD Rafi",
  active: false
}

const greetSinger = (singer: Singers) => {
  return `Hello ${singer.name} !`
}

console.log(greetSinger(Mukesh))

// Just in case, if we have made the name as an optional property typescript will not complain cause it will just return Hello undefined

// Enums
/* Unlike typescript's other features, enums are not type-level addition to javascript, it is something that is added to the language and the runtime*/

enum grades {
  U =1,
  D = 5,
  C,
  B,
  A
}
// The properties are enumerated if you assign a number to one of the enumerated properties other properties will adapt to the assigned value by taking the provided value as a starting point
console.log(grades.U); // 1
console.log(grades.D); // 5 and so on...
console.log(grades.C); // 2 and so on...



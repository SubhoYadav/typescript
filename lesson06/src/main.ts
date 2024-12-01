console.log("LESSON 1");
let username = "Dave"
console.log(username)

let a: number = 12;
let b: number = 6;
let c: number = 4

console.log(a / b);
console.log(b * c);

console.log("LESSON 2")

let name1: string = 'Subho';
let meaningOfLife: number;
let album: any;
let isLoading: boolean;

name1 = "Dave"
meaningOfLife = 24;
album = 1984
album = true
album = 'Manak'

// union types
let postId: string | number
let isActive: number | boolean | string

let re: RegExp = /\w+/g;

const sum = (a: number, b: number) => {
    return a + b;
}

console.log("LESSON 3")

// Typescript does not impose any restrictions on the length of the array oe specific positions of data based on the datatype
let stringArr: string[] = ['one', 'hey', 'Subho'];
let guitars: (string | number)[] = ['Strat', 'Les Paul', 5150];
let mixedData: (number | boolean | string)[] = [1984, true, 'jim'];

let namesArray: string[] = [];
let emptyArray = [] 

// If u want typescript to restrict the position of data types and the length of the array use a tuple instead

// Tuple
let myTuple: [string, number, boolean] = ['Subho', 24, true]
mixedData = ['Dave', 42, false];

mixedData = myTuple

// Due to the abv restrictions on tuple we cannot  do mixedData = myTuple

// Objects
let myObj: object;
myObj = [];
myObj = {};

console.log(typeof myObj);

let exampleObj = {
    prop1: 'Subho',
    prop2: true
}
// the name of the keys also matter to compile in TS
// exampleObj = {name: 'subho'}

type TGuitarist = {
    name?: string,
    isActive: boolean, // ? makes the property optional, also giving the type boolean | undefined to 'isActive'
    albums: (string | number)[]
}

const evh: TGuitarist = {
    name: 'eddie',
    isActive: false,
    albums: [1984, 5150, 'OU812']
}

const jp: TGuitarist = {
    isActive: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: TGuitarist) => {
    // performing narrowing
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`
    }
    return 'Hello!'
}

console.log(greetGuitarist(evh))
console.log(greetGuitarist(jp))

// Enums
// These are not type level additions but instead are added to the language dynamically at runtime
enum Grades {
    'U' = 1,
    'S',
    'G' = 5,
    'VG',
    'E',
    'VE'
}

console.log(Grades.U)
console.log(Grades.VE)

console.log('LESSON 4')
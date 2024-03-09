// Type Aliases

type stringOrNumber = (string | number)[];

type Singers = {
  name: string;
  active: boolean;
  songs: (string | number)[];
};

type hollywoodSingers = {
  name: string;
  active: boolean;
  songs: stringOrNumber;
};

let bob: hollywoodSingers = {
  name: "Bob Dylan",
  active: false,
  songs: [123, "subho"],
};

// Type alias for a function
type myFunction = (a: number, b: number) => number;
// interface counter part
// interface myFunction {
//   (a: number, b: number): number;
// }

const addAll = (a: number, b?: number): number => {
  // type guard
  if (!b) {
    return a;
  }
  // type guard
  return a + b;
};

const subtract: myFunction = function (c, d) {
  return c - d;
};
console.log(subtract(15, 10));

// Rest parameters
const addIndefinite = (...nums: number[]) => {
  nums.reduce((prev, next) => prev + next);
};

// Default parameters
const logMsg = (message: string = "nothing to log"): void => {
  console.log(message);
};

logMsg("Subho Yadav");

// never type
// The following function's return type is never
const createError = (message: string): never => {
  throw new Error(message);
};
// never is also used when nothing is left in the union for exampl3

const  printType =  (x: string | number): (string | number | never) => {
  if (typeof x === "string") {
    return "string"
  }
  else if (typeof x === "number") {
    return 100
  }
  else {
    throw new Error("Cannot deduce the type")
  }
} 

//  the never type arises when the function contains an infinite loop so take it as a warning

const infiniteLoop = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i == 10) break;
  }
};

console.log(bob);

/**
 * Types available in typescript
 * Number
 * String
 * Boolean
 * null
 * undefined
 * void
 * tuple
 * object
 * Array
 * any
 * Never
 * Unknown
 * RegExp
 */

/**
 * any is not a good practice to use in typescript, use the compiler flag noImplicitAny to throw errors on encountering implicit any type inference
 */

let greetings: string = "Hello Typescript";

console.log(greetings);

function addTwo(num: number): number {
  return num + 2;
}

addTwo(5);

function createUser({name: string, isPaid: boolean}) {}

// const registerUser = ({name: string, email: string}) => {} // the syntax does not work with arrow functions

function createSubho ({username: string, isPaid: boolean}) {

}

// createSubho({username: "Subho yadav", isPaid: true, email: "subho@gide.ai"}) 

// gives me error of non existence of email key

const subho = {
  username: "Subho yadav", 
  isPaid: true, 
  email: "subho@gide.ai"
}

createSubho(subho); // WEIRD !! the error goes away

// registerUser({userName: "Subho Yadav", password: "subho@gide"})

export {}

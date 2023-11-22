let myName: string = "Subho"
let myProfession: string;
myName = "Dave"

let meaningOfLife: number;
let isLoading: boolean;
let album: any; 
// The type 'any' is discouraged because it defeats the purpouse of typescript

let unionType: string | number;

meaningOfLife = 23;
isLoading = true;
album = "Van Halen" 
album = 2003

unionType = "16th of May 2000"
unionType = 23

const sum = (a: number, b: string) => {
  return a + b;
}

// Typescript infers the return type of a function by itself

let postId: number | string ;
let isActive: number | boolean ;


let re: RegExp = /\w+/g


 
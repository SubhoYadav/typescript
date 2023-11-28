// Type assertions also knowns as typr casting using the 'as' keyword

type One = string
type Two = string | number
type Three = 'hello'

let a:One = "hello"
let b:Two = <Two>a // This is not valid in react with typescript
let c:Three = a as Three

// Forced / double asertion with the 'unknown' type assertion
// 10 as string
(10 as unknown) as string // This is valid in react with typescript

const addOrConcat = (a:number, b:number, op:'add' | 'concat'):number|string => {
  if (op == 'add') return a + b
  return "" + a + b 
}

// '!' serves as non-null assertion, use it when u want to mark something as not null

const val:number = addOrConcat(2,2,"add") as number
const myVal:string = <string>addOrConcat(2,2,"concat")
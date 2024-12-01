console.log("Lesson 07")

// Index Signatures

/**
 * USAGE
 * 1. When the exact name of the keys and the values are not known
 * 2. When u want to access a property within an object dynamically, typescript requires you to declare an index type
 */

// interface TTransactionObject {
//   readonly [index: string]: number | boolean | string
// }

interface TTransactionObject {
  readonly [index: string]: number | boolean | string
  Pizza: number,
  Books: number,
  Jobs: number
}

const todaysTransaction: TTransactionObject = {
  Pizza: 45,
  Books: -20,
  Jobs: -10
}

console.log(todaysTransaction.Pizza)
console.log(todaysTransaction['Pizza'])

// todaysTransaction.Pizza = 45 // readonly

const prop: string = 'Pizza'

console.log(todaysTransaction[prop])

function netTransaction() {
  let total:number = 0;
  for (let prop in todaysTransaction) {
    if (typeof todaysTransaction[prop] == 'number') 
    total += todaysTransaction[prop];
  } 

  return total;
}

console.log(netTransaction())

//////////////////////////////////////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined
  name: string,
  GPA: number,
  classes?: number[]
}

const student1: Student = {
  name: 'Dough',
  GPA: 3.5,
  classes: [100, 200]
}

// function printStuData () {
//   for (let key in student1) {
//     console.log(`${key}: ${student1[key]}`)
//   }
// }

// printStuData()

// keyof operator
// This creates a union type out of the keys of an object

function printStuDataUsingKeyofOperator () {
  for (let key in student1) {
    console.log(`${key}: ${student1[key as keyof Student]}`)
  }
}

printStuDataUsingKeyofOperator()

Object.keys(student1).map(key => {
  console.log(`${key}: ${student1[key as keyof typeof student1]}`)
})


const logStuKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`) 
}

logStuKey(student1, 'GPA')

///////////////////////////////////////////////////////////////////////////////////////
// utility type Record

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number | string>


const monthlyIncome: Incomes = {
  salary: 500,
  bonus: 200,
  sidehustle: 150
}


for (let key in monthlyIncome) {
  console.log(`${key}: ${monthlyIncome[key as keyof Incomes]}`)
}

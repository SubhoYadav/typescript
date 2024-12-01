"use strict";
console.log("Lesson 07");
const todaysTransaction = {
    Pizza: 45,
    Books: -20,
    Jobs: -10
};
console.log(todaysTransaction.Pizza);
console.log(todaysTransaction['Pizza']);
// todaysTransaction.Pizza = 45 // readonly
const prop = 'Pizza';
console.log(todaysTransaction[prop]);
function netTransaction() {
    let total = 0;
    for (let prop in todaysTransaction) {
        if (typeof todaysTransaction[prop] == 'number')
            total += todaysTransaction[prop];
    }
    return total;
}
console.log(netTransaction());
const student1 = {
    name: 'Dough',
    GPA: 3.5,
    classes: [100, 200]
};
// function printStuData () {
//   for (let key in student1) {
//     console.log(`${key}: ${student1[key]}`)
//   }
// }
// printStuData()
// keyof operator
// This creates a union type out of the keys of an object
function printStuDataUsingKeyofOperator() {
    for (let key in student1) {
        console.log(`${key}: ${student1[key]}`);
    }
}
printStuDataUsingKeyofOperator();
Object.keys(student1).map(key => {
    console.log(`${key}: ${student1[key]}`);
});
const logStuKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStuKey(student1, 'GPA');
const monthlyIncome = {
    salary: 500,
    bonus: 200,
    sidehustle: 150
};
for (let key in monthlyIncome) {
    console.log(`${key}: ${monthlyIncome[key]}`);
}

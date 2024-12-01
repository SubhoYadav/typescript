"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg == 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('Subho'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'Subho Yadav' }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        // empty array returns a true by default, but now we explicitly check the length and return false
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg)) {
        // empty array returns a true by default, but now we explicitly check the length and return false
        return { arg, is: false };
    }
    return { arg, is: !!arg }; // double bang operator
};
const boolChecker = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        // empty array returns a true by default, but now we explicitly check the length and return false
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg)) {
        // empty array returns a true by default, but now we explicitly check the length and return false
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg }; // double bang operator
};
const processuser = (user) => {
    // Logic to process the user goes here
    return user;
};
console.log(processuser({ id: 1, name: 'Dave' }));
// console.log(processuser({name: 'Subho'}))
const getUsersProperty = (users, prop) => {
    return users.map(user => user[prop]);
};
// T[K][] specifies an array of values of K in T
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    }
];
console.log(getUsersProperty(usersArray, "name"));
class Stateobject {
    constructor(_data) {
        this.data = _data;
    }
    get state() {
        return this.data;
    }
    set state(_data) {
        this.data = _data;
    }
}
const store = new Stateobject("Subho");
console.log(store.state);
// store.state  = 24
const myState = new Stateobject([15]);
myState.state = ['Subho', 24, true];

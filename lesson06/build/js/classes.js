"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello I'm ${this.age}`;
    }
}
const Dave = new Coder("Dave", "rock", 42, "TS");
const Subho = new Coder("Subho", "rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age) // private member 
console.log(Dave.name);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Macbook', 'Sara', 'lofi', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const Hendrix = new Guitarist('Jimmy Hendrix', 'guitar');
console.log(Hendrix.play('strums'));
// static members in a class are binded with the class rather than a particular instantiatiojn of the class
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count;
        this.name = name;
    }
}
Peeps.count = 0;
const David = new Peeps("David");
const Jason = new Peeps("Jason");
const Amy = new Peeps("Amy");
console.log(Jason.id);
console.log(Peeps.count);
// getters and setters
class Band {
    constructor() {
        this.bands = [];
    }
    get data() {
        return this.bands;
    }
    // If I do not specify the setter, the property bands will become readonly
    set data(value) {
        if (Array.isArray(value) && value.every(e => typeof e === 'string')) {
            this.bands = value;
        }
        else {
            throw new Error('Params is not an array of strings!');
        }
    }
}
const myBand = new Band();
myBand.data = ['Les Paul', 'Zep leyin'];
console.log(myBand.data);
myBand.data = [...myBand.data, "Neeraj Arya's Kabir cafe"];
console.log(myBand.data);
myBand.data = ['Kabir cafe'];
console.log(myBand.data);

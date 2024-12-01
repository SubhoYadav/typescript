class Coder {

    // If we wqant a member in our class that we do not intend to instantiate while creating objects we can add an assertion like 
    secondLang!: string

    constructor (
        public readonly name: string,
        public music: string,
        private readonly age: number,
        protected lang: string = "Typescript"
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge () {
        return `Hello I'm ${this.age}`
    }
}

const Dave = new Coder("Dave", "rock", 42, "TS");
const Subho = new Coder("Subho", "rock", 42);


console.log(Dave.getAge())
// console.log(Dave.age) // private member 
console.log(Dave.name)

class WebDev extends Coder {
    constructor (
        public computer: string,
        name: string,
        music : string,
        age: number
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang () {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Macbook', 'Sara', 'lofi', 25);
console.log(Sara.getLang())

/**
 * protected memvbers are accessible within the cloasss and its subclasses
 * private members are only accessible within the class
 */


// Implementing an interface
interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor (
        name: string,
        instrument: string
    ) {
        this.name = name
        this.instrument = instrument
    }

    public play (action: string) {
        return `${this.name} ${action} ${this.instrument}`
    }
}

const Hendrix = new Guitarist('Jimmy Hendrix', 'guitar');
console.log(Hendrix.play('strums'))

// static members in a class are binded with the class rather than a particular instantiation of the class

class Peeps {
    static count: number = 0

    static getCount (): number {
        return Peeps.count
    }

    id: number
    constructor (public name: string) {
        this.id = ++Peeps.count;
        this.name = name
    }
}

const David = new Peeps("David")
const Jason = new Peeps("Jason")
const Amy = new Peeps("Amy")

console.log(Jason.id)
console.log(Peeps.count)

// getters and setters

class Band {
    private bands: string[];

    constructor () {
        this.bands = []
    }

    public get data(): string[] {
        return this.bands
    }

    // If I do not specify the setter, the property bands will become readonly
    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(e => typeof e === 'string')) {
            this.bands = value
        }
        else {
            throw new Error('Params is not an array of strings!')
        }
    }
}

const myBand = new Band();

myBand.data = ['Les Paul', 'Zep leyin']
console.log(myBand.data)

myBand.data = [...myBand.data, "Neeraj Arya's Kabir cafe"]
console.log(myBand.data)

myBand.data = ['Kabir cafe']
console.log(myBand.data);

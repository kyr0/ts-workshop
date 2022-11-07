// constant; cannot be changed at runtime
const myName = "Aron"

// variable
let myLastName: string = "Homberg"
myLastName = 'H0mberg'
myLastName = `H0mberg`

// number
let age: number = 0b10101
age = 0xFFFFFF
age = 0o0777

// boolean
let isItExisting = true // false

// date and time
let today = new Date()

// regular expressions
let matchAs = new RegExp("[a]+", "g")

let stringPlusNumber = (myName + age)
let stringPlusNumberB = (1 + "1")
let numberPlusString = Number(1 + "1")

let ft: number = -1;
let helloWorld: string = "asdas"
let thisIsTrue: boolean = false;

// list
let names: Array<string> = ["Max", "Linda"]

interface Human {
    hands: number;
}

interface Employee {
    isHired: boolean;
}

interface Person extends Human, Employee {
    firstNames: Array<string>
}

const PI = 3.14;

let person: Person = {
    hands: 2,
    isHired: true,
    firstNames: ["Max", "Albert"]
}

person.firstNames = ["Max1", "Albert1"]

export let namesB: Array<string> = new Array("Max", "Linda");


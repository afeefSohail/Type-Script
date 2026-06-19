// ----------------- Interface with Class ------------------
// 1. Interface is Templates.

interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}


interface Story {
    createStory(): void //method defination
}

class Instagram implements TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto , Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string // you can add more than your interface instructions
    ){}

    createStory(): void {
        console.log("Story Created.")
    }
    
}

interface Discount {
    (price:number): number //method defination
}

const orderDiscount: Discount = (price) => price * 2;

interface TeamMachine {
    start(): void
    stop(): void
}

const machine: TeamMachine = {
    start() {
        console.log("start")
    },
    stop() {
        console.log("stop")
    },
}

//------------ Signature Interface
interface ChaiRatings {
    //key   : string : value (number)
    [flavour: string]: number
}

const ratings: ChaiRatings = {
    //masala: "4.5",
    masala: 4.5,
    ginger: 4.5,
} 

//----------- Interface Merged

interface User {
    name: string
}

interface User {
    age: number
}

const u : User = {
    name: "Afeef Sohail",
    age: 32
}

//---------------- Extends
// Interface can do Multi Inheritance
interface A {a: string}
interface B {b: string}

interface C extends A, B {}
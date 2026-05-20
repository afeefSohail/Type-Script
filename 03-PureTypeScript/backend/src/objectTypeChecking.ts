// ----------- Narrowing --------------------

//------------ Equality Narrowing
function detectType(val: number | string) {
    //typeof is guard of Types 
    if (typeof val === "string") {
        return val.toLocaleLowerCase()
    }

    return val + 3
}

function provideId(id: string | null) {
    //if (id === null) {}
    if (!id){ //both are same
        console.log("Please provide Id")
    } 
}   

// Array is object type
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

printAll(["1", "2"])
printAll("afeef sohail")

//------------ In Operator Narrowing
interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdmin(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}

//-------------- instanceof Narrowing
//most of time used for object which re-construct with new
function logValue(x: Date | string) {
  if (x instanceof Date) { // x is instance of Date
    console.log(x.toUTCString());             
  } else {
    console.log(x.toUpperCase());               
  }
}

// unKnown define before using it.
type afeef = Date | string;

function logValueTwo(x: unknown) {
  if (x instanceof Date) { // x is instance of Date
    console.log(x.toUTCString());             
  } else if (typeof x === "string") {
    console.log(x.toUpperCase());               
  }
}

//--------------- Using type Predicates
type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
 return (pet as Fish).swim !== undefined 
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish Food"
    } else {
        pet
        return "bird Food"
    }
}

//--------------- Discriminated Unions
interface Cricle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Cricle | Square | Rectangle

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    } 

    //return shape.side * shape.side
}

function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side
            break
        case "rectangle":
            return shape.length * shape.width
            break
        default:
            const _defaultShape: never = shape
            break
            return _defaultShape
    }
}
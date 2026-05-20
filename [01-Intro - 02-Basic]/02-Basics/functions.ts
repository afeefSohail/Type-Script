function addTwo(num: number) : number {
    return num + 2
}

function getUpper(val: String) {
    return val.toUpperCase
}

function signUpUser(name: String, email: String, isPaid: Boolean) {}

//Arrow Function
let loginUser = (name: String, email: String, isPaid: Boolean = false) => {}

let myValue = addTwo(5)
getUpper("izhan afeef")
signUpUser("afeef sohail", "afeef.sohail@gmail.com", false)
loginUser("afeef sohail", "afeef.sohail@gmail.com")


// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true
//     }

//     return "200 OK"
// }

//Returing Arrow Function
const getHello = (s: String): String => {
    return ""
}

const heros = ["Thor", "Spider Man", "Iron Man"]
//const heros = [1, 2, 3]

heros.map((hero): String => { return "${hero} is hero." })
heros.map(hero => { return "${hero} is hero." })

//Explicitly declaring Void Function
function consoleError(errorMsg: String): void {
    console.log(errorMsg)
}

//Never Function (Never return value but throw Exception & terminate execution of the programe)
function handleError(errorMsg: String): never {
   throw console.log(errorMsg)
}


export {}
// const User = {
//     name: "Afeef Sohail",
//     email: "afeef.sohail@gmail.com",
//     isActive: true
// }

// //{ name, isPaid } => destructure object properties
// // { name: string; isPaid: boolean } => define TypeScript types
// function createUser({name, isPaid} : {name: String, isPaid: boolean}){}
// createUser({name: "Afeef Sohail", isPaid: true})

// let newUser = {name: "Afeef Sohail", isPaid: true, email: "afeef.sohail@gmail.com"}
// createUser(newUser) //WTF

// // Object Returing Function
// function createCourse():{name: String, price: number} {
//     return {name: "reactjs", price: 200}
// }



//--------------- Type Alias --------------------------

// type User = {
//     name: String
//     email?: String
//     isActive: boolean
// }

// // so we create a data type of User like String, number, boolean etc
// function createUser(user: User) : User {
//     //return {name: "", isActive: true}
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})
// createUser({name: "Afeef Sohail", isActive: true})


type User = {
    readonly _id : string
    name: string
    email: string
    isActive: boolean
    CreditCard?: number
    //startTrail: () => string //Arrow function which will return string
    startTrail(): string //function which will return string
    getCouponWith(name: string, value: number): number

}

let afeef: User = {
    _id: "12345",
    name: "Afeef Sohail",
    email: "afeef@gmail.com",
    isActive: false,
    startTrail() {
        return "InProgress"
    },
    getCouponWith(name: "Afeef Sohail", value: 20) {
        return value
    },
}


type cardNum = {
    // union variable
    cardnumber : String | number
} 

type cardDate = {
    cardDate: String
}

// Type Alias extender
//type CardDetails = cardNum & cardDate
type CardDetails = cardNum & cardDate & {
     cvv: number
}


export {}
interface User {
    readonly uuid: number
    userId: number
    email: string
    googleId?: string
    //startTrail: () => string //Arrow function which will return string
    startTrail(): string //function which will return string
    getCouponWith(name: string, value: number): number
}

interface User {
    githubToken: string
}

// const afeef: User = {
//     uuid: 112233, 
//     email: "hot@gmail.com", 
//     userId: 2447, 
//     githubToken: "12as45df56fghg",
//     startTrail() {
//         return "InProgress"
//     },
//     getCouponWith(name: "Afeef Sohail", value: 20) {
//         return value
//     },
// }


//Inheritance
interface Admin extends User {
    role: "admin" | "ta" | "learner"
} 

const afeef: Admin = {
    uuid: 112233, 
    email: "hot@gmail.com", 
    userId: 2447, 
    role: "admin",
    githubToken: "12as45df56fghg",
    startTrail() {
        return "InProgress"
    },
    getCouponWith(name: "Afeef Sohail", value: 20) {
        return value
    },
}

export {}
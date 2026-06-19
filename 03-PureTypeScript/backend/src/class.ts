import "./AbstractClass.js"
import "./Interface.js"
import "./objectTypeChecking.js"
// class User {
//     email: string
//     private name:  string
//     //#name: string //# works as private
//     readonly city:  string = "Lahore"
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }

// An Other way to create properties of class 
class User {
    //private _coursecount = 1 //not accesiable out side of this class even in case inheritance
    protected _coursecount = 1 //only accesiable inside of this class or inherited class
    
    readonly city:  string = "Lahore"
    constructor(public email: string, private name: string) {
        // this.email = email
        // this.name = name
    }

    private deleteUserToken() {
        console.log(`${this.name} session token deleted.` )
    }

    get AppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._coursecount
    }

    set courseCount(courseNum) {
        // if (courseNum <= 1) {
        //     throw new Error("Course should be more than 1")
        // }  
        
        this._coursecount = (courseNum > 1) ? courseNum : 1
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._coursecount = 4
    }
}


const afeef = new User("afeef@gmail.com", "Afeef Sohail")
console.log(afeef.city)
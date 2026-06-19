//-------------------- Generics --------------------
// 1. Generics is Templates like as Interface.

const scores: Array<number> = []
const names: Array<string> = []

function identity<Type>(val: Type): Type {
    return val
}

function identityTwo<afeef>(val: afeef): afeef {
    return val
}

function identityThree<T>(val: T): T {
    return val
}

identity(true)
identityTwo("afeef")
identityThree(32)

interface Bootle {
    brand: string,
    type: number
}

//identityThree<Bootle>({})

// Gnerics Array functions
function getSearchProducts<T>(products: T[]): T[] {
    return products
}

function getSearchProductsTwo<T>(products: Array<T>): Array<T> {
    return products
}

function getSearchProductsFour<T>(products: T): Array<T> {
    return [products]
}

//Generics Arrow Method
//const getMoreSearchProducts = <T>() => {}
const getMoreSearchProducts = <T,>(products: T[]): T[] => {
    return products
}

// Multi Value Return Generics function
interface Database {
    connection: string,
    username: string,
    passowrd: string
}

function anOtherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {valOne, valTwo}
}

anOtherFunction(3, {connection: "", username: "", passowrd: ""})

// Gneric Classes
interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}

function pair<A, B>(a: A, b: B): [A, B] {
    //return [b, a] //error return signture order change
    return [a , b]
}

interface ApiResponse<T>  {
    content: T
    metaData: Meta
}

class Meta {
    constructor(public code: number, public msg:string) {}
}

class User {
    constructor(public name: string, public userId:number) {}
}

const userApiResponse: ApiResponse<User> = {
    content: new User("afeef", 2233),
    metaData: new Meta(123, "200")
}
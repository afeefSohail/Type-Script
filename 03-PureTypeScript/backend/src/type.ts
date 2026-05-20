//------- Duck Typing / Structural Typing
type Cup = {size: string};
let smallcup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}
smallcup = bigCup //Duck typing


type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabic"}
const chairBrew: Brew = coffee //Duck typing

// Structural Typing
type User = {
    username: string;
    password: string
}

const u: User = {
    username: "afeef code",
    password: "123"
}

//------------ Split Data types
type Item = {name: string, quatity:number}
type Address = {street: string, pin: number}

type Order = {
    id: string,
    items: Item[],
    address: Address
}

//--------- Partial<T> Utility Type 
type Chai = {
    name: string,
    price: number,
    isHot: boolean
}
const updateChai = (updates: Partial<Chai>) => {
    console.log("updateing Chai with", updates)
}

updateChai({price: 25})
updateChai({isHot: false})
// you can also pass empty object because
// all properties are optional that's not good
updateChai({}) 

//--------- Required <T> Utility Type 
type ChaiOrder = {
    name?: string,
    quantity?: number,
}
const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order)
}

//name and quantity is optional but required for place order
placeOrder({
    name: "Chai",
    quantity: 2
})

//--------------- Pick<T> Utility Type 
type Tea = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients: string[]
}

type BasicTeaInfo = Pick<Tea, "name" | "price">;
const teaInfo: BasicTeaInfo = {
    name: "Lemon Tea",
    price: 30
}

//--------------- Ommit<T> Utility Type 
type newTea = {
     name: string,
    price: number,
    isHot: boolean,
    secretIngredients: string[]
}

type publicTea = Omit<newTea, "secretIngredients">;
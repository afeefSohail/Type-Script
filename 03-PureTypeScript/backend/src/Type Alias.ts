// How to Create an Object Type Alias

// 1. Create the custom object type
type UserProfile = {
    id: number;
    username: string;
    email: string;
    isActive: boolean;
};

// 2. Use it to type a variable
const account: UserProfile = {
    id: 101,
    username: "chai_lover",
    email: "chai@example.com",
    isActive: true
};


//------- Duck Typing / Structural Typing
type Cup = { size: string };
let smallcup: Cup = { size: "200ml" }

let bigCup = { size: "500ml", material: "steel" }
smallcup = bigCup //Duck typing


type Brew = { brewTime: number }
const coffee = { brewTime: 5, beans: "Arabic" }
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
type Item = { name: string, quatity: number }
type Address = { street: string, pin: number }

type Order = {
    id: string,
    items: Item[],
    address: Address
}

// Partial<T> Utility Type 
type Chai = {
    name: string,
    price: number,
    isHot: boolean
}
const updateChaiFunc = (updates: Partial<Chai>) => {
    console.log("updateing Chai with", updates)
}

// What TypeScript Sees Behind the Scenes
// type TemporaryPartialChai = {
//     name?: string;     // Now optional
//     price?: number;    // Now optional
//     isHot?: boolean;   // Now optional
// }

updateChaiFunc({ price: 25 })
updateChaiFunc({ isHot: false })
// you can also pass empty object because
// all properties are optional that's not good
updateChaiFunc({})

type updateChai = Partial<Chai>;
const updateChaiInfo : updateChai = {
    name: "Labour Chai"
}


// Required <T> Utility Type 
// Required<T> (The Opposite of Partial)
type ChaiOrder = {
    name?: string,
    quantity?: number,
}
const placeOrderFunc = (order: Required<ChaiOrder>) => {
    console.log(order)
}

//name and quantity is optional but required for place order
placeOrderFunc({
    name: "Chai",
    quantity: 2
})

type placeOrder = Required<ChaiOrder>;
const placeOrderInfo: placeOrder = {
    name: "Cold Coffee",
    quantity: 20
}

// Pick<T> Utility Type 
// Pick<T, Keys> (Select Specific Properties)
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

const teaInfoFunc = (tea: Pick<Tea, "name" | "price">) => {
    console.log(tea);
}

teaInfoFunc({
    name: "Lemon Tea",
    price: 30
})


// Ommit<T> Utility Type 
// Omit<T, Keys> (Remove Specific Properties)
type newTea = {
    name: string,
    price: number,
    isHot: boolean,
    secretIngredients: string[]
}

type publicTea = Omit<newTea, "secretIngredients">;
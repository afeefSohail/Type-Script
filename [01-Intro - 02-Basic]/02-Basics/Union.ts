let score : number | string = 33
score = "33"
score = 44

type User = {
    id: number
    name: string
}

type Admin = {
    id: number
    username: string
}

let me : User | Admin = {id: 2244, name: "Afeef Sohail"}
me = {id: 1122, username: "AS"}

function getDBId(id: number | string) {
    //making some api call
    console.log("DB id is ${id}")

    if (typeof id === "string" ) {
       id.toLowerCase()
    }
}

getDBId(3)
getDBId("5")

let dataList: (number | string)[] = ["1", 2, "3"] 
let JobeRole : "Junior" | "Senior" | "Exactive"
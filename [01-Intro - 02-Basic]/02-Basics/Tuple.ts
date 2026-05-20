let user: [string, number, boolean]
user = ["afeef", 32, true]

//color rgb tuple
const rgb : [number, number, number] = [255, 123, 112]

//Type Alias as tuple
type User = [number, string]

const newUser: User = [112, "afeef@gmail.com"]
//tuple is just an Array with Restrictions
newUser[1] = "sohail@gmail.com"


//So i can use all the methods of Array 
//But these array methods broke Restrictions of tuple
newUser.push("afeef");
newUser.push(32);
console.log(newUser)
//OutPut : [ 112, 'sohail@gmail.com', 'afeef', 32 ]
//which wrong newUser tuple only allow 0 and 1 index for values.
//0 index should be for number and 1 index should be for string 

export {}
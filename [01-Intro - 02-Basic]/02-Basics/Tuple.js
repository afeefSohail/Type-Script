let user;
user = ["afeef", 32, true];
//color rgb tuple
const rgb = [255, 123, 112];
const newUser = [112, "afeef@gmail.com"];
//tuple is just an Array with Restrictions
newUser[1] = "sohail@gmail.com";
//So i can use all the methods of Array 
//But these array methods broke Restrictions of tuple
newUser.push("afeef");
newUser.push(32);
console.log(newUser);
export {};

//CHAPTER17
//arrays
//concat;type of array
//shift;type of array
//unshift;type of array
//splice;type of array
//sclice;type of array

let myGirls = ["Rija", "laiba","Nisa"];
let myBoys =["Umer", "Ali" ,"Ahmed"];
let myChildren =myBoys.concat(myGirls);//use to write up in one line n join multiple array in oneline
console.log(myChildren);//like this

//unshift();use to add in begining
let fruits =["banana","Apple","lemon","mango","Peach"];
fruits.unshift("Melon" ,"Grapes");
console.log(fruits);

//shift)();delete at start
let friends =["Rahila","Afeera","Fatima","Hooriya"];
friends.shift()
console.log(friends);

//splice; change orginal array (add replace remove)
let months =["Januaray", "Feburary", "Monday", "Tuesday"];
let days = months.splice(2,0,"March");
console.log(days); 
console.log(months);
//splice (start, remove,new one)

// //slice;returns a piece of array
// let things=["hat","Mobile","Bottle","Bag","Bed"];
// let piece_of_Array=things.slice(-4,1);//integers count the place we put on
// console.log(piece_of_Array);


//assignment
//question
//Qs. Create an array to store companies-> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
let companies=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies);
// companies.shift();
// console.log(companies);
//partbRemove Uber & Add Ola in its place
// let piece_of_Array=companies.splice(2,"ola");
// console.log(piece_of_Array);

//partc Add Amazon at the end
let newCompany=companies.push("amazon");
console.log(newCompany);

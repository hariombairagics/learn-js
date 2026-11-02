// PRIMITIVE DATATYPES

// 7 types : String, Number, Boolean, uull, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);

const bigNumber = 2345678987654323456789n

// Reference (NON-PRIMITIVE)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj =  {
    name: "hariom",
    age: 22,
}

// number => 2 to power 53
let password = 6345
console.log(password);
console.log(typeof password);

// bigint => number is very big 
let value = 6528473652640654785632576038475608462460624354235465n
console.log(value);
console.log(typeof value);

// string => "anything in double cods"
let name = "Hariom"
console.log(name);
console.log(typeof name);

// boolean => true/false
let loggedIn = false
console.log(loggedIn);
console.log(typeof loggedIn);

// null => stanalone value (like empty) 
// typeof of NULL is OBJECT
let state = null
console.log(state);
console.log(typeof state);

// undefined => we do not define any value
// typeof of UNDEFINED is UNDEFINED
let gender;
console.log(gender);
console.log(typeof gender);

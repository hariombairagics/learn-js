"use strict"; // treat all js code as newer version

// alert(3 + 3) // we are using node, not browser

// Data types

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

// symbol => unique 

console.log(typeof "Hello");    
console.log(typeof 100);        
console.log(typeof true);      
console.log(typeof undefined);  
console.log(typeof 123n);       
console.log(typeof Symbol());   
console.log(typeof {});        
console.log(typeof []);         
console.log(typeof null);       

let a = { score: 10 };
let b = a;

b.score = 20;
console.log(a.score);

b = { score: 50 };
console.log(a.score);
console.log(b.score);

a.score = 30;
console.log(b.score);

let score = 50;
let copiedScore = score;
copiedScore = 100;


console.log(score);
console.log(copiedScore);


let heroes = ["Hero1", "Hero2"];
let copiedHeroes = heroes;
copiedHeroes.push("Hero3");

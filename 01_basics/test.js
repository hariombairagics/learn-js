console.log("Hariom")

let a = { score: 10 };
let b = a;

b.score = 20;
console.log(a.score);

 c = { score: 50 };
console.log(a.score);
console.log(b.score);

a.score = 30;
console.log(b.score);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

fruits.sort();
console.log(fruits);



const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2);

fruits2.sort();
fruits2.reverse();
console.log(fruits2);



const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();

console.log(sorted);
console.log(months);



const points = [40, 100, 1, 5, 25, 10];
console.log(points);

points.sort(function(a, b) { return a - b; });
console.log(points);
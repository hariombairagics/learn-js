const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.reverse();

console.log(fruits);




const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();

console.log(reversed);
console.log(months);



const points = [40, 100, 1, 5, 25, 10];
console.log(points);

points.sort(function(a, b) { return b - a; });
console.log(points);
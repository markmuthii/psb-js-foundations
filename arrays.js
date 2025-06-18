// List-like
// Elements
// Order
// zero-indexed

let fruits = ["pineapples", "oranges", "apples", "bananas", "watermelons"];
let cars = ["Volvo", "Mazda", "BMW"];

// Access is through the index, using the square bracket notation
let a = fruits[1];
let w = fruits[3];

// Getting the number of elements in an array

// The length property gives the number of elements in the array
let lengthOfFruitsArray = fruits.length;
console.log(lengthOfFruitsArray);

// When the number of elements in the array is uncertain, you can get the index of the final element using the length, since the position of the final element will always 1 less than the number of elements (since arrays are zero-indexed)
let w2 = fruits[fruits.length - 1];

console.log(a);
console.log(w);
console.log(w2);

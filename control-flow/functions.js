// By default, code is executed from top to bottom

// Control flow statements manipulate the default flow of execution

// 1. FUNCTIONS

// Definition

// console.log("Hello");

// callJohn();

// console.log("Wick");

// function callJohn() {
//   console.log("John");
// }

// callJohn();

// function addition(num1, num2) {
//   return num1 + num2;
// }

// let num = "2";

// console.log(addition(7, 7));
// console.log(addition(6, 4));
// console.log(addition(2, 3)); // 5

// function makeTea() {
//   // - Measure milk
//   // - Boil milk
//   // - Measure water
//   // - Add water to the boiling milk
//   // - Let boil
//   // - Add sugar and tea leaves
//   // - Leave to boil for ten minutes
//   // - Serve
//   console.log("Tea is ready!!");
// }

// Make Tea (8am)
// makeTea();

// Other things

// 10am
// makeTea();

// Other things

// 4pm
// makeTea();

// Other things

// 8pm
// makeTea();

// 1. Create a function greetStudent() that returns the words "Hello Student"
// eg greetStudent() should return "Hello Student"
function greetStudent() {
  return "Hello Student";
}

console.log(greetStudent());

// 2. Create a function greetSpecificStudent() that takes the name of a student as input and returns the words "Hello name" where name is the name of the student
// eg greetSpecificStudent("Wick") should return "Hello Wick"

function greetSpecificStudent(studentName) {
  // return "Hello " + studentName;
  return `Hello ${studentName}`;
}

console.log(greetSpecificStudent("Wick"));

// 3. Create a function calculatePerimeter() that takes the width and length as input and returns the perimeter.
// eg calculatePerimeter(10, 7) should return 34

function calculatePerimeter(width, length) {
  if (typeof width !== "number" || typeof length !== "number") {
    return "Please provide numbers only";
  }

  return (width + length) * 2;
}

console.log(calculatePerimeter("10", 20));

// 4. Create a function calculateArea() that takes base and height of a Triangle as input and returns the area.
// eg calculateArea(10, 7) should return 35
function calculateArea(base, height) {
  return (base * height) / 2;
}

console.log(calculateArea(10, 7));

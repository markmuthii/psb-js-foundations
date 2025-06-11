// Block of code that is executed repeatedly based on a certain condition(s)

// 1. For
// for (initialization; condition; increment / decrement) {
//   //  block of code
// }

function loopMeIn() {
  console.log("Before the loop");

  for (let i = 0; i < 7; i = i + 1) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  console.log("After the loop");
}
loopMeIn();

// Create a function printEvenInRange(num1, num2) that takes a number num1 and num2 and prints even numbers FROM num1 TO num2

// 2. While
// 3. Do...While

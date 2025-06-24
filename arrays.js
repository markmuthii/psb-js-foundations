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

// ARRAYS WITH LOOPS

// 1. Write a function `sumArray(arr)` that returns the sum of all numbers in the array.
// sumArray([1, 2, 3, 4]);     // returns 10
// sumArray([5, 10, -2]);      // returns 13

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Get each number
    // let num = arr[i];

    // Add each number to a sum counter
    // sum = sum + num;
    sum = sum + arr[i];
  }

  // return the sum counter
  return sum;
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([5, 10, -2]));

// 2. Write a function `findMax(arr)` that returns the largest number in the array.
// findMax([3, 7, 2, 9]);      // returns 9
// findMax([-5, -2, -11]);     // returns -2

function findMax(arr) {
  // Define the first number in the array as the largest to begin with
  let largestNumber = arr[0];

  // Get each following number
  for (let i = 1; i < arr.length; i++) {
    // Check if the number is larger than the current largest number
    if (arr[i] > largestNumber) {
      // If it is, set it as the new largest number
      largestNumber = arr[i];
    }
  }

  // return the largest number
  return largestNumber;
}

console.log(findMax([3, 7, 2, 9]));
console.log(findMax([-5, -2, -11]));

// 3. Write a function `countEvens(arr)` that returns the number of even numbers in the array.
// countEvens([1, 2, 3, 4, 6]);   // returns 3
// countEvens([5, 7, 9]);         // returns 0

function countEvens(arr) {
  // Define an even number counter, which is initially 0
  let evenNumberCounter = 0;

  // Get each number in the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the number is even
    if (arr[i] % 2 === 0) {
      // If it is, we increment the even number counter by one
      evenNumberCounter++;
    }
  }

  // return the even number counter
  return evenNumberCounter;
}

console.log(countEvens([1, 2, 3, 4, 6])); // returns 3
console.log(countEvens([5, 7, 9])); // returns 0
console.log(countEvens([5, 7, 9, 20])); // returns 1

// 4. Write a function `filterGreaterThan(arr, threshold)` that returns a new array of numbers greater than `threshold`.
// filterGreaterThan([1, 5, 8, 2], 4);    // returns [5, 8]
// filterGreaterThan([10, 3, 7], 10);     // returns []

function filterGreaterThan(arr, threshold) {
  // Define filteredNumbers which is an empty array to hold the filtered numbers
  let filteredNumbers = [];

  // Get each number
  for (let i = 0; i < arr.length; i++) {
    // Check if the number is greater than the threshold
    if (arr[i] > threshold) {
      // If it is, add the number to the filteredNumbers array

      // Use the array length to give you the index where you need to add the next element
      // filteredNumbers[filteredNumbers.length] = arr[i];

      // Alternatively, use a push method
      filteredNumbers.push(arr[i]);
    }
  }

  // return the filteredNumbers array
  return filteredNumbers;
}

console.log(filterGreaterThan([1, 5, 8, 2], 4)); // returns [5, 8]
console.log(filterGreaterThan([10, 3, 7], 10)); // returns []

// 5. Write a function `containsValue(arr, target)` that returns `true` if the target exists in the array, otherwise `false`.
// containsValue([1, 2, 3, 4], 3);    // returns true
// containsValue([10, 20, 30], 25);   // returns false

function containsValue(arr, target) {
  // Get each number
  for (let i = 0; i < arr.length; i++) {
    // Check if the number is equal to the target
    // If it is, return true
    if (arr[i] === target) return true;
  }

  // Return false
  return false;
}

console.log(containsValue([1, 2, 3, 4], 3)); // returns true
console.log(containsValue([10, 20, 30], 25)); // returns false

// 6. Write a function `countLongWords(words, length)` that returns the number of words longer than length in terms of characters.
// countLongWords(["hello", "goodbye", "JavaScript"], 5);  // returns 2
// countLongWords(["hi", "cat", "yes"], 5);                // returns 0
// countLongWords(["hi", "cat", "yes"], 2);                // returns 2

function countLongWords(arr, length) {
  // Define our wordCounter to hold the number of words that have more characters than `length`
  let wordCounter = 0;

  // Get each word
  for (let i = 0; i < arr.length; i++) {
    // Check whether the word has a length longer than length
    if (arr[i].length > length) {
      // If it does, increment wordCounter by one
      wordCounter++;
    }
  }

  // Return wordCounter
  return wordCounter;
}

console.log(countLongWords(["hello", "goodbye", "JavaScript"], 5)); // returns 2
console.log(countLongWords(["hi", "cat", "yes"], 5)); // returns 0
console.log(countLongWords(["hi", "cat", "yes"], 2)); // returns 2

// 7. Write a function `capitalizeWords(words)` that returns a new array with each word capitalized (first letter uppercase, rest lowercase).
// capitalizeWords(["hello", "world"]);     // returns ["Hello", "World"]
// capitalizeWords(["javaScript", "rocks"]); // returns ["Javascript", "Rocks"]

function capitalizeWords(words) {
  for (let i = 0; i < words.length; i++) {
    // Get each word
    let currentWord = words[i];

    // Get the first letter of the word
    // Capitalize it
    let newFirstLetter = currentWord[0].toUpperCase();

    // Start creating the new word by having the first letter that has been capitalized
    let newWord = newFirstLetter;

    // Add the rest of the word to the new word
    for (let j = 1; j < currentWord.length; j++) {
      newWord += currentWord[j];
    }
    // Set the new word as the new element in the current position inside words array
    words[i] = newWord;
  }

  // return words
  return words;
}

console.log(capitalizeWords(["hello", "world"])); // returns ["Hello", "World"]
console.log(capitalizeWords(["javaScript", "rocks"])); // returns ["Javascript", "Rocks"]

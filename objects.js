// This file demonstrates how to define and manipulate JavaScript objects using key-value pairs, properties, and methods.

// Defining an object - Object literal
// student1 represents a student with personal details, course info, and methods
const student1 = {
  // Student's first name
  firstName: "John",
  // Student's last name
  lastName: "Wick",
  // Student's age
  age: 7,
  // Course the student is enrolled in
  course: "Software Developer Bootcamp",
  // Account balance (e.g., for tuition)
  balance: 0,
  // Attendance percentage
  attendance: 70,
  // Progress percentage in the course
  progress: 40,
  // Method: returns a string about the student's progress in a course
  learn: function (course) {
    return this.firstName + " is making progress in " + course;
  },
  // Nested object: instructor details
  instructor: {
    firstName: "Mark",
    lastName: "Muthii",
  },
  // Array of hobbies
  hobbies: ["hiking", "volleyball", "hunting"],
};

// Another student object with similar structure and additional properties
const student2 = {
  firstName: "Jane",
  lastName: "Ballerina",
  age: 27,
  course: "Software Developer Bootcamp",
  balance: 0,
  attendance: 80,
  progress: 30,
  learn: function (course) {
    return this.firstName + " is making progress in " + course;
  },
  instructor: {
    firstName: "Mark",
    lastName: "Muthii",
  },
  hobbies: ["swimming", "football", "gaming"],
  // Array of child objects
  children: [
    {
      firstName: "Wick JR",
      lastName: "Riddick",
      age: 3,
    },
    {
      firstName: "Baby",
      lastName: "Wick",
      age: 7,
    },
  ],
};

// ACCESSING VALUES
// 1. Dot Notation
// Accessing properties
console.log(student1.firstName); // Output: John
console.log(student2.firstName); // Output: Jane
console.log(student2.age); // Output: 27
// Accessing methods
console.log(student1.learn("Software")); // Output: John is making progress in Software
console.log(student1.learn("Data")); // Output: John is making progress in Data

// 2. Square bracket notation
// Accessing properties
console.log(student1["firstName"]); // Output: John
console.log(student2["firstName"]); // Output: Jane
console.log(student2["age"]); // Output: 27
// Accessing methods
console.log(student1["learn"]("Software")); // Output: John is making progress in Software
console.log(student1["learn"]("Data")); // Output: John is making progress in Data

// Use case: dynamic property access
const selectedOption = "course";
console.log(student1[selectedOption]); // Output: Software Developer Bootcamp

// Adding and Modifying Values in an object
console.log(student2.age); // Output: 27

student2.age = 28; // Modifying the age property

console.log(student2.age); // Output: 28

console.log(student2.spouse); // Output: undefined (spouse not yet defined)

student2.spouse = student1; // Adding a new property (spouse)

console.log(student2.spouse); // Output: student1 object

// Accessing nested object properties
// Get the firstName of student2's instructor
console.log(student2.instructor.firstName); // Output: Mark

// Get the age of student2's spouse
console.log(student2.spouse.age); // Output: 7

// Get the third hobby of student2's spouse
console.log(student2.spouse.hobbies[2]); // Output: hunting

// Get the firstName of student2's second born
console.log(student2.children[0].firstName); // Output: Wick JR

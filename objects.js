// Key value pairs
// Properties/characteristics/specifications
// Methods / Actions

// Defining an object - Object literal
const student1 = {
  firstName: "John",
  lastName: "Wick",
  age: 7,
  course: "Software Developer Bootcamp",
  balance: 0,
  attendance: 70,
  progress: 40,
  learn: function (course) {
    return this.firstName + " is making progress in " + course;
  },
  instructor: {
    firstName: "Mark",
    lastName: "Muthii",
  },
  hobbies: ["hiking", "volleyball", "hunting"],
};

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
// properties
console.log(student1.firstName);
console.log(student2.firstName);
console.log(student2.age);
// methods
console.log(student1.learn("Software"));
console.log(student1.learn("Data"));

// 2. Square bracket notation
// properties
console.log(student1["firstName"]);
console.log(student2["firstName"]);
console.log(student2["age"]);
// methods
console.log(student1["learn"]("Software"));
console.log(student1["learn"]("Data"));

// Use case
const selectedOption = "course";

console.log(student1[selectedOption]);

// Adding and Modifying Values in an object
console.log(student2.age);

student2.age = 28;

console.log(student2.age);

console.log(student2.spouse);

student2.spouse = student1;

console.log(student2.spouse);

// Get the firstName of student2's instructor
console.log(student2.instructor.firstName);

// Get the age of student2's spouse
console.log(student2.spouse.age);

// Get the third hobby of student2's spouse
console.log(student2.spouse.hobbies[2]);

// Get the firstName of student2's second born
console.log(student2.children[0].firstName);

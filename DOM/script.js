// 1. What is the DOM
// Document Object Model
// Interface
// Web documents
// Interact with HTML

// 2. Access Elements through the DOM
// querySelector
// querySelectorAll
// getElementById
// getElementsByClassName
// const p = document.getElementById("para1");

// console.log(p.textContent);

// 3. Manipulate the content
// p.textContent = "This is the updated content by the DOM: textContent";
// p.innerHTML = "This is the updated content by the DOM: innerHTML";
// p.innerText = "This is the updated content by the DOM: innerText";

// 4. Manipulate the structure

// 5. Manipulating the styling of elements

// 6. Dealing with EVENTS

const form = document.getElementById("formID");
const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.getElementById("inputID");

  console.log(input.value);

  output.textContent = input.value;

  console.log("Form submitted");
});

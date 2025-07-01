// 1. What is the DOM
// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

// 2. Access Elements through the DOM
// Methods to select elements from the DOM:
// - querySelector: Selects the first element that matches a CSS selector.
// - querySelectorAll: Selects all elements that match a CSS selector.
// - getElementById: Selects an element by its unique ID.
// - getElementsByClassName: Selects all elements with a specific class name.
// - getElementsByTagName: Selects all elements with a specific tag name.
// Example:
// const p = document.getElementById("para1");
// console.log(p.textContent); // Logs the text content of the element with ID 'para1'.

// 3. Manipulate the content
// You can change the content of elements using:
// - textContent: Sets or returns the text content of the specified node.
// - innerHTML: Sets or returns the HTML content inside the element.
// - innerText: Sets or returns the visible text contained in a node.
// Example:
// p.textContent = "This is the updated content by the DOM: textContent";
// p.innerHTML = "This is the updated content by the DOM: innerHTML";
// p.innerText = "This is the updated content by the DOM: innerText";

// 4. Manipulate the structure
// You can add, remove, or move elements in the DOM to change the structure of the page.

// 5. Manipulating the styling of elements
// You can change the style of elements using the style property or by adding/removing classes.

// 6. Dealing with EVENTS
// You can respond to user actions (like clicks or form submissions) by adding event listeners.

// Get references to the form and output elements by their IDs
const form = document.getElementById("formID");
const output = document.getElementById("output");

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the input element by its ID
  const input = document.getElementById("inputID");

  // Log the value entered in the input field
  console.log(input.value);

  // Display the input value in the output element
  output.textContent = input.value;

  // Log that the form was submitted
  console.log("Form submitted");
});

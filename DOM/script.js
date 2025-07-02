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

const navLinks = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "about.html",
    text: "About",
  },
  {
    href: "contact.html",
    text: "Contact",
  },
  {
    href: "articles.html",
    text: "Articles",
  },
  {
    href: "projects.html",
    text: "Projects",
  },
];

// function functionName() {}

// const functionName2 = () => {}; // arrow function syntax

// Use each element of the array to build a li element
// Attach the group of li elements to the html structure

const navLinksContainer = document.getElementById("nav-links");

// Option 1: Using innerHTML property
// let links = "";

// navLinks.forEach((link, i) => {
//   links += `
//   <li>
//     <a href='${link.href}'>${link.text}</a>
//   </li>`;
// });

// console.log(links);

// navLinksContainer.innerHTML = links;

// Option 2: Using DOM methods
navLinks.forEach((links, i) => {
  // Create the li element
  const li = document.createElement("li");

  // Create the a element
  const a = document.createElement("a");

  // Set the href attribute to the a element
  a.href = links.href;

  // Set text for the a element
  const linkText = document.createTextNode(links.text);

  // Append the linkText to the a
  a.appendChild(linkText);

  // Append the a element to the li element that you created above
  li.appendChild(a);

  // Append li element to the ul (navLinksContainer)
  navLinksContainer.appendChild(li);
});

// 5. Manipulating the styling of elements
// You can change the style of elements using the style property or by adding/removing classes.

// Refer to the colour folder

// 6. Dealing with EVENTS
// You can respond to user actions (like clicks or form submissions) by adding event listeners.

// Refer below and in the colour folder

/**
 * Exercise to apply events and content manipulation
 */
// Get references to the form and output elements by their IDs
const form = document.getElementById("formID");
const output = document.getElementById("output");

// Add a submit event listener to the form
form &&
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

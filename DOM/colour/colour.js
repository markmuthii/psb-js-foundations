// Get the first element with class 'box'
const box = document.getElementsByClassName("box")[0];
// Get the first button element on the page
const button = document.getElementsByTagName("button")[0];

// Array of possible background colours
const colours = [
  "red",
  "green",
  "blue",
  "aqua",
  "brown",
  "beige",
  "orange",
  "yellow",
];

// Array of CSS class names for colour themes
const classes = ["red", "green", "blue"];

// Returns a random integer between min and max (inclusive)
function getRandomWholeNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example: Change box background colour directly using style (commented out)
// button.addEventListener("click", () => {
//   box.style = `background-color: ${
//     colours[getRandomWholeNumberInRange(0, colours.length - 1)]
//   }`;
// });

// When the button is clicked, reset box classes and add a random colour class
button.onclick = () => {
  box.classList = ""; // Remove all existing classes

  box.classList.add(
    "box", // Always keep the 'box' class
    classes[getRandomWholeNumberInRange(0, classes.length - 1)] // Add a random colour class
  );
};

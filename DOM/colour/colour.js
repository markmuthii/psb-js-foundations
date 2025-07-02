const box = document.getElementsByClassName("box")[0];
const button = document.getElementsByTagName("button")[0];

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

const classes = ["red", "green", "blue"];

function getRandomWholeNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// button.addEventListener("click", () => {
//   box.style = `background-color: ${
//     colours[getRandomWholeNumberInRange(0, colours.length - 1)]
//   }`;
// });

button.onclick = () => {
  box.classList = "";

  box.classList.add(
    "box",
    classes[getRandomWholeNumberInRange(0, classes.length - 1)]
  );
};

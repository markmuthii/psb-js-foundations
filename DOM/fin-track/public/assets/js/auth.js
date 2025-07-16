// Get references to the elements
// const navItems = document.getElementsByTagName("li");
const navItems = document.getElementsByClassName("navItem");
const formOutput = document.getElementById("form-output");

const loadFormOnClick = (e) => {
  console.log("Link clicked");
  // Figure out which of the two links has been clicked

  if (e.target.textContent.toLowerCase() === "register") {
    formOutput.innerHTML = "Register Form";
  } else {
    formOutput.innerHTML = "Login Form";
  }

  // If it is the register, show the register form

  // If it is the login, show the login form
};

for (let navItem of navItems) {
  navItem.addEventListener("click", loadFormOnClick);
}

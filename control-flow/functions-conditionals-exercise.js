// Write a function `login(username, password)` that returns `"Access Granted"` **if** the username is `"admin"` **and** password is `"1234"`, **otherwise** returns `"Access Denied"`.

function login(username, password) {
  //  Version 1
  // if (username === "admin" && password === "1234") {
  //   return "Access Granted";
  // } else {
  //   return "Access Denied";
  // }

  // Version 2 (without the else block because if the block is executed, what comes below will never be executed)
  // if (username === "admin" && password === "1234") {
  //   return "Access Granted";
  // }
  // return "Access Denied";

  // Version 3 (No curly braces in the if block since it only has one statement to be executed)
  // if (username === "admin" && password === "1234") return "Access Granted";
  // return "Access Denied";

  // Version 4 (Using a switch statement)
  // switch (true) {
  //   case username === "admin" && password === "1234":
  //     return "Access Granted";

  //   default:
  //     return "Access Denied";
  // }

  // Version 5 (Using a ternary operator) - An alternative for version 1
  return username === "admin" && password === "1234"
    ? "Access Granted"
    : "Access Denied";
}

console.log(login("admin", "1234")); // returns "Access Granted"
console.log(login("user", "1234")); // returns "Access Denied"
console.log(login("admin", "abcd")); // returns "Access Denied"

// Write a function `isPrime(num)` that returns `true` if `num` is a prime number, otherwise `false`.

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7)); // returns true
console.log(isPrime(10)); // returns false
console.log(isPrime(2)); // returns true

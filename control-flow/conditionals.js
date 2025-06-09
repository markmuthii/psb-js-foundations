// 1. IF
// if (condition) {
//   // Block of code to be executed if the condition evaluates to a truthy value
// }

let age = 20;

// Check whether this person is eligible to drive according to the laws of Kenya
if (age >= 18) {
  console.log("Eligible");
}

// 2. IF...ELSE

// if (condition) {
//   // Block to execute if the condition evaluates to truthy
// } else {
//   // Block to execute if the condition evaluates to falsy
// }

// Building upon the above, we need to log Inelligible for persons under the age of 18
if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Ineligible");
}

// 3. IF...ELSE IF

// Let's assume that for you to drive a truck, you need to be 21 and above
// If you are below 21, you can only drive a small vehicle or a motorbike

// Write some code to represent the above

// - 21 and above - Adults
// 18 to 20 - Young adults
// 17 and below (Below 18) - Children

if (age >= 21) {
  // Adults (Truck drivers)
  console.log("Truck Drivers");
} else if (age >= 18 && age < 21) {
  // Young adults (Car and Motorbike drivers/riders)
  console.log("Car/Motorbike Drivers/Riders");
} else {
  console.log("You cannot drive");
}

// 4. SWITCH

let colorCode = "red";

switch (colorCode) {
  case "red":
    console.log("Stop");
    break;

  case "amber":
    console.log("Get ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Unknown color code");
}

let fare = 1000;

switch (true) {
  case fare > 1000:
    console.log("Expensive");
    break;

  case fare < 1000:
    console.log("Cheap");
    break;

  default:
    console.log("Moderate");
}

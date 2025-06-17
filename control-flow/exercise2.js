// 1. Write a function `countToN(n)` that prints the numbers from 1 to `n`.

// let j = 0;

// j = j + 1;

// j += 1;

// j++;

// j = j + 2;

// j += 2;

function countToN(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// countToN(5); // 1 2 3 4 5
countToN(7); // 1 2 3 4 5 6 7

// 2. Write a function `printMultiples(num, limit)` that prints all multiples of `num` from `num` to `limit`.

function printMultiples(num, limit) {
  let count = 0;

  // for (let i = num; i <= limit; i++) {
  //   count++;
  //   if (i % num === 0) {
  //     console.log(i);
  //   }
  // }

  for (let i = num; i <= limit; i = i + num) {
    count++;
    console.log(i);
  }

  console.log("\n\nLoop ran " + count + " times");
}

printMultiples(2, 100);

// 3. Write a function `printTriangle(rows)` that prints a right-angled triangle of `*` with the given number of rows.

// function printTriangle(rows) {
//   // ROWS
//   for (let r = 1; r <= rows; r++) {
//     // COLUMNS
//     let asterisks = "";
//     for (let c = 1; c <= r; c++) {
//       asterisks = asterisks + "*";
//     }

//     console.log(asterisks);
//   }
// }

function printTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
  }
}

printTriangle(5);

// *
// **
// ***

// printTriangle(5);
// *
// **
// ***
// ****
// *****

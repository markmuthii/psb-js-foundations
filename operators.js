// Falsy Values:
// 1. false
// 2. 0
// 3. null
// 4. undefined
// 5. NaN
// 6. ""

// Everything else: truthy

// AND: &&

// console.log("Hey" && "0" && false && "undefined");
// console.log("Hey" || "0" || false || "undefined");
// console.log(0 || NaN || null);

// console.log(18 > 10);

console.log("Hey" && 0 && false && true);

console.log("Hey" && true && "    ");

const str = "narrative";

const str2 = "preservation";

const str3 = "fictional";

const str4 = "non-fictional";

const str5 =
  "A  story is a " +
  str +
  " account of events, real or imagined, often told for entertainment, education, or cultural " +
  str2 +
  ". It can be shared orally, written, or presented through other media like film or theater. Stories can be " +
  str3 +
  " or " +
  str4 +
  ", and may involve a series of related events or experiences.";

const str6 = `A story is a ${str} account of events, real or imagined, often told for entertainment, education, or cultural ${str2}. It can be shared orally, written, or presented through other media like film or theater. Stories can be ${str3} or ${str4}, and may involve a series of related events or experiences.
`;

console.log(str5);
console.log("");

console.log(str6);

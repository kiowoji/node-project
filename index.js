const fs = require("fs");
const findMostRepeatedLetter = require("@kiowoji/npm-package");

const path = process.argv[2];

if (!path) {
  console.error("Please provide a file path.");
  process.exit(1);
}

const text = fs.readFileSync(path, "utf-8");

const result = findMostRepeatedLetter(text);
console.log(`The most repeated letter is: ${result}`);

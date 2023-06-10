// file system module
// sync

const { readFileSync, writeFileSync } = require("fs");

// readFileSync
// used to read a file

const first = readFileSync("./content/first.txt", "utf8");
console.log(first);

const second = readFileSync("./content/second.txt", "utf-8");

// used to create file if it doesnt exist, and flag a is used to append
writeFileSync(
  "./content/result-sync.txt",
  `here is the result: ${first}, ${second}`,
  { flag: "a" }
);

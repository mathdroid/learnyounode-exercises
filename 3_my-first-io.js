const fs = require("fs");

console.log("start program");

const txt = fs.readFileSync(process.argv[2], "utf-8");
const len = txt.split("\n").length - 1;

console.log(len);

const txt2 = fs.readFileSync(process.argv[3], "utf-8");
const len2 = txt2.split("\n").length - 1;

console.log(len2);

console.log(len + len2);

console.log("end program");

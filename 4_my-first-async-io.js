const fs = require("fs");

console.log("start program");

fs.readFile(process.argv[2], "utf8", function (err, data) {
  console.log(data);
});

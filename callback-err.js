const fs = require("fs");

fs.readFile("package.json", function (err, data) {
  if (err) {
    console.log("whoops");
    console.log(err);
    console.log(data);
    return;
  }
  console.log(data);
});

function someFunc(a, b) {
  let c = 0;
  // punya akses ke variable a, b, fs (sama fungsi someFunc)
  console.log(a, b, fs, someFunc, c);
}

// hanya punya akses ke fs (sama fungsi someFunc)

console.log(someFunc, fs);

someFunc(1, 2);

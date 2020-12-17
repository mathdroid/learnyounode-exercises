const fs = require("fs");

module.exports = (req, res) => {
  const start = new Date();
  console.log("start program");
  const buf = fs.readFileSync("file-panjang.txt");
  const txt = buf.toString();
  const length = txt.split("\n").length;

  console.log("end program");
  const end = new Date();
  res.end(`
  Started at ${start.toISOString()}
  Line count is ${length}
  Started at ${end.toISOString()}`);
};

// module.exports = (req, res) => {
//   const start = new Date();
//   console.log("start program async");
//   fs.readFile("file-panjang.txt", function (err, buf) {
//     const txt = buf.toString();
//     const length = txt.split("\n").length;

//     console.log("end program");
//     const end = new Date();
//     res.end(`
//       Started at ${start.toISOString()}
//       Line count is ${length}
//       Started at ${end.toISOString()}`);
//   });
// };

let text = "something";

function readFile(filename, callback) {
  callback(null, text);
}

readFile("nama-file.js", function (err, data) {
  console.log(data);
});

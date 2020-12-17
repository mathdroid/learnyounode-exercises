const text = "HALO INI ADALAH KONTEN FILE-PANJANG";

function readFile(filename, callback) {
  // 1. buat fungsi readfile
  // filename == "file-panjang.txt"
  // callback ==  function (err, data) {
  //     console.log(data);
  // }

  if (filename !== "file-panjang.txt") {
    callback("error: nama file tidak valid", null);
    return;
  }

  callback(null, text);
}

function readFile2(filename) {
  // delay 500 ms
  if (filename !== "file-panjang.txt") {
    throw new Error("error: nama file tidak valid");
  }
  return text;
}

// readFile(
//   "file-panjang.txt", // file yang valid hanya ini

//   function (err, data) {
//     if (err) {
//       console.log("ERROR!!!");
//       console.log(err);
//       return;
//     }
//     console.log(data);
//   }
// );

// 2. ekspektasi: "HALO INI ADALAH KONTEN FILE-PANJANG"
console.log("program start");

// const file = readFile2("file-panjang.txt");
// console.log(file);

readFile(
  "file-panjang.txt", // file yang valid hanya ini

  function (err, data) {
    if (err) {
      console.log("ERROR!!!");
      console.log(err);
      return;
    }
    console.log(data);
  }
);

console.log("program end");

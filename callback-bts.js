const text = { "some-file.txt": "CONTENT OF SOMEFILE.TXT", hello: "world" };
/*
// text["some-file.txt"] === "CONTENT OF SOMEFILE.TXT"
// filePath: string
// callbackFunction: function

// apabila file kebaca, argumen terakhir akan dipanggil dengan signature
// arg2(null, dataHasilPembacaan)

// apabila ada eror lain, argumen terakhir akan dipanggil dengan signature
// arg2(errorMessage, null)
*/

function readFile(arg1, arg2) {
  if (typeof arg1 !== "string" || typeof arg2 !== "function") {
    throw new Error("arg1 must be string and arg2 must be a function");
  } else {
    /*
    // write code here
    // ✅ baca dari object/variable `text`
    // ✅ ketika filename/arg1 ada di key dari object text, callback dengan data
    // ketika filename tidak ditemukan, callback dengan error: "file tidak ditemukan"
    */
    const data = text[arg1];
    if (data != null) {
      arg2(null, data);
    } else {
      arg2("file tidak ditemukan", null);
    }
  }
}

function callbackFn() {
  console.log("process finished");
}

readFile("some-file.txt", callbackFn);

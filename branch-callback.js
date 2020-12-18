const text = {
  "some-file.txt": "CONTENT OF SOMEFILE.TXT",
  hello: "world",
  foo: "bar",
};

function branch(arg, callback_1, callback_2) {
  // kalau arg ada di key-nya variable text,
  //    panggil callback_1 dengan argumen value dari text[arg]
  // kalau nggak ada
  //    panggil callback_2 dengan argumen error message
  if (text[arg]) {
    // file bisa dibaca (anggep aja)
    callback_1(text[arg]);
  } else {
    callback_2(`${arg} tidak ditemukan`);
  }
}
function printError(errorMessage) {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log(errorMessage);
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}
branch(
  process.argv[2],
  function (data) {
    console.log(data);
    console.log(data);
    console.log(data);
  },
  printError
);

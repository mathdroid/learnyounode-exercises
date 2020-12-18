const text = {
  "some-file.txt": "CONTENT OF SOMEFILE.TXT",
  hello: "world",
  foo: "bar",
};

function branch(arg, callback_1, callback_2) {
  if (text[arg]) {
    callback_1(text[arg]);
  } else {
    callback_2(`${arg} tidak ditemukan`);
  }
}

function printSuccess(data) {
  console.log("YES! data found!");
  console.log(data);
}

function printError(errorMessage) {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log(errorMessage);
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}

branch(process.argv[2], printSuccess, printError);

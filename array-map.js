const artists = [
  { name: "Taylor Swift", age: 20 },
  { name: "Justin Bieber", age: 18 },
  { name: "Johnny Cash", age: 55 },
  { name: "Daft Punk", age: 35 },
];

function artistMapper(artis) {
  return `The artist called ${artis.name} is ${artis.age} years old`;
}

function map(someArray, callbackFn) {
  let newArray = [];
  for (let i = 0; i < someArray.length; i++) {
    let element = someArray[i];

    let functionResult = callbackFn(element, i, someArray);

    newArray.push(functionResult);
  }
  return newArray;
}

let result2 = map(artists, function () {
  return `1`;
});

console.log(result2);

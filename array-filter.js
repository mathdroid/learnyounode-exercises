const artists = [
  { name: "Taylor Swift", age: 20 },
  { name: "Justin Bieber", age: 18 },
  { name: "Johnny Cash", age: 55 },
  { name: "Daft Punk", age: 35 },
];

// let result = artists.filter(function (element) {
//   return element.age < 21;
// });

// console.log(result);

function filterMe(someArray, callbackFn) {
  let result = [];

  for (let i = 0; i < someArray.length; i++) {
    let currentElement = someArray[i];
    let condition = callbackFn(currentElement);
    if (condition) {
      result.push(currentElement);
    }
  }
  return result;
}

// let resultMandala = filterMe(artists, function (element) {
//   return element.age < 21;
// });
// console.log(resultMandala);

// [
//   { name: "Taylor Swift", age: 20 },
//   { name: "Justin Bieber", age: 18 },
// ];

let ganjil = artists.filter(function (_, index, _) {
  return index % 2 === 1;
});
console.log(ganjil); // isinya artist dengan index ganjil

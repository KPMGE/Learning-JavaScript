// sample with sort method

const arr = [1, 0, 3, 10, 2, 4];

console.log("Original array: ", arr);
console.log("Alphabetical ordered array: ", arr.sort());
console.log(
  "Ascending ordered array: ",
  arr.sort((value1, value2) => value1 - value2)
);
console.log(
  "Descending ordered array: ",
  arr.sort((value1, value2) => value2 - value1)
);

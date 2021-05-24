// sample with find method

let arr = [1, 2, 3, 4, 5];
const number5 = arr.find((value) => value === 5);

if (number5 === undefined) {
  console.log("Number 5 not found");
} else {
  console.log("Number 5 found");
}

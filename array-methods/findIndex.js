// sample with findIndex method

let arr = [1, 2, 3, 4, 5];
let number5Index = arr.findIndex((value) => value === 5);

console.log(`Index of 5: ${number5Index}`);

// remove value 5
console.log("Removing value 5 ...");
arr.pop();

number5Index = arr.findIndex((value) => value === 5);
console.log(`Index of 5: ${number5Index}`);

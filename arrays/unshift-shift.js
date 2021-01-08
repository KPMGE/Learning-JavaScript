// this methods work such as push and pop but they add and remove values at the start of array

let arr = [2, 3, 4];

console.log("Original array: ", arr);
arr.unshift(29, 45); // adding 29, 45
console.log("Added 29, 45 at the start of the array: ", arr);
arr.shift(); // removing first value
console.log("removed least value from original array: ", arr);

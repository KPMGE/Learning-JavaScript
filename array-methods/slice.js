// sample with slice method

const arr = [1, 2, 3, 4, 5];

const slice1 = arr.slice(3);
const slice2 = arr.slice(1, 3);
const slice3 = arr.slice(3, -1);

console.log("Original array: ", arr);
console.log("array.slice(3): ", slice1);
console.log("array.slice(1, 3): ", slice2);
console.log("array.slice(3, -1): ", slice3);

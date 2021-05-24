// sample with copyWithin method

let arr = [1, 2, 3, 4, 5];

console.log("Original array: ", arr);

arr.copyWithin(1);
console.log("array.copyWithin(1): ", arr);

arr.copyWithin(2, 3, 5);
console.log("arr.copyWithin(2, 3, 5): ", arr);

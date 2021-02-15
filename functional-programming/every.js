// the every method is used to check all elements of an array

let array = [1, 45, 52, 0];

console.log(array.every(num => num > 0));

delete array[4];

console.log(array.every(num => num > 0));
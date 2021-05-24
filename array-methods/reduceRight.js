// sample with reduceRight method

let arr = [1, 2, 3, 4, 5];
const sum = arr.reduceRight((value1, value2) => value1 + value2);
const multi = arr.reduceRight((value1, value2) => value1 * value2, 1); // default 1

console.log("Original array: ", arr);
console.log(`Sum of all elements: ${sum}`);
console.log(`Multiplication of all elements: ${multi}`);

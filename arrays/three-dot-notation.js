// we can refer arrays using '...' notation

let arr1 = [1, 4, 8, 2];

// creating new array using arr1
let arr2 = [0, ...arr1, 39];

// using arr1 as a parameter to Math.max method
console.log(arr1);
console.log(arr2);
console.log(Math.max(...arr2));

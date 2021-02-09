// we can use the spread operator to copy an array to another

let arr1 = [1, "kevin", 31, true];
let arr2 = [123, "laura", ...arr1, false];


console.log(arr1);
console.log(arr2);
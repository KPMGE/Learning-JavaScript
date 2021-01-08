// with these methods, we can find a value on an array and, if there will are no value, it's returned -1


let arr = [1, 2, 5, 10, 55];

console.log("array: ", arr);
console.log("The index of 2 is: ", arr.indexOf(2));
console.log("The index of 5 is: ", arr.lastIndexOf(5)); 
console.log("The index of 3 is: ", arr.indexOf(3), " because, there are no value 3 on that array");

// the method some checks if there is some element that commits with a criteria

let array = [1, 4, 45, 8349, 1];

// check if there is some number less than 0
console.log(array.some(num => num < 0));

array.push(-1);

// check if there is some number less than 0
console.log(array.some(num => num < 0));
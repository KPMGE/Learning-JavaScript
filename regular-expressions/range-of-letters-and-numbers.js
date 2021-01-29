// we can put a range of numbers and letters among with square bracket notation

let str = "mat, cat, hat, sat, fat, 1, 51, 23, 2";
let regexLetters = /[c-h]at/gi;
let regexNumbers = /[1-5]/gi;
let regexLettersAndNumbers = /[a-h1-5]/gi;

console.log(str.match(regexLetters));
console.log(str.match(regexNumbers));
console.log(str.match(regexLettersAndNumbers));
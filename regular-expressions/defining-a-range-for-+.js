// we can define a range for the charactes * and + by using a {} notation

let phrase = "ahhz";
let phrase2 = "ahhhhz";
let regex = /ah{3,6}z/;

console.log(regex.test(phrase));
console.log(regex.test(phrase2));
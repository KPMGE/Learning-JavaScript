// we can reuse patterns by using () notation and the \ operator

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;

console.log(repeatRegex.test(repeatStr)); 
console.log(repeatStr.match(repeatRegex)); 
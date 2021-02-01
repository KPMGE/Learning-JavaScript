// we can use * to match characters that appear zero or more times

let phrase = "az";
let phrase2 = "ahhhhhhhz";
let regex = /ah*z/;

console.log(phrase.match(regex));
console.log(phrase2.match(regex));


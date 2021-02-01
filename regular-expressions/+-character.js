// we can use the + character to match characters that occur one or more times

let phrase = "ahhhhhhz";
let phrase2 = "ahhhzhhh;"
let regex = /ah+/;

console.log(phrase.match(regex));
console.log(phrase2.match(regex));
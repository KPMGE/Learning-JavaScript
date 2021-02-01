// we can find a pattern at the beginning of a string using ^ operator

let phrase = "Kevin is a good programmer, sometimes lol";
let regex = /^Kevin/;

console.log(phrase.match(regex));
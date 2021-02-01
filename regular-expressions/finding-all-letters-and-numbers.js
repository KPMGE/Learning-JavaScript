// we can use the \w character to find all letters and numbers of a string,
// the \w is equal to [a-zA-Z0-9_]

let phrase = "Kevin is a good programer, sometimes lol $%#!";
let regex = /\w+/gi;
let negativeRegex = /\W/g;

console.log(phrase.match(regex));


// we can use the negative expression of it by using an uppercase W, it represents [^a-z-A-Z0-9_]
console.log(phrase.match(negativeRegex));
// we can match for whitespaces by using the \s character

let phrase = "Kevin is a good programmer, sometimes lol";
let regex = /\s/g;
let negativeRegex = /\S/g;

console.log(phrase.match(regex));

// we can match for non-whitespaces by using an uppercase S
console.log(phrase.match(negativeRegex));
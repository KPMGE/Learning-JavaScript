// we can match to all numbers by using \d character. it represents [0-9]

let phrase = "Kevin is the number 1 programmer, trust me 2, 5, 53, 625";
let regex = /\d/g;
let negativeRegex = /\D/g;

console.log(phrase.match(regex));

// we can write it of a negative way by using an uppercase D
console.log(phrase.match(negativeRegex));
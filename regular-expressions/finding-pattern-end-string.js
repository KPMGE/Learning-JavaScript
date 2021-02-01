// we can  find a pattern at the end of a string by using the $ and

let phrase = "Kevin is a good programmer, sometimes lol";
let regex = /lol$/;

console.log(phrase.match(regex));
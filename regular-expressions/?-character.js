// we can use ? to restrict match to your smallest representative

let movie = "titanic";
let regex = /t[a-z]*i/;
let restrictRegex = /t[a-z]*?i/;

console.log(movie.match(regex));
console.log(movie.match(restrictRegex));
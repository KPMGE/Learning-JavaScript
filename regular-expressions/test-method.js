// we can use test method to test if there is a pattern in a string

let str = "Kevin Carvalho de Jesus";
let regex = /Kevin/;
let regex2 = /Laura/;

// testing if 'Kevin' pattern appear in the string
console.log(regex.test(str));
console.log(regex2.test(str));
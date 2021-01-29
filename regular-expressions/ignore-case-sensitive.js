// we can ignore case sensitive in a regex, by using 'i' flag

let str = "Kevin Carvalho de Jesus";
let regexWithFlag = /kevin/i;
let regexWithoutFlag = /kevin/;

console.log(regexWithoutFlag.test(str));
console.log(regexWithFlag.test(str));


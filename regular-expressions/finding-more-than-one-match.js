// we can find more than first match by using 'g' flag

let str = "Kevin Carvalho de Jesus, kevin, KEVin";
let regexWithoutFlag = /kevin/i;
let regexWithFlag = /kevin/gi;

console.log(str.match(regexWithoutFlag));
console.log(str.match(regexWithFlag));
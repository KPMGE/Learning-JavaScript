// we can extract matches by using .match() method, it's used on a string, and not on a regex

let str = "Kevin Carvalho de Jesus";
let regex = /kevin/i;

console.log(str.match(regex));
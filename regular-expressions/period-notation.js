// we can make a match for any letter by using the period notation

let str = "hum, Hug, hUb, hut, kevin, nothing";
let regex = /hu./gi;

console.log(str.match(regex));
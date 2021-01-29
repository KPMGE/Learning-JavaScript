// we can put the letters that will be allowed by surrounding them with square brackets

let str = "hum, Hug, hUb, hut, hat, hot, hit, kevin, nothing";
let regex = /h[aoi]t/gi;

console.log(str.match(regex));
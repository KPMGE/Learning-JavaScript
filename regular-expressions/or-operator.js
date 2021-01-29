// we can put more than one pattern in a regex by using the '|' operator

let str = "Kevin Carvalho de Jesus";
let regex = /kevin | Carvalho/;

// 'kevin' do not appear, however 'Carvalho' is in str 
console.log(regex.test(str));

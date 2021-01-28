// we can hold the rest of contents using the rest parameter

let [a, b, ...rest] = [1, 3, 5, 6, 30, 24];

console.log("a: ", a, "\nb: ", b);
console.log("rest: ", rest);
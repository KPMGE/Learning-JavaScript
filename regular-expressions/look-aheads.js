// we can use lookaheads to match for some give pattern

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;

console.log(quit.match(quRegex)); 
console.log(noquit.match(qRegex));


// cheking a password
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;

console.log(checkPass.test(password));
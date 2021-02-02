// we can replace some texts from a string by using the .replace method

let wrongText = "The sky is silver.";
let silverRegex = /silver/;

console.log("Original text: ", wrongText);
console.log("replaced text: ", wrongText.replace(silverRegex, "blue"));
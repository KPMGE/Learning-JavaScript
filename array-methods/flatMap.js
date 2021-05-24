// sample with flatMap method

const phrase = [
  "Hello there! ",
  "My name is",
  "Kevin Carvalho",
  "How are u feeling today?",
];
const words = phrase.flatMap((phrase) => phrase.split(" "));

console.log("Original phrase array: ", phrase);
console.log("Flatted array: ", words);

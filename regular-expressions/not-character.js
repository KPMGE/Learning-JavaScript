// we can deny some expression using ^ character

let phrase = "Hello, i'm a programmer!";
let nonVowel = /[^aeiou]/gi;

console.log("non-vowels in the phrase: ", phrase.match(nonVowel));

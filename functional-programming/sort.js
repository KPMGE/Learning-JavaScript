// the sort function sort an array by applying a callback function

let array = [13, 5, 62, 7, 24, 0];

// ascending order
console.log("ascending order: ", array.sort((number1, number2) => number1 - number2));
// descending order
console.log("descending order: ", array.sort((number1, number2) => number2 - number1));

let names = ["kevin", "ana", "daniela", "laura", "anne", "karol", "luana"];

// alphabetic order
console.log("alphabetic order: ", names.sort((letter1, letter2) => {
  return letter1 === letter2 ? 0 : letter1 > letter2 ? 1 : -1;
}));

// reverse alphabetic order
console.log("reverse alphabetic order: ", names.sort((letter1, letter2) =>{
  return letter1 === letter2 ? 0 : letter1 < letter2 ? 1 : -1;
}));
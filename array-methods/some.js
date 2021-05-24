// sample with some method

function displayMessage(hasSomeEvenNumber) {
  if (hasSomeEvenNumber) {
    console.log("The array has some even number");
  } else {
    console.log("The array hasn't even numbers");
  }
}

let arr = [1, 2, 3, 4, 5];
let hasSomeEvenNumber = arr.some((value) => value % 2 === 0);

displayMessage(hasSomeEvenNumber);

console.log("Removing even numbers ....");
arr = arr.filter((value) => value % 2 !== 0);
hasSomeEvenNumber = arr.some((value) => value % 2 === 0);

displayMessage(hasSomeEvenNumber);

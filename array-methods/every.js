// sample with every method

function displayMessage(haveOnlyPositiveNumbers) {
  if (haveOnlyPositiveNumbers) {
    console.log("The array has only positive numbers");
  } else {
    console.log("The array has some negative numbers");
  }
}

let arr = [1, 2, 3, 4, 5];
let haveOnlyPositiveNumbers = arr.every((value) => value > 0);

displayMessage(haveOnlyPositiveNumbers);

console.log("Adding -1 into array ...");
arr.unshift(-1);

haveOnlyPositiveNumbers = arr.every((value) => value > 0);
displayMessage(haveOnlyPositiveNumbers);

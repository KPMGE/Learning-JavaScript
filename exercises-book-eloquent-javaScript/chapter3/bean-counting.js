// function that counts the letter occurrency in the string

function countLetter(someStringh, letter) {
  let amount = 0;

  for (let i = 0; i < someStringh.length; i++) {
    if (someStringh[i] === letter) {
      amount++;
    }
  }

  return amount;
}

let str = "JavaScript is really awesome!";
console.log(countLetter(str, "a"));
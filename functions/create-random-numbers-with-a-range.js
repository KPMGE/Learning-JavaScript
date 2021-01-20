// we can create random numbers with a range of 2 numbers

function generateRandomNumber(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}

function generateListToBet(minimum, maximum) {
  listToBet = [];

  for (let i = 0; i < 6; i++) {
    listToBet.push(generateRandomNumber(minimum, maximum));
  }

  return listToBet;
}

console.log("You can bet in the following sequence: ", generateListToBet(1, 60));
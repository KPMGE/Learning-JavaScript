function doOperation(array, amount, operation) {
  if (amount == 0) {
    return 0;
  } else if (amount == 1) {
    return array[0];
  } else {
    switch (operation) {
      case "+":
        return doOperation(array, amount - 1, "+") + array[amount - 1];
        break;
      case "-":
        return doOperation(array, amount - 1, "-") - array[amount - 1];
        break;
      case "*":
        return doOperation(array, amount - 1, "*") * array[amount - 1];
        break;
      case "/":
        return doOperation(array, amount - 1, "/") / array[amount - 1];
        break;
    }
  }
}

let array = [1, 5, 2, 15];
console.log(doOperation(array, 3, "+"));
console.log(doOperation(array, 3, "-"));
console.log(doOperation(array, 3, "*"));
console.log(doOperation(array, 3, "/"));
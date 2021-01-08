// interesting version of isEven funcion without use % operator

function isEven(value) {
  if (value < 0) { // if the value is negative, we can turn it on positive 
    value *= -1;
  } if (value == 0) {
    return true;
  } else if (value == 1) {
    return false;
  } else {
    return isEven(value - 2);
  }
}

console.log(isEven(-2));

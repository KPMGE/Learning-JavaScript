// we can create functions that accept any number os parameters
// to do this, we can use '...' operator


// creating functon max from Math

function max(...numbers) {
  let greatestValue = -Infinity;

  for (let number of numbers) {
    if (number > greatestValue) {
      greatestValue = number;
    }
  }
  return greatestValue;
}

// now, we can put any number of parameters to that function
console.log(max(4, 2));
console.log(max(1, 23, 102, 581));
console.log(max(1, 5, 6));

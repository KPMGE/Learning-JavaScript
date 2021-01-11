// function that sum a set of numbers
function sum(numbers) {
  let sumNumbers = 0;

  for (let number of numbers) {
    sumNumbers += number;
  }

  return sumNumbers;
}

// function that returns an array given start, end and step
function range(start, end, step = 1) {
  let setOfNumbers = [];
 
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      setOfNumbers.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      setOfNumbers.push(i);
    }
  }

  return setOfNumbers;
}

console.log(sum(range(5, 2, -1)));
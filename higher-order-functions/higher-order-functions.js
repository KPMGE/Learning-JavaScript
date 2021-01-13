// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

// repeat something N times
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// function that create new functions
function greaterThan(n) {
  return m => m > n;
}

let greaterThan3 = greaterThan(3);

console.log(greaterThan3(5));


// function that change other function
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1);


// function that creates new control flow
function unless(test, then) {
  if (!test) {
    then();
  }
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
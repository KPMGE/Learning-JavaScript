// we can have recursive functions that perform just like a loop

function sum(arr, n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return arr[0];
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

let arr = [2, 5, 1, 3];

console.log(sum(arr, 4));
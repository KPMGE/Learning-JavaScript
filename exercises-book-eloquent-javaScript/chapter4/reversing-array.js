function reverseArray(array) {
  let reversedArray = [];

  for (let i = (array.length - 1); i >= 0; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
}

function reverseArrayInPlace(array) {
  let aux, j = (array.length - 1);

  for (let i = 0; i < array.length / 2; i++) {
    aux = array[i];
    array[i] = array[j];
    array[j] = aux;

    j--;
  } 

  return array;
}

let arr = [1, 3, 5];

console.log(reverseArray(arr));
console.log(reverseArrayInPlace(arr));
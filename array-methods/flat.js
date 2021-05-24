// sample with flat method

const extremelyNestedArr = [1, [2, [3, [4, [6, [7, [8, [9]]]]]]]];
console.log("Original Array: ", extremelyNestedArr);

for (let i = 1; i < 8; i++) {
  console.log(`array.flat(${i}): `, extremelyNestedArr.flat(i));
}


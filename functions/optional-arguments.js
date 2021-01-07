// program that says about js special property of functions

function power(base, exponent = 2) {
    let result = 1;

    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(4));  // 16
// even when we provide additional arguments, the function still works
console.log(power(2, 6)); // 64

// OBS: when we provide less arguments, the others parameters are assigned by 'undefined' data type

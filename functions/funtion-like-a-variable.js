// example with a function like a variable

const power = function(base, exponent) {
    let result = 1;

    for (let count = 0; count < exponent; count++) {
        result *= base;
    }

    return result;
};

console.log(power(2, 10));

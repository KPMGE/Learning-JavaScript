//Example 1: Implicit Conversion to String

// numeric string used with + gives string type
let result;

result = '3' + 2; 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"


//Example 2: Implicit Conversion to Number

// numeric string used with +, - , / , * results number type
let result;

result = '4' - '2'; 
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2


//Example 3: Non-numeric string results NaN

// non-numeric string used with +, - , / , * results to NaN
let result;

result = 'hello' - 'world';
console.log(result); // NaN

result = '4' - 'hello';
console.log(result); // NaN


//Example 4: Implicit Boolean Conversion to Number

// if boolean is used, true is 1, false is 0
let result;

result = '4' - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4


//Example 5: null Conversion to Number


// null is 0 when used with number
let result;

result = 4 + null;
console.log(result);  // 4

result = 4 - null;
console.log(result);  // 4


//Example 6: undefined used with number, boolean or null

// Arithmetic operation of undefined with number, boolean or null gives NaN
let result;

result = 4 + undefined;
console.log(result);  // NaN

result = 4 - undefined;
console.log(result);  // NaN

result = true + undefined;
console.log(result);  // NaN

result = null + undefined;
console.log(result);  // NaN




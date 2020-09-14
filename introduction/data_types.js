String	//represents textual data	'hello', "hello world!" etc

Number	//an integer or a floating-point number	3, 3.234, 3e-2 etc.

BigInt	//an integer with arbitrary precision	900719925124740999n , 1n etc.

Boolean	 //Any of two values: true or false	true and false

undefined	//a data type whose variable is not initialized	let a;

null  //special keyword denoting a null value	let a = null;

Symbol	//data type whose instances are unique and immutable	let value = Symbol('hello');

Object	//key-value pairs of collection of data	let student = { };



//strings example
let name = 'ram';
let name1 = "hari";
let result = `The names are ${name} and ${name1}`;



//numbet example
let number1 = 3;
let number2 = 3.433;
let number3 = 3e5 // 3 * 10^5



// +Infinity, -Infinity and NaN example
let number1 = 3/0;
console.log(count); // returns Infinity

let number2 = -3/0;
console.log(count1); // returns -Infinity

// strings can't be divided by numbers
let number3 = "abc"/3; 
console.log(number3);  // returns NaN



//JavaScript BigInt
// BigInt value
let value = 900719925124740998n;

// Adding two big integers
let value1 = value + 1n;
console.log(value1); // returns "900719925124740999n"

let value = 900719925124740998n;

// Error! BitInt and number cannot be added
let value1 = value + 1; 
console.log(value1);


//JavaScript Boolean example
let dataChecked = true;
let valueCounted = false;



//JavaScript undefined example
//The undefined data type represents value is not assigned. If a variable is declared but the value is not assigned, then the value of that variable will be undefined. For example,

let name;
console.log(name); // returns undefined


//It is also possible to explicitly assign a variable value undefined. For example

let name = undefined;
console.log(name); // returns undefined

//Note: It is recommended not to explicitly assign undefined to a variable. Usually, null is used to assign 'unknown' or 'empty' value to a variable.



//JavaScript null
//In JavaScript, null is a special value that represents empty or unknown value. For example,

let number = null;

//The code above suggests that the number variable is empty.
//Note: null is not the same as NULL or Null.



//JavaScript Symbol
//This data type was introduced in a newer version of JavaScript (from ES2015).

//A value having the data type Symbol can be referred to as a symbol value. Symbol is an immutable primitive value that is unique. For example,

// two symbols with the same description
let value1 = Symbol('hello');
let value2 = Symbol('hello');


//JavaScript Object
//An object is a complex data type that allows us to store collections of data. For example,

let student = {
    firstName: 'ram',
    lastName: null,
    class: 10
};



//JavaScript typeof
//To find the type of a variable, you can use the typeof operator. For example,

let name = 'ram';
typeof(name); // returns "string"

let number = 4;
typeof(number); //returns "number"

let valueChecked = true;
typeof(valueChecked); //returns "boolean"

let a = null;
typeof(a); // returns "object"

//Notice that typeof returned "object" for the null type. This is a known issue in JavaScript since its first release.


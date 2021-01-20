// we can put a second argument in the parseInt function, it says which radix will be used

function convertBinaryToInteger(binary) {
  return parseInt(binary, 2);
}

let binary = "10011";

console.log("The number: ", binary, "is the integer: ", convertBinaryToInteger(binary));
// program to reverse a string 

function reverseString(str) {
  let arr = [];

  for (let letter of str) {
    arr.unshift(letter);
  }

  str = arr.toString();

  for (let i = 0; i < arr.length; i++) {
    str = str.replace(",", "");
  }
  return str;
}

console.log(reverseString("Kevin carvalho de jesus"));
// in the javaScript programming language, the comparsion between two objects return true if, and only if, 
// the object is the same. therefore don't matter if there are other object with same labels, that won't be the same object

let object1 = {
  name: "foo",
  age: 27
};

let object2 = object1;

let object3 = {
  name: "foo",
  age: 27
};

console.log(object1 == object2);
console.log(object1 == object3);

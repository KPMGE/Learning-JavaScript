// the this keyword refer to current object itself

let dog = {
  name: "pitoco",
  age: 3,
  pants: 4,
  setAge(age) {
    this.age = age;
  }
};

console.log("dog name: ", dog.name);
console.log("dog age: ", dog.age);

dog.setAge(4);

console.log("dog new age: ", dog.age);
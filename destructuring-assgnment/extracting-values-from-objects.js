// we can extract values from objects using destructuring assgnment

let user = {
  name: "Kevin",
  age: 20

};

// creating variables name and age and assigmenting them with user.name and user.age
const {name, age} = user;

console.log("Name user: ", name);
console.log("User age: ", age);
// we can create our own names to variables using destructuring assgnment

let user = {
  name: "Kevin",
  age: 20
};

const {name: nameUser, age: ageUser} = user;

console.log("name user: ", nameUser);
console.log("age user: ", ageUser);

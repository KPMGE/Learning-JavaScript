// we can extract values from a nested object using destructuring notation

let user = {
  Kevin: {
    name: "Kevin",
    age: 20
  }
};

const {Kevin: {name: nameUser, age: ageUser }} = user;

console.log("name user: ", nameUser);
console.log("age user: ", ageUser);
// simple sample of map method

// array of numbers
let array = [1, 6, 5, 62];

// adding 10 to each elemnt of array
let arrayPlusTen = array.map(elemOfArray => elemOfArray + 10);

// displaying result
console.log("original array: ", array);
console.log("array plus ten: ", arrayPlusTen);

console.log("\n\nusers:\n");
let users = [{
    name: "kevin",
    age: 20,
    sex: "male"
  },
  {
    name: "laura",
    age: 19,
    sex: "female"
  },
  {
    name: "luana",
    age: 18,
    sex: "female"
  }
];

// extracting different values from users object
let nameAndSexUsers = users.map(user => {
  return { "name": user.name, "age": user.age };
});
let nameUsers = users.map(user => user.name);
let ageUsers = users.map(user => user.age);

// displaying outcome
console.log("Original object users: ", users);
console.log("name and sex users: ", JSON.stringify(nameAndSexUsers));
console.log("only names: ", nameUsers);
console.log("only ages: ", ageUsers);
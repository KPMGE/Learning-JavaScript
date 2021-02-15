// the reduce method applies a callback over and over again returning an unique value type

let users = [{
    name: "kevin",
    age: 19,
    sex: "male",
    amountMoney: "10.99"
  },
  {
    name: "laura",
    age: 19,
    sex: "female",
    amountMoney: "100.5"
  },
  {
    name: "luana",
    age: 18,
    sex: "female",
    amountMoney: "60.9"
  }
];

// extracting information from users object
let usersMoney = users.map(user => user.amountMoney);
let usersAge = users.map(user => user.age);

// using method reduce to execute operations
let totalAgeUsers = usersAge.reduce((age1, age2) => age1 + age2);
let totalMoneyUsers = usersMoney.reduce((money1, money2) => parseFloat(money1) + parseFloat(money2));


console.log("users: ", users);
console.log("\nthe total money of users is: ", totalMoneyUsers);
console.log("the total age of users is: ", totalAgeUsers);
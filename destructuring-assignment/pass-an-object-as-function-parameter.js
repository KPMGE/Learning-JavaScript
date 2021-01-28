// we can use destructuring assignment to pass an object as a function parameter

let user = {
  name: "Kevin",
  age: 20,
  gender: "male"
};

// old way
function greeatUserOldWay(user) {
  let { name, age, gender } = user;
  console.log("Hello " + name);
  console.log("your gender is: ", gender);
  if (age >= 18) {
    console.log("oh, you can drive a car!");
  }
}

// newest way
function greeatUserNewWay({ name, age, gender }) {
  console.log("Hello " + name);
  console.log("your gender is: ", gender);
  if (age >= 18) {
    console.log("oh, you can drive a car!");
  }
}

// the result is the same
console.log("Old way:")
greeatUserOldWay(user);

console.log("\nNew way:");
greeatUserNewWay(user);

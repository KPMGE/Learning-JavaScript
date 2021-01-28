// we can define functions within objectcs, to do that, we can't use 'function' keyword

let user = {
  name: "Kevin",
  age: 20,
  gender: "male",

  // defining function
  greeatUser() {
    console.log("hello " + this.name);
    console.log("your age is: ", this.age);
  },
  addAgeUser(number) {
    this.age += number;
  }
};

user.greeatUser();
// adding 10 years to user
user.addAgeUser(10);
user.greeatUser();

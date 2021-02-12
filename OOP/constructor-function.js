// a constructor function is a function that is made to create new objects named instances
// NOTE: We must use new keyword

function Person(name, age, sex, cpf) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.cpf = cpf;
}

// creating an instance
let kevin = new Person("kevin", 19, "male", 123456789);

console.log("name:", kevin.name);
console.log("age:", kevin.age);
console.log("cpf:", kevin.cpf);
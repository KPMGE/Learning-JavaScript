// we can use instanceof to verify is an object is an instance of a contructor

function Person(name, age, sex, cpf) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.cpf = cpf;
}

// creating an instance
let kevin = new Person("kevin", 19, "male", 123456789);

// creating a normal object with same fields of kevin
let laura = {
  name: "laura",
  age: 18,
  sex: "female",
  cpf: 1341315
};

console.log(kevin instanceof Person);
console.log(laura instanceof Person);
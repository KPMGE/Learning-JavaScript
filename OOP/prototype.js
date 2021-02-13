// we can use prototype to define a field  for ALL our instances 

function Person(name, age, sex, cpf) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.cpf = cpf;
}

// creating some instances
let kevin = new Person("kevin", 19, "male", 123456789);
let laura = new Person("laura", 19, "female", 9485029480);
let luana = new Person("luana", 19, "female", 904254254);

// defining a field for all instances
Person.prototype.birthday = 0000;

// using it
kevin.birthday = 23082001;
laura.birthday = 12022000;
luana.birthday = 18072000;

console.log("kevin birthday:", kevin.birthday);
console.log("laura birthday:", laura.birthday);
console.log("luana birthday:", luana.birthday);

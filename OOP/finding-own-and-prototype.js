// program that finds prototype and own properties from a given object

// creating constructor
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

// creating instance
let kevin = new Person("kevin", 19, "male");

// arrays to hold own and prototype properties
let ownProperties = [];
let prototypeProperties = [];

// function that finds own and prototype properties
function findOwnAndPrototypeProperties(objectInstance) {
  for (let field in objectInstance) {
    if (objectInstance.hasOwnProperty(field)) {
      ownProperties.push(field);
    } else {
      prototypeProperties.push(field);
    }
  }
}

// calling function
findOwnAndPrototypeProperties(kevin);
console.log("own properties: ", ownProperties);
console.log("prototype properties: ", prototypeProperties);

// creating prototype properties
Person.prototype.birthday = 0;
Person.prototype.cpf = 0;

// calling function again
findOwnAndPrototypeProperties(kevin);
console.log("\nupdating....");
console.log("own properties: ", ownProperties);
console.log("prototype properties: ", prototypeProperties);

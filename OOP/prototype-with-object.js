// we can add all properties by using prototype assigning it with an another object

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// creating prototypes
Person.prototype = {
  birthday: 0,
  cpf: 0,
  happyBirthday(){
    console.log("happy birthday ", this.name);
  },
  setNewAge(age) {
    this.age = age;
  }
};

// creating instance
let kevin = new Person("kevin", 19);


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

// calling functions
findOwnAndPrototypeProperties(kevin);
console.log("own properties: ", ownProperties);
console.log("prototype properties: ", prototypeProperties);
kevin.happyBirthday();
kevin.setNewAge(20);
console.log("new age: ", kevin.age);


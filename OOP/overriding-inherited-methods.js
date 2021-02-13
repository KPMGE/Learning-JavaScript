// we can override inherited method by using a prototype notation

function Animal() { };

// general constructor
Animal.prototype = {
  eat() {
    console.log("i'm eating");
  },
  sleep() {
    console.log("i'm sleeping");
  }
}

function Dog(amountPants) {
  this.amountPantso = amountPants;
}

// doing inheritance
Dog.prototype = Object.create(Animal.prototype);

// creating a new instance
beagle = new Dog(12);

console.log("before");
beagle.eat();

// overrading eat method
Dog.prototype.eat = function () {
  console.log("i'm eating a steak!");
}

console.log("\nafter");
beagle.eat();
// we need to reset a constructor object when it was inherited

function Animal() { }; // constructor to animal

// adding methods to animal's prototype
Animal.prototype = {
  amountPants: 0,
  eat() {
    console.log("i'm eating!");
  },
  see() {
    console.log("i'm seeing"); 
  }
};

// constructor to a bird, that's an animal
function Bird(name) {
  this.name = name;
}

// inheriting prototypes from animal
Bird.prototype = Object.create(Animal.prototype);

// creating instance of bird
someBird = new Bird("birll");
console.log(someBird.constructor == Bird);

// reseting constructor
Bird.prototype.constructor = Bird;
console.log(someBird.constructor == Bird);
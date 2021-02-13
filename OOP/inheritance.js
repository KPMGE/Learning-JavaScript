// the concept of inheritance is to create a general object that will be inherited by others
// to do that, we need to add to the prototype of a constructor the object returned by Object.create function

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

// we can access properties defined in the Animal prototype
someBird.amountPants = 2;
console.log("name:", someBird.name);
console.log("amount pants:", someBird.amountPants);
someBird.eat(); 
someBird.see();
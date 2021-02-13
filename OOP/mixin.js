// we can use a mixin to add same behavior to unrelated objects
// constructor to a bird
function Bird(name) {
  this.name = name;
}

// constructor to a dog
function Dog(name) {
  this.name = name;
}

// creating instance of bird
someBird = new Bird("birll");
someDog = new Dog("pitoco");

// creating mixin
function mixin(object) {
  object.eat = function () {
    console.log("i'm eating");
  }
}

// adding method eat to dog and bird
mixin(someBird);
mixin(someDog);

// invoking method
someDog.eat();
someBird.eat();

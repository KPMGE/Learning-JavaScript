// now, we can use a sugar sintax when using oop in javaScript

// crating a class to an animal
class Animal {
  constructor(name, age, amountOfPants) {
    this.name = name;
    this.age = age;
    this.amountOfPants = amountOfPants;
  }
  eat() {
    console.log("i'm eating");
  }
  sleep() {
    console.log("i'm sleeping");
  }
}

// creating a class dog that extends animal
class Dog extends Animal {
  constructor(name, age, amountOfPants, race, color) {
    super(name, age, amountOfPants);
    this.race = race;
    this.color = color;
  }
  bark() {
    console.log("woof woof!");
  }
}

// creaing an instance of dog
beagle = new Dog("pitoco", 2, 4, "beagle", "black");

console.log("the dog " + beagle.name + "has " + beagle.age + " years");
console.log("pitoco is coming!");
beagle.bark();
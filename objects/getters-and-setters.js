// we can use getters and setters to control access an object
// getter method return a value
// setter method change something in the object
// NOTE: by standard, we use '_' when working with getters and setters

class Person {
  constructor(name, age, gender) {
    this._name = name;
    this._age = age;
    this._gender = gender;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    this._age = newAge;
  }

  get gender() {
    return this._gender;
  }
}

// creating new person
const somePerson = new Person("Kevin", 20, "male");

console.log("Hello ", somePerson.name);
somePerson.name = "Kevin Carvalho de Jesus";
console.log("Hello ", somePerson.name);

if (somePerson.age >= 18 && somePerson.gender === "male") {
  console.log("Oh, good, you can drive a car!");
  console.log("you must enlist in the armed forces, break a leg!");
}

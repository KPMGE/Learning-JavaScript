// we can use class sintax to define a constructor, it creates an object with given data

// creating class to define a person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// creating a new person object
const kevin = new Person("Kevin", 20, "male");
console.log(kevin);
// we can access the fields of 'kevin' object naturaly
console.log("Hello", kevin.name);
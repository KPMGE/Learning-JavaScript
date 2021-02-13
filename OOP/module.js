// when we have so much mixins the best approach is to createa module to hold them together

function Person(name, age) {
  let cpf, password;

  this.name = name;
  this.age = age;
  this.setCpf = function(cpf) {
    this.cpf = cpf;
  }
  this.getCpf = function () {
    return this.cpf;
  }
  this.setPassword = function(password) {
    this.password = password;
  }
  this.getPassword = function () {
    return this.password;
  }
}

kevin = new Person("kevin", 19);

// creating module 
let moduleToPerson = (function () {
  return {
    eatMixin(object) {
      object.eat = function(){
        console.log("i'm eating");
      } 
    },
    greetMixin(object) {
      object.greet = function () {
        console.log("hello", this.name);
      }
    }
  };
})();

// applying eat mixin to the kevin object
moduleToPerson.eatMixin(kevin);
// applying greet mixin to the kevin object
moduleToPerson.greetMixin(kevin);

// invoking methods
kevin.eat();
kevin.greet();
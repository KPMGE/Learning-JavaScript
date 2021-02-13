// we can protect properties by defining them within a constructor

function Person(name, age) {
  this.name = name;
  this.age = age;

  let cpf, passwordUser;

  // creating methods to access and modify cpf and passworUser variables
  this.setCpf = function(cpf) {
    this.cpf = cpf;
  }
  this.getCpf = function() {
    return this.cpf;
  }
  this.setPassword = function (password) {
    this.passwordUser = password;
  }
  this.getPassword = function(){
    return this.passwordUser;
  }
}

// creating a new instance
kevin = new Person("kevin", 20);

// setting cpf
kevin.setCpf(3490138);
// setting password 
kevin.setPassword(1234);

console.log("user cpf:", kevin.getCpf());
console.log("user password:", kevin.getPassword());

// we can return simple objects with a sugar sintax in JavaScript

// old way
const createPersonOld = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
}

// new, and best way
const createPersonNew = (name, age, gender) => {
  return { name, age, gender };
}

laura = createPersonOld("laura", 19, "female");
kevin = createPersonNew("kevin", 20, "male");

// the result is same
console.log(laura);
console.log(kevin);
const deepEqual = (value1, value2) => {
  if (typeof(value1) == "object" && typeof( typeof(value2) == "object")) {
    let keysFromObject1 = Object.keys(value1);
    let keysFromObject2 = Object.keys(value2);
    let amountKeys = keysFromObject1.length;

    if (amountKeys < keysFromObject2.length) {
      amountKeys = keysFromObject2.length;
    }

    for (let i = 0; i < amountKeys; i++) {
      if (keysFromObject1[i] !== keysFromObject2[i]) {
        return false;
      }
    }

    return true;
  } else {
    return (value1 === value2) ? true : false; 
  }
}

let person1 = {
  name: "kevin", 
  age: 20
};

let person2 = {
  name: "alan",
  age: 34
};

let person3 = {
  name: "luana",
  age: 18,
  tel: 99829292
}

console.log(deepEqual(person1, person2));
console.log(deepEqual(person1, person3));
// we can round up a number using Math.ceil


let listToBet = [];

for (let i = 0; i < 6; i++) {
  listToBet.push(Math.ceil(Math.random() * 60));
}

console.log("you can bet in the sequence: ", listToBet);

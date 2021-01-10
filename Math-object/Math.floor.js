// we can round down numbers using Math.floor


let listToBet = [];

for (let i = 0; i < 6; i++) { 
  listToBet.push(Math.floor(Math.random() * 60));
}

console.log("You can bet in the sequence: ", listToBet);

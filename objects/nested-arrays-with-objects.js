// to access the elements in an arrays that contain objects, we can use the same notation that always we use


let ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

console.log("for animal: " + ourPets[0].animalType);
console.log("There are these names: ", ourPets[0].names);
console.log("Pedro want: ", ourPets[0].names[0]);
console.log("\nfor animal: " + ourPets[1].animalType);
console.log("There are these names: ", ourPets[1].names);
console.log("Pedro want: ", ourPets[1].names[2]);
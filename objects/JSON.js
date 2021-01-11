// simple example about JSON on javaSctipt

let weekAssignments = {
  sunday: "work out at 6AM",
  monday: "running",
  tuesday: "washing the dishes", 
  wednesday: "crying",
  thursday: "watching a movie",
  friday: "go to my brother's party",
  saturday: "crying because nobody wants me"
};

let objectConvertedToJSON = JSON.stringify(weekAssignments);

console.log("Original object: ", weekAssignments);
console.log("\nJSON object: ", objectConvertedToJSON);
console.log("\nOriginal object again, converted of JSON: ", JSON.parse(objectConvertedToJSON));

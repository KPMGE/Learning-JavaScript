// we can access properties from objects using dot notation or bracket notation
// When we have labels with more than one word, we must use bracktet notation

let weekAssignments = {
  "How will be my week": "a shit",
  sunday: "work out at 6AM",
  monday: "running",
  tuesday: "washing the dishes", 
  wednesday: "crying",
  thursday: "watching a movie",
  friday: "go to my brother's party",
  saturday: "crying because nobody wants me"
};

console.log("my week will be", weekAssignments["How will be my week"]);
console.log("so, on friday i will", weekAssignments.friday);
  console.log("and then, on saturday", weekAssignments["saturday"]);


// we can use a for in sintax to perform through an object's labels

let weekAssignments = {
  sunday: "work out at 6AM",
  monday: "running",
  tuesday: "washing the dishes", 
  wednesday: "crying",
  thursday: "watching a movie",
  friday: "go to my brother's party",
  saturday: "crying because nobody wants me"
};

console.log("Week assgnments: ");
// displaying all week assignments
for (let weekAssignment in weekAssignments) {
  console.log("On", weekAssignment, "i need: ", weekAssignments[weekAssignment]);
}

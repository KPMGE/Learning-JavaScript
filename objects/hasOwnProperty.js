// we can use hasOwnProperty method to know whether an object has or not a given property

let weekAssignments = {
  sunday: "work out at 6AM",
  monday: "running",
  tuesday: "washing the dishes", 
  wednesday: "crying",
  thursday: "watching a movie",
  friday: "go to my brother's party",
  saturday: "crying because nobody wants me"
};

console.log(weekAssignments.hasOwnProperty("sunday"));
console.log(weekAssignments.hasOwnProperty("foo"));

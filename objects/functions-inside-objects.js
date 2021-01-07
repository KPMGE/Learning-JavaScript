// we can put functions indide objects

let weekAssignments = {
  sunday: "work out at 6AM",
  monday: "run",
  tuesday: "wash the dishes", 
  wednesday: "crying",
  thursday: "watch a movie",
  friday: "go to my brother's party",
  saturday: "crying because anything wants me",
  addNewAssignment(weekDay, assignment){ // now, we have a function inside an Object
    if (weekDay == "friday") {
      this.friday = assignment; // this keyword refer to current object
    }
  }
};

// changing assignment on friday
weekAssignments.addNewAssignment("friday", "buying 2L of whysky");
console.log(weekAssignments.friday);
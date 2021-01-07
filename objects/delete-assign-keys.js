// Example using delete assing and keys functions

let weekAssignments = {
  sunday: "work out at 6AM",
  monday: "run",
  tuesday: "wash the dishes", 
  wednesday: "crying",
  thursday: "watch a movie",
  friday: "go to my brother's party",
  saturday: "crying because anything wants me"
};

let newAssignments = {
  monday: "selling my old car"
};

// original object
console.log("original object:");
console.log(weekAssignments);

// deleting friday and monday
delete weekAssignments.friday;
delete weekAssignments.monday;
console.log("\nfriday and monday deleted:");
console.log(weekAssignments);

// assigning new monday assignment
Object.assign(weekAssignments, newAssignments);
console.log("\nmonday new assingnmente added:");
console.log(weekAssignments);

// current keys from week assignments
console.log("\ncurrent keys:");
console.log(Object.keys(weekAssignments));

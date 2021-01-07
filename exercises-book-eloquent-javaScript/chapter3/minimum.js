// implementation of function Math.min

// arrow declaration
const getMin = (value1, value2) => (value1 < value2) ? value1 : value2;

// explicit declaration
function getMin(value1, value2) 
{
  return (value1 < value2) ? value1 : value2;
}

let minValue = getMin(10, 23);
console.log("The smaller value is: " + minValue);
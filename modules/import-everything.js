// we can import everything from a file by using '* as' sintax

import * as nameObject from "math_functions.js";

// to use functions, we use the object
let roots = nameObject.calculateRootsQuadraticFunction(1, 3, 5);
console.log(roots);
// the const keyword applied to an array or an objecty don't prevent it to be changed
// however, we can use Object.freeze function to do it

let mathParams = {
  pi: Math.PI,
  euler: 2.7
};

Object.freeze(mathParams);

// if we try to replace some value, it won't be replaced
mathParams.pi = 3;
console.log(mathParams.pi);
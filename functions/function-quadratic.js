// program that calculates the roots from a function quadratic

function calculateRoots(a, b, c) {
  let delta = Math.pow(b, 2) - 4 * a * c;
  let roots = {
    x1: 0,
    x2: 0
  };

  if (delta < 0) {
    console.log("There are no real roots");
    return 0;
  } else {
    roots.x1 = -b + Math.sqrt(delta) / (2 * a);
    roots.x2 = -b - Math.sqrt(delta) / (2 * a);
  }
  return roots;
}

console.log(calculateRoots(1, 1, 0)); 
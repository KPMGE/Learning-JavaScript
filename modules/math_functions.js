// module with some math functions

export function calculateRootsQuadraticFunction(a, b, c) {
  let delta = Math.pow(b, 2) - (4 * a * c);

  if (delta < 0) {
    return "There are no real roots";
  } else {
    let roots = {};
    roots.x1 = (-b + Math.sqrt(delta)) / 2 * a;
    roots.x2 = (-b - Math.sqrt(delta)) / 2 * a;
    return roots;
  }
}
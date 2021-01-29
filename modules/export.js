// we can create a module with some related functions, and use them in another files, to do that, we can use 'export' keyword

export function sum(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// or use only one export
function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

export { sum, subtract };
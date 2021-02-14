// some math classes
// author: Kevin Carvalho de Jesus


// class to a point
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getPoint() {
    return { x: this.x, y: this.y };
  }
  setPoint(x, y) {
    this.x = x;
    this.y = y;
  }
}

// class to a circle, that extends point
class Circle extends Point {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }
  getCircle() {
    return { x: this.x, y:this.y, radius: this.radius };
  }
  setCircle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}

// function to get distance between two points
function getDistancePoints(p1, p2) {
  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;
  let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  return distance;
}

// function to get area of a given circle
function getAreaCircle(circle) {
  return Math.PI * Math.pow(circle.radius, 2);
}

// creating two points and one circle
point1 = new Point(0, 0);
point2 = new Point(2, 2);
circle = new Circle(0, 0, 2);

// displaying initial results
console.log("point object: ", point1.getPoint());
console.log("circle object: ", circle.getCircle());
console.log("the distance of the points is: ", getDistancePoints(point1, point2));
console.log("the area of circle is: ", getAreaCircle(circle));

// setting new values
console.log("\nsetting new points and circles...\n");
point1.setPoint(3, 5);
point2.setPoint(2, 9);
circle.setCircle(2, 5, 7);

// displaying updated results
console.log("point object: ", point1.getPoint());
console.log("circle object: ", circle.getCircle());
console.log("the distance of the points is: ", getDistancePoints(point1, point2));
console.log("the area of circle is: ", getAreaCircle(circle));
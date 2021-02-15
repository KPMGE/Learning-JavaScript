// math classes with old prototype notation


// construcor to a point object
function Point(x, y) {
  this.x = x;
  this.y = y;
}

// adding methods to point object by prototype
Point.prototype = {
  getPoint() {
    return {x: this.x, y: this.y};
  },
  setPoint(x, y) {
    this.x = x;
    this.y = y;
  }
}

// creating circle object
function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  // adding methods to the circle object
  this.getCircle = function() {
    return {x: this.x, y: this.y, radius: this.radius};
  },
  this.setCircle  = function(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}

// using inheritance
Circle.prototype = Object.create(Point.prototype);

// function that returns distance between points
function getDistancePoints(point1, point2) {
  let dx = point2.x - point1.x;
  let dy = point2.y - point1.y;
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}

// function that returns area of a circle
function getAreaCircle(circle) {
  return Math.PI * Math.pow(circle.radius, 2);
}

// creating two points and one circle
point1 = new Point(1, 0);
point2 = new Point(2, 8);
circle = new Circle(2, 4, 3);

// displaying results
console.log("point1 = ", point1.getPoint(), "\npoint2 = ", point2.getPoint());
console.log("circle = ", circle.getCircle());
console.log("the distance between points is: ", getDistancePoints(point1, point2));
console.log("the area of circle is: ", getAreaCircle(circle));

// setting new values
console.log("\nSetting new values...\n");
point1.setPoint(3, 7);
point2.setPoint(5, 19);
circle.setCircle(1, 3, 2);

// displaying outcome
console.log("point1 = ", point1.getPoint(), "\npoint2 = ", point2.getPoint());
console.log("circle = ", circle.getCircle());
console.log("the distance between points is: ", getDistancePoints(point1, point2));
console.log("the area of circle is: ", getAreaCircle(circle));

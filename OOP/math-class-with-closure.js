// math classes using clusure

// creating class for a point
class Point {
  constructor() {
    let x, y;
    this.setPoint = (x, y) => {
      this.x = x;
      this.y = y;
    }
    this.getPoint = () => {
      return { x: this.x, y: this.y };
    }
  }
}

// creating class for a circle, that extends point
class Circle extends Point {
  constructor(x, y) {
    let radius;
    super(x, y);
    this.setCircle = (x, y, radius) => {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
    this.getCircle = () => {
      return { x: this.x, y: this.y, radius: this.radius };
    }
  }
}

// function that calcutates the distance between points
function calculateDistancePoints(p1, p2) {
  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}

// function that calcutates the area of circle
function calculateAreaCircle(circle) {
  return Math.PI * Math.pow(circle.radius, 2);
}


// creating instances
point1 = new Point();
point2 = new Point();
circle = new Circle();

// setting values by using methods
point1.setPoint(1, 4);
point2.setPoint(2, 5);
circle.setCircle(0, 0, 3);

// displaying outcome
console.log("point1 = ", point1.getPoint());
console.log("point2 = ", point2.getPoint());
console.log("circle = ", circle.getCircle());
console.log("the distance between points is: ", calculateDistancePoints(point1, point2));
console.log("the area of circle is: ", calculateAreaCircle(circle));
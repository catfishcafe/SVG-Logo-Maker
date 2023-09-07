class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor
  }
}

class Circle extends Shape {
  constructor(shapeColor) {
    super (shapeColor);
    this.svg = `<circle cx="150" cy="100" r="100" fill="${shapeColor}" />`
  }   
}

class Square extends Shape {
  constructor(shapeColor) {
    super (shapeColor);
    this.svg = `<rect x="50" width="200" height="200" fill="${shapeColor}" />`
  }   
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super (shapeColor);
    this.svg = `<polygon points="281, 216 50, 216 166, 16
    " x="150" y="100" fill="${shapeColor}" />`
  }   
}

module.exports = { Circle, Square, Triangle }
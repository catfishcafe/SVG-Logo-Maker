class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor
  }
}

class Circle extends Shape {
  constructor(shapeColor) {
    super (shapeColor);
    this.svg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="${shapeColor}" /></svg>`
  }   
}

class Square extends Shape {
  constructor(shapeColor) {
    super (shapeColor);
    this.svg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="${shapeColor}" /></svg>`
  }   
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super (shapeColor);
    this.svg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="281, 216 50, 216 166, 16
    " fill="${shapeColor}" /></svg>`
  }   
}

module.exports = { Circle, Square, Triangle }
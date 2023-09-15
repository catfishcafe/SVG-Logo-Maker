class Shape {
  setColor(shapeColor){
    this.shapeColor = shapeColor
  }
  render() {
    return '';
  }
}

// BELOW: THIS WORKS WITH WHAT I CURRENTLY HAVE
// class Shape {
//   constructor(shapeColor) {
//     this.shapeColor = shapeColor
//   }
// }

class Circle extends Shape {
  render(){
    return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`
  }
}

class Square extends Shape {
  constructor(shapeColor) {
    super (shapeColor);
    this.svg = `<rect x="50" width="200" height="200" fill="${this.shapeColor}" />`
  }   
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super (shapeColor);
    this.svg = `<polygon points="35, 205 146, 0 266, 200
    " x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="${this.shapeColor}" />`
  }   
}

module.exports = { Circle, Square, Triangle }
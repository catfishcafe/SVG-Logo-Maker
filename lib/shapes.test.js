const { Circle, Square, Triangle } = require('./shapes')

describe('Shapes', () => {
  describe('Circle', () => {
    it('should return a string for the corresponding SVG file with the given shape color of the circle', () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />');
    });
  });
});

// describe('Shapes', () => {
//   describe('Circle', () => {
//     it('should work the old way that I wrote it', () => {
//       const shape = new Circle('blue');
//       expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />');
//     });
//   });
// });


// class Circle extends Shape {
//   constructor(shapeColor) {
//     super (shapeColor);
//     this.svg = `<circle cx="150" cy="100" r="100" fill="${shapeColor}" />`
//   }   
// }



// Each shape class should be tested for a render() method that returns a string 

// The following example test should pass:

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


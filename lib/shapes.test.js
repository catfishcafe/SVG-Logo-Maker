const { Circle, Square, Triangle } = require('./shapes')

describe('Shapes', () => {
  describe('Circle', () => {
    it('should return a string for the corresponding SVG file with the given shape color of the circle', () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />');
    });
  });
  describe('Square', () => {
    it('should return a string for the corresponding SVG file with the given shape color of the square', () => {
      const shape = new Square();
      shape.setColor("red");
      expect(shape.render()).toEqual('<rect x="50" width="200" height="200" fill="red" />');
    });
  });
  describe('Triangle', () => {
    it('should return a string for the corresponding SVG file with the given shape color of the triangle', () => {
      const shape = new Triangle();
      shape.setColor("yellow");
      expect(shape.render()).toEqual(`<polygon points="35, 205 146, 0 266, 200" x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="yellow" />`);
    });
  });
});
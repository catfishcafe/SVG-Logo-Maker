const { Circle, Square, Triangle } = require('./shapes')


function createDocument(logoString) {
  try {
    const logo = JSON.parse(logoString);
    const openSvg = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">'
    const closeSvg = '</svg>'
    const text = `<style>text{font: 150px sans-serif;fill: ${logo.textColor};}</style><text x="150" y="100" dominant-baseline="middle" text-anchor="middle">${logo.logoText}</text>`

    const circle = new Circle(`${logo.shapeColor}`);
    const square = new Square(`${logo.shapeColor}`);
    const triangle = new Triangle(`${logo.shapeColor}`);
    
    let selectedShape;
    
    if(logo.shape === 'circle') {
      selectedShape = circle
    } else if(logo.shape === 'square') {
      selectedShape = square
    } else {
      selectedShape = triangle
    };

    const logoFinal = openSvg + selectedShape.svg + text + closeSvg;

    return logoFinal;

  } catch(err) {
    console.log(`An error has occurred: ${err}.`)
  }
}

module.exports = createDocument;
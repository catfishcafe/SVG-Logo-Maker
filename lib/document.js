const { Circle, Square, Triangle } = require('./shapes')


function createDocument(logoString) {
  try {
    const logo = JSON.parse(logoString);
    console.log(`This is logo.shape inside of document.js: ${logo.shape}`)
    const circle = new Circle(`${logo.shapeColor}`);
    const square = new Square(`${logo.shapeColor}`);
    const triangle = new Triangle(`${logo.shapeColor}`);
    return`${circle.svg}`
  } catch(err) {
    console.log(`An error has occurred: ${err}.`)
  }
}

module.exports = createDocument;

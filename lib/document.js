const { Circle, Square, Triangle } = require('./shapes')


function createDocument(logoString) {
  try {
    const logo = JSON.parse(logoString);
    console.log(`This is logo.shape inside of document.js: ${logo.shape}`)
    const circle = new Circle(`${logo.shapeColor}`);
    const square = new Square(`${logo.shapeColor}`);
    const triangle = new Triangle(`${logo.shapeColor}`);
    let selectedShape
    if(logo.shape === 'circle') {
      selectedShape = circle
    } else if(logo.shape === 'square') {
      selectedShape = square
    } else {
      selectedShape = triangle
    };
    const openSvg = '<svg>'
    const closeSVG = '</svg'
    const words = `
    <style>
      text {
        font: 150px sans-serif;
        fill: black;
      }
    </style>
    <text x="150" y="100" dominant-baseline="middle" text-anchor="middle">cat</text>
  </svg>`
    const logoFinal = selectedShape.svg + words;
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log(logoFinal);
    return logoFinal;
  } catch(err) {
    console.log(`An error has occurred: ${err}.`)
  }
}

module.exports = createDocument;
const { Circle, Square, Triangle } = require('./shapes')

function createDocument(logoString) {
  try {
    const logo = JSON.parse(logoString);
    console.log (logo.shapeColor)
    const openSvg = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">'
    const closeSvg = '</svg>'
    const text = `<style>text{font: 100px sans-serif;fill: ${logo.textColor};}</style><text x="150" y="100" dominant-baseline="middle" text-anchor="middle">${logo.logoText}</text>`
    
    let selectedShape;
    
    if(logo.shape === 'circle') {
      selectedShape = new Circle();
    } else if(logo.shape === 'square') {
      selectedShape = new Square();
    } else {
      selectedShape = new Triangle();
    }

    selectedShape.setColor(logo.shapeColor);

    let solidBackground

    if(logo.backgroundColor === ''){
      solidBackground = ''
      console.log('no background color entered')
    } else {
      solidBackground = `<rect width="300" height="200" fill="${logo.backgroundColor}" />`
    };

    const logoFinal = openSvg + solidBackground + selectedShape.render() + text + closeSvg;

    console.log(typeof logo.backgroundColor)
    console.log('>>>>>>>>>>>>>>>>>>>>>>')
    console.log(logo.backgroundColor)
    console.log(logoFinal);

    return logoFinal;

  } catch(err) {
    console.log(`An error has occurred: ${err}.`)
  }
}

module.exports = createDocument;
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
    const words = `
    <style>
      .small {
        font: italic 13px sans-serif;
      }
      .heavy {
        font: bold 30px sans-serif;
      }
      .Rrrrr {
        font: italic 40px serif;
        fill: red;
      }
    </style>
  
    <text x="20" y="35" class="small">My</text>
    <text x="40" y="35" class="heavy">cat</text>
    <text x="55" y="55" class="small">is</text>
    <text x="65" y="55" class="Rrrrr">Grumpy!</text>
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

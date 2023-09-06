const { Circle, Square, Triangle } = require('./shapes')


function createDocument(logoString) {
  try {
    //this was from the mini project, probably don't need it...

    // const taskListItems = tasks.map(
    //   (t) => new TaskListItem([t.text], t.priority)
    // );
    // const taskList = new TaskList(taskListItems).render();

    //testing that the logo object is passing...
    const logo = JSON.parse(logoString);
    console.log(logo);
    console.log(
    `this is logo.shapeColor: ${logo.shapeColor}`);
    const circle = new Circle(`${logo.shapeColor}`);
    const square = new Square(`${logo.shapeColor}`);
    const triangle = new Triangle(`${logo.shapeColor}`);

    console.log(`this is circle.svg, logged from document.js: ${circle.svg}`)

    return`${circle.svg}`
    
  } catch(err) {
    console.log(`An error has occurred: ${err}.`)
  }

  //note: "VERSION" AND THAT XMLNS TAG ARE **MANDATORY**, it DOES NOT WORK without them. I STILL don't know what xmlns is but the web (and many failed renderings) says I need it >:(
}

module.exports = createDocument;

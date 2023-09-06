const { Circle, Square, Triangle } = require('./shapes')
const circle = new Circle;
const square = new Square;
const triangle = new Triangle;

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
    console.log(
      `Here is circle.svg: ${circle.svg}`
    );

    return`<svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="${logo.shapeColor}" /></svg>`
    
  } catch(err) {
    console.log(`An error has occurred: ${err}.`)
  }

  //note: "VERSION" AND THAT XMLNS TAG ARE **MANDATORY**, it DOES NOT WORK without them. I STILL don't know what xmlns is but the web (and many failed renderings) says I need it >:(
}

module.exports = createDocument;

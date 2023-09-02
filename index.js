//this is mostly copy/pasted from my previous challenge (the readme generator)

const inquirer = require('inquirer');
const generateLogo = require('./utils/generateLogo')

// GIVEN a command-line application that accepts user input

const questions = [
  {
    type: 'input',
    message: 'Enter up to 3 characters for you logo:',
    name: 'logo text',
  },
  // WHEN I am prompted for text
  // THEN I can enter up to three characters
  // WHEN I am prompted for the text color
  // THEN I can enter a color keyword (OR a hexadecimal number)
  {
    type: 'list',
    message: 'Choose a shape:',
    name: 'shape',
    choices: ['circle', 'triangle', 'square']
  },
  // WHEN I am prompted for a shape
  // THEN I am presented with a list of shapes to choose from: circle, triangle, and square
  // WHEN I am prompted for the shape's color
  // THEN I can enter a color keyword (OR a hexadecimal number)
];

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`

//function writeToFile(data){try{
//(in here the data may be sent to another function to actually make the file, we'll see)
// AND the output text "Generated logo.svg" is printed in the command line
//console.log("Generated logo.svg")
//}catch (err) console.log(err);}

// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

//Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) =>
      console.log(response)
    );
}

init();

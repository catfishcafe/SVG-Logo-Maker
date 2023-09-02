//⚠️inquirer is for prompting user via terminal what kind of logo they want
const inquirer = require('inquirer');
//⚠️writeFile will write in html that takes in the user input from inquirer
const { writeFile } = require('fs/promises')
const setLogoProperties = require('./logo.js');
const createDocument = require('./document.js')

// ✅GIVEN a command-line application that accepts user input

//⚠️ using class structure like in the mini project
class CLI {
  constructor() {
    // ⚠️ logoText and shape are empty strings that will take values from inquirer
    this.logoText = '';
    this.shape = '';
    // ⚠️ questions array that will be called when inquirer is run
    this.questions = [
      {
        type: 'input',
        message: 'Enter up to 3 characters for you logo:',
        name: 'logoText',
      },
      // ✅WHEN I am prompted for text
      // ✅THEN I can enter up to three characters
      // ✅WHEN I am prompted for the text color
      // ✅THEN I can enter a color keyword (OR a hexadecimal number)
      {
        type: 'list',
        message: 'Choose a shape:',
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
      },
      // ✅WHEN I am prompted for a shape
      // ✅THEN I am presented with a list of shapes to choose from: circle, triangle, and square
      // ✅WHEN I am prompted for the shape's color
      // ✅THEN I can enter a color keyword (OR a hexadecimal number)
    ]    
  }
  // ⚠️ typical inquirer stuff wrapped in a function to run it. 
  run() {
    return inquirer
      .prompt(
          // ⚠️ the questions array from earlier
        this.questions
      )
      // ⚠️ the .then takes in SPECIFICALLY values from the answers to the inquirer questions
      .then(({logoText, shape}) => {
        // ⚠️ setting those previous variables to the values passed from inquirer
        this.logoText = logoText;
        this.shape = shape;
        // ⚠️calls setLogoProperties from logo.js, creating the new logo object with the user-provided properties
        const logo = setLogoProperties(logoText, shape);
        // ⚠️returns the logo object to pass to next part...
        return logo;
      })
      .then((logo) => {
        console.log('here is the logo object>>>>>>>>>>>>>>');
        console.log(JSON.stringify(logo));
        // ⚠️Here I will call a function to render the logo. which I will then have to write. unless it's done with writeFile?
        return writeFile(
          'logo.svg', 
          createDocument(logo)
          // ✅WHEN I have entered input for all the prompts
          // ✅THEN an SVG file is created named `logo.svg`
          // ✅AND the output text "Generated logo.svg" is printed in the command line
          //console.log("Generated logo.svg")
        );
      }
    )
  }
};

// ✅WHEN I open the `logo.svg` file in a browser
// ✅THEN I am shown a 300x200 pixel image that matches the criteria I entered

module.exports = CLI;
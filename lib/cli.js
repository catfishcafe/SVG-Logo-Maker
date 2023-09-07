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
        message: 'Enter up to 3 CHARACTERS for you logo:',
        name: 'logoText',
      },
      // ⚠️ will need to limit the number of characters that can be entered...
      // {
      //   type: 'input',
      //   message: 'Enter a TEXT COLOR for your logo (use color keywords or a hexadecimal number)',
      //   name: 'textColor',
      // },
      {
        type: 'list',
        message: 'Choose a shape:',
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
      },
      {
        type: 'input',
        message: "Enter a SHAPE COLOR (use color keywords or a hexadecimal number)",
        name: 'shapeColor'
      },
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
      .then(({logoText, shape, shapeColor}) => {
        this.logoText = logoText;
        this.shape = shape;
        this.shapeColor = shapeColor;
        const logo = setLogoProperties(logoText, shape, shapeColor);
        const logoString = JSON.stringify(logo);
        return logoString
      })
      .then((data) => {
        // console.log("Generated logo.svg");
        return writeFile('logo.svg', createDocument(`${data}`));
      }
    )
  }
};

// ✅WHEN I open the `logo.svg` file in a browser
// ✅THEN I am shown a 300x200 pixel image that matches the criteria I entered

module.exports = CLI;
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises')
const setLogoProperties = require('./logo.js');
const createDocument = require('./document.js')

class CLI {
  constructor() {
    // logoText and shape are empty strings that will receive values from inquirer
    this.logoText = '';
    this.shape = '';
    
    // questions array that will be called when inquirer is run
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
  
  //Function runs Inquirer to ask user questions via console, then takes uswer answers and adds them as properties to an object that can be passed to other parts of program
  run() {
    return inquirer
      .prompt(
        this.questions
      )
      .then(({logoText, shape, shapeColor}) => {
        this.logoText = logoText;
        this.shape = shape;
        this.shapeColor = shapeColor;
        const logo = setLogoProperties(logoText, shape, shapeColor);
        const logoString = JSON.stringify(logo);
        return logoString;
      })
      .then((data) => {
        console.log("Generated logo.svg");
        return writeFile('logo.svg', createDocument(`${data}`));
      }
    )
  }
};

module.exports = CLI;
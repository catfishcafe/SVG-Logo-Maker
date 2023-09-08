const inquirer = require('inquirer');
const { writeFile } = require('fs/promises')
const setLogoProperties = require('./logo.js');
const createDocument = require('./document.js')

class Inquirer {
  constructor() {
    // logoText and shape are empty strings that will receive values from inquirer
    this.logoText = '';
    this.textColor = '';
    this.shape = '';
    
    // questions array that will be called when inquirer is run
    this.questions = [
      {
        type: 'input',
        message: 'Enter up to 3 CHARACTERS for you logo:',
        name: 'logoText',
      },
      // ⚠️ will need to limit the number of characters that can be entered...
      {
        type: 'input',
        message: 'Enter a TEXT COLOR for your logo (use color keywords or a hexadecimal number)',
        name: 'textColor',
      },
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
      .then(({logoText, textColor, shape, shapeColor}) => {
        if(logoText.length > 3){
          return console.log(`  
Error: More than 3 characters were entered; please try again with three or fewer characters.
    `)
        } else {
          this.logoText = logoText;
          this.textColor = textColor;
          this.shape = shape;
          this.shapeColor = shapeColor;
          const logo = setLogoProperties(logoText, textColor, shape, shapeColor);
          const logoString = JSON.stringify(logo);
          console.log(`
Generated logo.svg`);
          return logoString;
        }
      })
      .then((data) => {
        return writeFile('logo.svg', createDocument(`${data}`));
      }
    )
  }
};

module.exports = Inquirer;
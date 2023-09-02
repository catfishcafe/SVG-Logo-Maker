//⚠️inquirer is for prompting user via terminal what kind of logo they want
const inquirer = require('inquirer');
//⚠️writeFile will write in html that takes in the user input from inquirer
// const { writeFile } = require('fs/promises')
const setLogoProperties = require('./logo.js');

// ✅GIVEN a command-line application that accepts user input

//⚠️ using class structure like in the mini project
class CLI {
  constructor() {
    // ⚠️ The logo will take in up to 3 characters, presumably in a string
    this.logoText = '';
    this.shape = '';
    // ⚠️ just for fun I'm seeing if I can keep the questions array separate so that calling inquirer reads nicer...
  //   this.questions = [
      
  }
  // ⚠️ typical inquirer stuff wrapped in a function to run it. I moved the questions out so that it reads "run return inquirer .prompt questions" which I really liked from last time, but we'll see if that works...
  
  run() {
    return inquirer
      .prompt([
        // questions
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
      ])
      .then(({logoText, shape}) => {
        this.logoText = logoText;
        this.shape = shape;
        console.log(`here is the logo text: ${logoText}`);
        setLogoProperties(logoText, shape);
      }

      //end of then()
      )
      
  //end of constructor()
  }

//end of Class
};



// ✅WHEN I have entered input for all the prompts
// ✅THEN an SVG file is created named `logo.svg`


// ✅AND the output text "Generated logo.svg" is printed in the command line
//console.log("Generated logo.svg")


// ✅WHEN I open the `logo.svg` file in a browser
// ✅THEN I am shown a 300x200 pixel image that matches the criteria I entered

module.exports = CLI;
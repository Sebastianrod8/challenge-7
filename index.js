// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const readmef = require ('./generateMarkdown');
const { default: Choices } = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?', 
    },
    {
      type: 'input',
      name: 'Github',
      message: 'What is your Github Username?',
    },
    {
      type: 'input',
      name: 'project',
      message: 'could you please provide details of your project?', 
    },
    {
      type: 'checkbox',
      message: 'What license should your project have?',
      name: 'license',
      choices: ['Apache', 'GNU', 'MIT', 'IBM', 'Boost', 'Mozilla'],
    },
    {
      name: 'userinput',
      type: 'input',
      message: 'What the user needs to know about the repo?',
    },
    
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
  function disallowBlanksValidator(value) {
    if (!value || value.trim() === '') {
      return 'Value is required';
    }
  }
   
function minLengthValidator(value, minLength) {
    if (value.length < 0) {
      return `Value must be at least ${5} characters`;
    }
  }
  async function askQuestions () {
    let answers = {}
    for (const question of questions) {
      const answer = await inquirer.prompt([question])
      answers = { ...answers, ...answer }
    }
    return answers
  }
  
  function validate(value) {
    const errors = [];
    const disallowBlanksError = disallowBlanksValidator(value);
    if (disallowBlanksError) {
      errors.push(disallowBlanksError);
    }
    const minLengthError = minLengthValidator(value, 5);
    if (minLengthError) {
      errors.push(minLengthError);
    }
    return errors;
  }
  
//const questions = [];

function createQuestions(license) {
  const licenses = [...license, 'none'];
  questions.push(...licenses); 
}

  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    inquirer.prompt(questions).then(answers => 
        {const content = generateREADME(answers); 
        writeToFile('README.md', content); 
      });
}

// TODO: Create a function to initialize app
async function init() {('please answer the questions to generate a Readme file.')

}

// Function call to initialize app
init();

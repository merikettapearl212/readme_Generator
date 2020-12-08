// Dependancies and variables
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadme = require("./utils/generateReadme")

const writeFileAsync = util.promisify(fs.writeFile);


//Prompts for user to create README.md file
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Describe the installation process if any:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is this project usage for?',
    },
    {
      type: 'input',
      name: 'license',
      message: '"Chose the appropriate license for this project:',
      choices: [
        
    ]
    },
    {
      type: 'input',
      name: 'username',
      message: 'Please enter your GitHub username:',
    },

    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email:',
    },

  ]);
};

const init = async () => {
  console.log('hi');
  try {
    const answers = await promptUser();

    const readMe = generateReadme(answers);

    await writeFileAsync('README.md', readMe);

    console.log('Successfully wrote README.md');
  } catch (err) {
    console.log(err);
  }
};

init();

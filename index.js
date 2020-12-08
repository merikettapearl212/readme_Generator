// Dependancies and variables
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('utils');
const generateReadme = require("./utils/generateReadme")

const writeFileAsync = utils.promisify(fs.writeFile);


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
      type: 'list',
      name: 'license',
      message: '"Chose the appropriate license for this project:',
      choices: [
        "Apache",
        "GNU",
        "MIT",
        "Perl",
        "Zlib"
    ]
    },

    {
      type: "input",
      name: "contributions",
      message: "Who are the contributors of this project?"
    },

    {
      type: "input",
      name: "tests",
      message: "Is there a test included?"
    },

    {
      type: "input",
      name: "questions",
      message: "If I have any questions? "
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

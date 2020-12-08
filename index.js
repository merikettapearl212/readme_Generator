

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

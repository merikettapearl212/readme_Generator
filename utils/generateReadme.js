// function to generate markdown for README
function generateReadme(answers) {
  return `
  # ${answers.projectTitle}

  ## Description
   ${answers.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ![badge](https://img.shields.io/badge/license- ${answers.license} -yellowgreen)<br />
  <br />This application is covered by the${answers.license}license.<br />

  ## Test instructions
  ${answers.tests}

  ## Contributions
  ${answers.contributions}

  ## Questions
✋ ${answers.questions}<br />
  <br />
  Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
  <br />
  Email me with any questions: ${answers.email}<br /><br />
`;
}

module.exports = generateReadme;

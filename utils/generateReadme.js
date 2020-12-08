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
  ![badge](https://img.shields.io/badge/license-${answers.license}-yellowgreen)

  ## Test instructions
  ${answers.tests}

  ## Contributions
  ${answers.contributions}

  ## Questions
  ${answers.questions}
  <br />
  Find me on GitHub: [${answers.username}](https://github.com/${answers.username})
  <br />
  Email me with any questions: ${answers.email}<br />

`;
}

module.exports = generateReadme;

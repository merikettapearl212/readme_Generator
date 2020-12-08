// function to generate markdown for README
function generateReadme(answers) {
  return `
  # ${answers.projectTitle}

  ## Description
  # ${answers.description}

  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Tests](#tests)
  -[Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Tests
  ${answers.tests}

  ## Contact
  Find me on Github:
  ${answers.username}
  Email me:
  ${answers.email}

`;
}

module.exports = generateReadme;

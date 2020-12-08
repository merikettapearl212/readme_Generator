// function to generate markdown for README
function generateReadme(answers) {
  return `
  
  ## Description
  # ${answers.description}

`;
}

module.exports = generateReadme;

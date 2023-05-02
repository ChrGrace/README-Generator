// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {
//if (!license) return ""
//else 
//}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contribute](#contribute)
  [Tests](#tests)
  [github](#github)
  [Email](#email)


## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## How to contribute
${data.contribute}
## Tests
${data.tests}
## Github
${data.github}
## Email
${data.email}



`;
}



module.exports = generateMarkdown;

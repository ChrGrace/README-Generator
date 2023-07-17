// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg">`
  }
  else {
    return ""
  }
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#license)`

  } else {
    return "";
  }
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    
    This project is licensed under ${license} `
  } else { return ""; }
}
//TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}


  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contribute](#contribute)
  * [Tests](#tests)
  * [github](#github)
  * [Email](#email)


## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## How to contribute
${data.contribute}
## Tests
${data.tests}
## Questions
If you have any questions about this project, you can contact me through my email, [${data.email}](mailto:${data.email}). If you like to see other projects I've worked on checkout my Github:[${data.github}]("https://github.com/${data.github}")

`;
}

module.exports = generateMarkdown;








//![${data.license}][![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

//function renderLicenseLink(license) {
//  if (license === "zero") return "";
//}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {
//  if (license === "zero") return "";
//}

//const lBadges = {
  //"MIT License": {
    //"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  //}
//}
//http://www.apache.org/licenses/LICENSE-2.0
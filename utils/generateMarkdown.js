// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'APACHE 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license == 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if (license == 'BSD 3') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    var licenseURL = '';
    if (license == 'APACHE 2.0') {
      licenseURL = 'https://www.apache.org/licenses/LICENSE-2.0';
    }
    else if (license == 'GPL 3.0') {
      licenseURL = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    }
    else if (license == 'BSD 3') {
      licenseURL = 'https://opensource.org/licenses/BSD-3-Clause';
    }
    return `## License <br/>
    Link to license documentation: ${licenseURL}`;
  }
  else {
    return '';
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
   ## Description
  
   ${data.description}
  
   ## Table of Contents

   * [Install](#install)
   
   * [Directions](#directions)
   
   * [Contributions](#contributions)
   
   ${renderLicenseLink(data.license)}

   * [Tests](#tests)

   * [Questions](#questions)

   ## Install

   To install the necessary node dependencies use the command : ${data.install}
  
   ## Directions 

   ${data.needToKnow}
  
   ## Contributions

   To make contributions please complete the following directions: ${data.contributions}
  
   ${renderLicenseSection(data.license)}

   ## Tests 

   To initiate tests use the following line of code: ${data.tests}

   ## Questions

   If you have questions please reach me by email @ ${data.email} or via Github @ [${data.github}](https://github.com/${data.github})`;
}

module.exports = generateMarkdown;

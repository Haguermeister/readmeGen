// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

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
  
   // Liscenses / renderLiscenseLink

   * [Tests](#tests)

   * [Questions](#questions)

   ## Install

   To install the necessary node dependencies use the command : ${data.install}
  
   ## Directions 

   ${data.needToKnow}
  
   //renderLiscenseSection

   ## Contributions

   To make contributions please complete the following directions: ${data.contributions}
   
   ## Tests 

   To initiate tests using Jest use the following line of code ${data.tests}

   ## Questions

   If you have questions please reach me by email @ ${data.email} or via Github @ ${data.github}`;
}

module.exports = generateMarkdown;

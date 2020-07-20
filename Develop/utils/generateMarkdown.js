// 
// function to generate markdown for README
function generateMarkdown(data) {
 return `# ${data.title} 
  
 [![License](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

  ## Description 

  ${data.description}.
  
  
  ## Table of Contents 
  
  If your README is very long, add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#Questions)
  
  ## Installation
  
  ${data.installation}
  
  
  ## Usage 
  
  ${data.usage} 
  
  
  ## License
  
  Licensed under the ${data.license} license.
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.test}

  ## Questions

  If you have any further questions contact me on github or my email:

  [${data.questions1}](https://github.com/${data.questions1})

  [${data.questions2}](mailto:${data.questions2})
`;
}

module.exports = generateMarkdown;



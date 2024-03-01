// Function that generates markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions about the project, please contact [${data.author}](https://github.com/${data.author}) at ${data.email}.
`;
}

// Function that generates license badge and link
function renderLicenseBadge(license) {
    let badgeURL = '';
    switch (license) {
        case 'MIT':
            badgeURL = 'https://img.shields.io/badge/MIT-yellow';
            break;
        case 'GNU GPLv3':
            badgeURL = 'https://img.shields.io/badge/GPLv3-blue';
            break;
        case 'Apache 2.0':
            badgeURL = 'https://img.shields.io/badge/Apache_2.0-blue';
            break;
        case 'ISC':
            badgeURL = 'https://img.shields.io/badge/ISC-blue';
            break;
        default:
            // No badge for None or other licenses
            return '';
    }
    // Function to generate license link
    function renderLicenseLink(license) {
        
        return '';
    }
    return `[![License Badge](${badgeURL})](${renderLicenseLink(license)})`;
}

module.exports = generateMarkdown;

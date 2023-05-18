const fs = require('fs')
// TODO: Create a function that returns a license badge based on which license is passed in
const license = './license/'
// If there is no license, return an empty string

function renderLicenseBadge(license) {}
if (license === 'None' || license === undefined || license === null || license === '') {
  return ''}
// TODO: Create a function that returns the license link
//const licenses = getlicense(license)
//const licenseLinks = licenseData.licenseLink
// If there is no license, return an empty string
//function renderLicenseLink(license) {}
//if (licenseLinks === undefined || licenseLink === null || licenseLinks === '') {
  //return ''
//}

// TODO: Create a function that returns the license section of README
//function renderLicenseSection(license) {}

// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contributors } = data;

  return `
# ${title}

${description.trim()}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)

## Installation

${installation}

## Usage

${usage}

## License

This project is licensed under the ${license} license.

## Contributors

${contributors}
`;
}

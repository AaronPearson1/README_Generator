const { renderLicenseBadge, renderLicenseSection } = require("./licenses")

// Generate markdown for README
const generateMarkdown = (data) => {

  // string for building table of contents
  let tableOfContents = "## Table of Contents\n\n";

  data.gmail
  let questionsAdded = false;
  // loop for building table of contents string
  for (let answer of Object.keys(data)) {
    if (data[answer] && data[answer] !== "None" && data[answer] !== data.title && data[answer] !== data.description) {
      if (answer === "email" || answer === "github") {
        if (!questionsAdded) {
          tableOfContents += `- [Questions](#Questions)\n`;
          questionsAdded = true;
        }
      } else {
        tableOfContents += `- [${answer}](#${answer})\n`;
      }
    }
  }

  // string for building README file contents
  let readmeFile = '';

  // Series of if statments to add each section to the README
  if (data.title) {
    readmeFile += `# ${data.title}\n\n`;
  }

  if (data.license !== "None") {
    readmeFile += `${renderLicenseBadge(data.license)}\n\n`;
  }

  if (data.description) {
    readmeFile += `## Description\n\n${data.description}\n\n`;
  }

  if (tableOfContents !== "## Table of Contents\n\n") {
    readmeFile += `${tableOfContents}\n`;
  }

  if (data.installation) {
    readmeFile += `## Installation\n\n${data.installation}\n\n`;
  }

  if (data.usage) {
    readmeFile += `## Usage\n\n${data.usage}\n\n`;
  }

  if (data.contributing) {
    readmeFile += `## Contributing\n\n${data.contributing}\n\n`;
  }

  if (data.test) {
    readmeFile += `## Test\n\n${data.test}\n\n`;
  }

  if (data.email || data.github) {
    readmeFile += `## Questions\n\n`;
  }

  if (data.email) {
    readmeFile += `Feel free to email me at <${data.email}> if you have any further questions.\n\n`;
  }

  if (data.github) {
    readmeFile += `github: [${data.github}](https://github.com/${data.github})\n\n`;
  }

  //run render license function
  readmeFile += renderLicenseSection(data.license)

  return readmeFile;
};

module.exports = { generateMarkdown }
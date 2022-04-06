let licenses = {
    MITLicense: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
}

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = function (license) {

    let licenseKey = license.replace(/\s/g, "").split(".").join("").split("\"").join("").split("-").join("");
  
    let chosenLicense = licenses[licenseKey];
  
    return chosenLicense;
  }
  
  // Returns the license link
  // If there is no license, return an empty string
  renderLicenseLink = function (license) {
    
    if (license !== "None") {
      let licenseKey = license.replace(/\s/g, "").split(".").join("").split("\"").join("").split("-").join("");
  
      let chosenLicense = licenses[licenseKey].split("]")[2].split("(")[1].split(")")[0];
  
      return chosenLicense;
    }
  }
  
  // Returns the license section of README
  // If there is no license, return an empty string
  renderLicenseSection = function (license) {
  
    if(license !== "None") {
      let licenseSection = `## License
      
  This application is covered under the ${license}. for more information, visit: ${renderLicenseLink(license)}`;
  
      return licenseSection;
      } else {
        return "";
      }
  }

  module.exports = {licenses, renderLicenseBadge, renderLicenseSection}
// Include packages needed for this application
const fileSystem = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const { generateMarkdown } = require("./utils/generateMarkdown")

const writeFileAsync = util.promisify(fileSystem.writeFile);

// Create questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter project title:",
            name: "title",
        },
        {
            type: "input",
            message: "Enter a description:",
            name: "description",
        },
        {
            type: "input",
            message: "Enter installation instructions:",
            name: "installation",
        },
        {
            type: "input",
            message: "Enter usage information:",
            name: "usage",
        },
        {
            input: "input",
            message: "Enter contribution guidelines:",
            name: "contributing",
        },
        {
            input: "input",
            message: "Enter test instructions:",
            name: "test",
        },
        {
            input: "input",
            message: "Enter your email address:",
            name: "email",
        },
        {
            input: "input",
            message: "Enter your Github account:",
            name: "github",
        },
        {
            type: "list",
            message: "Select a License:",
            name: "license",
            choices: [
                "None",
                "MIT License",
            ],
        },
    ]);
};

// Initialize app
const init = () => {
    promptUser()
        .then((answers) => writeFileAsync("dist/README.md", generateMarkdown(answers)))
        .then(() => console.log("Successfully wrote to README.md"))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();

const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project. (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('please enter the description of your project!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Installation instruction."
    },
    {
        type: "input",
        name: "usage",
        message: "describe usage."
    },
    {
		type    : 'list',
		name    : 'license',
		message : 'Which license would you like to use for your project?',
		choices : [
			'MIT',
			'Perl',
			'GGPLv3',
			'Artistic',
			'ISC',
			'Apache',
			'Boost',
			'None'
		],
		default : 0
	},
    {
        type: "input",
        name: "contributing",
        message: "contributing"
    },
    {
        type: "input",
        name: "test",
        message: "write tests options for your application"
    },
    {
        type: "input",
        name: "questions1",
        message: "Enter your GitHub Username? (Required)",
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "questions2",
        message: "Enter your Email? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('please enter your Email!');
                return false;
            }
        }
    },

]

const writeToFile = response => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', response, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// // function to initialize program
function init() {
	inquirer
		.prompt(questions)
		.then((data) => {
			let markdown = generateMarkdown(data);
            console.log(markdown)
			return writeToFile(markdown);
		})
		.catch((err) => {
			console.log(err);
		});
}

// // function call to initialize program
init();

const generateMarkdown = require('./utils/generateMarkdown');
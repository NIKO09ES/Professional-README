const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description."
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
        type: "input",
        name: "credits",
        message: "List your collaborators."
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
			'Apache 2.0',
			'Boost',
			'The Unlicense'
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
        message: "Run test here"
    },
    {
        type: "input",
        name: "questions1",
        message: "Enter your GitHub Username?"
    },
    {
        type: "input",
        name: "questions2",
        message: "Enter your Email?"
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
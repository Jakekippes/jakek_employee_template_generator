const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

//const bob = new Manager("bob", 3, "bob@bob.com", 4);
//const mark = new Intern("mark", 3, "bob@bob.com", "uofm");
const employees = [];
//employees.push(bob);
//employees.push(mark);
//fs.writeFileSync("employees.html", render(employees));

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer
  .prompt([
    {
      type: "list",
      name: "Employees",
      message: "Type of Employee",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ])
  .then((answers) => {
    switch (answers.Employees) {
      case "Manager":
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the Manager's name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is the Manager's id",
            },
            {
              type: "input",
              name: "email",
              message: "What is the Manager's email address",
            },
            {
              type: "input",
              name: "office",
              message: "What is the Manager's office number",
            },
          ])
          .then((answers) => {
            const man = new Manager(
              answers.name,
              answers.id,
              answers.email,
              answers.office
            );
            employees.push(man);
            fs.writeFileSync("team.html", render(employees));
          });
        break;
      case "Engineer":
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the Engineer's name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is the Engineer's id",
            },
            {
              type: "input",
              name: "email",
              message: "What is the Engineer's email address",
            },
            {
              type: "input",
              name: "github",
              message: "What is the Engineer's Github?",
            },
          ])
          .then((answers) => {
            const eng = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              answers.github
            );
            employees.push(eng);
            fs.writeFileSync("team.html", render(employees));
          });
        break;
      case "Intern":
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the Intern's name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is the Intern's id",
            },
            {
              type: "input",
              name: "email",
              message: "What is the Intern's email address",
            },
            {
              type: "input",
              name: "github",
              message: "What is the Intern's School?",
            },
          ])
          .then((answers) => {
            const int = new Intern(
              answers.name,
              answers.id,
              answers.email,
              answers.school
            );
            employees.push(int);
            fs.writeFileSync("team.html", render(employees));
          });
        break;
      default:
        console.log("err");
    }
  });

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

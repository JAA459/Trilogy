// Node Modules | Node Package
const fs = require("fs");

// NPM Module | NPM Package
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "checkbox",
      name: "languages",
      message: "What languages do you know?",
      choices: ["HTML", "CSS", "JavaScript", "C#"],
    },
    {
      type: "list",
      name: "communication",
      message: "What is your preferred method of communication?",
      choices: ["Email", "Text", "Letter", "Carrier Pigeon"],
    },
  ])
  .then(function (data) {
    fs.writeFile("tucker.json", JSON.stringify(data), function (err) {
      if (err) {
        console.log("Something went wrong");
        return;
      }
      console.log("Successfully wrote to file!");
    });
  });

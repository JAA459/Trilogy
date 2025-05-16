// Previous Example

const fs = require("fs/promises");
function init() {
  inquirer
    .prompt([
      {
        name: "username",
        message: "What is your username?",
      },
    ])
    .then(function (data) {
      if (data.username === "Nick") {
        throw new Error("Get out of here Nick!");
      }
      return fs.writeFile("tucker.json", JSON.stringify(data));
    })
    .then(function () {
      console.log("File was successfully created!");
    })
    .catch(function (err) {
      console.log("I CAUGHT YOU NICK!");
      console.log(err);
    });
}

init();

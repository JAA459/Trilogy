const inquirer = require("inquirer");
const fs = require("fs");

function readfile(filename, encoding = "utf8") {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, encoding, function (err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  });
} // -> Promise

function init() {
  readfile("log.txt").then((data) => console.log(data));
}

init();

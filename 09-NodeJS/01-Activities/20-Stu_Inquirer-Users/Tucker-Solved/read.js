const fs = require("fs");

fs.readFile("tucker.json", "utf8", function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  // const data = `{"name":"Tucker","languages":["HTML","CSS","JavaScript","C#"],"communication":"Email"}`;
  const parsedData = JSON.parse(data);
  console.log(data.name);
  console.log(parsedData.name);
  
  console.log(typeof data);
  console.log(typeof parsedData);
});

const path = require("path");
const fs = require("fs/promises");

const express = require("express");
const app = express();

const PORT = 8080;

const waitlist = [];
const dbFilePath = path.join(__dirname, "db/db.json");

// Parses out the body of the request
// Gives us access to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTML Routes

// / - Sends back index.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

// /tables - Sends back tables.html
app.get("/tables", (req, res) =>
  res.sendFile(path.join(__dirname, "public/tables.html"))
);

// /reserve - Sends back reserve.html
app.get("/reserve", (req, res) =>
  res.sendFile(path.join(__dirname, "public/reserve.html"))
);

// API Routes

// GET - /api/tables
app.get("/api/tables", (req, res) => {
  // Read the data from disk.
  fs.readFile(dbFilePath, "utf8").then((content) => {
    // parse out the data using JSON.parse
    const data = JSON.parse(content);
    // send the data to the front end
    res.json(data);
  });
});

// GET - /api/waitlist
app.get("/api/waitlist", (req, res) => res.json(waitlist));

// POST - /api/tables
app.post("/api/tables", async (req, res) => {
  // store table in variable
  const table = req.body;
  // Read the data from disk.
  const content = await fs.readFile(dbFilePath, "utf8");
  // parse out the data using JSON.parse
  const data = JSON.parse(content);
  // add table to parsed array
  data.push(table);
  // Save data to our db.json file
  await fs.writeFile(dbFilePath, JSON.stringify(data));
  // respond to front end
  res.json(true);
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

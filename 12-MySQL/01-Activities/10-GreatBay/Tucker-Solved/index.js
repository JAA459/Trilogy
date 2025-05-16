const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Be sure to update with your own MySQL password!
  password: "",
  database: "greatBay_DB",
});

async function init() {
  const { option } = await inquirer.prompt({
    type: "list",
    name: "option",
    message: "What would you like to do?",
    choices: ["POST", "BID", "EXIT"],
  });

  if (option === "BID") {
    bidOnItem();
  } else if (option === "POST") {
    postAnItem();
  } else {
    console.log("Good bye!");
    process.exit(0);
  }
}

async function bidOnItem() {
  // We first need to get a list of all auctions
  connection.query("SELECT * FROM auctions", async function (err, data) {
    // Prompt the user displaying the auctions
    const { itemID, bidAmount } = await inquirer.prompt([
      {
        name: "itemID",
        message: "What item would you like to bid on?",
        type: "list",
        choices: data.map((item) => ({ value: item.id, name: item.item_name })),
      },
      {
        name: "bidAmount",
        message: "How much would you like to bid?",
      },
    ]);

    // Find current item
    let currentItem;
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.id === itemID) {
        currentItem = item;
      }
    }

    // Ask the user for bid amount
    // if bid is greater update table
    if (bidAmount > currentItem.highest_bid) {
      // update table
      connection.query(
        "UPDATE auctions SET ? WHERE ?",
        [
          {
            highest_bid: bidAmount,
          },
          {
            id: currentItem.id,
          },
        ],
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} products updated!\n`);
          init();
        }
      );
    } else {
      // else say sorry
      console.log("Sorry your bid was too low. Try again...");
      init();
    }
  });
}

async function postAnItem() {
  console.log("We posting");
  const { item_name, category, starting_bid } = await inquirer.prompt([
    {
      name: "item_name",
      message: "What item would you like to post?",
    },
    {
      name: "category",
      message: "What category would you like to post your item in?",
    },
    {
      name: "starting_bid",
      message: "What is the starting bid for your item?",
    },
  ]);
  connection.query(
    "INSERT INTO auctions SET ?",
    {
      item_name,
      category,
      starting_bid,
      highest_bid: starting_bid,
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} product inserted!\n`);
      // Call updateProduct AFTER the INSERT completes
      init();
    }
  );
}

connection.connect((err) => {
  if (err) throw err;
  init();
});

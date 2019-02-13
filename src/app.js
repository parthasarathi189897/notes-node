console.log("Starting app");

const fs = require("fs");

fs.appendFile("greeting.txt", "Hello !!", err => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

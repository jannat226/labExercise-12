const fs = require("fs");
const path = require("path");

fs.appendFile("Sample.txt", "Hello Ma'am", (err) => {
  console.log("Content Updated");
});

fs.readFile("Sample.txt", "utf-8", (err, data) => {
  console.log(data);
});

fs.writeFile(path.join(__dirname, "posts", "blogPost.txt"), "Hello", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("File created");
  }
});

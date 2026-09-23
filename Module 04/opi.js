const fs = require("fs");

console.log("Start");

fs.readFile("data.txt", "utf8", (err, data) => {
    console.log(data);
});

console.log("End");
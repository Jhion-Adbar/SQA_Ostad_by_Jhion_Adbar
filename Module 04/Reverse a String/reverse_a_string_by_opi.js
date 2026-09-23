// Reverse a string
// Jhion Adbar Opi Batch 21

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter a string: ", function(text) {

    let reversed = text.split("").reverse().join("");

    console.log("Reversed string: " + reversed);

    input.close();
});
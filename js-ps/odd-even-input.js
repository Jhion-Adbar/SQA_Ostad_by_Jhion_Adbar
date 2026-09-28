// odd-even-input.js

// Jhion Adbar Opi Batch 21

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(number) {

    number = parseInt(number);

    if (number % 2 === 0) {
        console.log(number + " is an Even number.");
    } else {
        console.log(number + " is an Odd number.");
    }

    rl.close();
});
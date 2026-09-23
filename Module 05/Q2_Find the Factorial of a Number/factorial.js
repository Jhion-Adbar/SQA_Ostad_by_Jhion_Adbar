// Find the Factorial of a Number
// Jhion Adbar Opi Batch 21

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}

rl.question("Enter a non-negative integer: ", (input) => {

    let number = parseInt(input);

    if (number < 0 || isNaN(number)) {
        console.log("Please enter a valid non-negative integer.");
    } else {
        let result = factorial(number);
        console.log("Factorial of", number, "is:", result);
    }

    rl.close();
});
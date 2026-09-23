// FizzBuzz
// Jhion Adbar Opi Batch 21

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the starting number: ", (startInput) => {

    rl.question("Enter the length: ", (lengthInput) => {

        let start = parseInt(startInput);
        let length = parseInt(lengthInput);

        for (let i = start; i < start + length; i++) {

            if (i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
            }
            else if (i % 3 === 0) {
                console.log("Fizz");
            }
            else if (i % 5 === 0) {
                console.log("Buzz");
            }
            else {
                console.log(i);
            }
        }

        rl.close();
    });
});
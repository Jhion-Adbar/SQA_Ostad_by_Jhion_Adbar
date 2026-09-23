// Celsius to Fahrenheit
// Jhion Adbar Opi Batch 21

const readline = require("readline");
// "readline" holo built in Node.js module

const rl = readline.createInterface({
    //createInterface() interface use kori input and output read korar jonno
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter temperature in Celsius: ", (celsius) => {
    let fahrenheit = (parseFloat(celsius) * 9 / 5) + 32;
    // parseFloat() use hoise decimal values handel ar jonno.

    console.log("Temperature in Fahrenheit:", fahrenheit);

    rl.close();
});

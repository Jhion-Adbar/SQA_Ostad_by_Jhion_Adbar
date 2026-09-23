// Jhion Adbar Opi Batch 21.

const readline = require("readline");  // readline keyboard theke input netache

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("By my commend you can now enter a number: ", function(jhion_answer) {

    let number = Number(jhion_answer);  // answer jhion_answer a store hoche

    if (number % 2 === 0) {
        console.log("The number is Even");
    } else {
        console.log("The number is Odd");
    }

    input.close();
});
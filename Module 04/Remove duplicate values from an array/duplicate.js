// Remove duplicate values from an array
// Jhion Adbar Opi Batch 21

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter numbers separated by commas: ", function(data) {

    let numbers = data.split(",").map(Number);

    let uniqueNumbers = [...new Set(numbers)];

    console.log("Array After Removing Duplicates:", uniqueNumbers);

    input.close();
});

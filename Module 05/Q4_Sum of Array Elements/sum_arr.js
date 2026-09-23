// Sum of Array Elements
// Jhion Adbar Opi Batch 21

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumArray(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return sum;
}

rl.question("Enter numbers separated by spaces: ", (input) => {

    let numbers = input.split(" ").map(Number);

    let result = sumArray(numbers);

    console.log("Sum of array elements:", result);

    rl.close();
});
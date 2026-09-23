// Count vowels in a string
// Jhion Adbar Opi Batch 21

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter a string: ", function(text) {

    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
        }
    }

    console.log("Number of vowels: " + count);

    input.close();
});


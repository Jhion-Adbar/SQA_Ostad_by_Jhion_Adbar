// Check for Palindrome
// Jhion Adbar Opi Batch 21

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(word) {
    let reversedWord = word.split("").reverse().join("");

    return word === reversedWord;
}

rl.question("Enter a word: ", (word) => {

    let result = isPalindrome(word);

    console.log("Palindrome:", result);

    rl.close();
});
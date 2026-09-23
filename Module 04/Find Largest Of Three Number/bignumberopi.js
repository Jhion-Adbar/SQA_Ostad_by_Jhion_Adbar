// Jhion Adbar Opi Batch 21
// learge number

const readline = require("readline");  // readline keyboard theke input netache


const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter first number: ", function(first) {

    input.question("Enter second number: ", function(second) {

        input.question("Enter third number: ", function(third) {

            let num1 = Number(first);
            let num2 = Number(second);
            let num3 = Number(third);

            if (num1 >= num2 && num1 >= num3) {
                console.log("The largest number is: " + num1);
            } 
            else if (num2 >= num1 && num2 >= num3) {
                console.log("The largest number is: " + num2);
            } 
            else {
                console.log("The largest number is: " + num3);
            }

            input.close();

        });

    });

});
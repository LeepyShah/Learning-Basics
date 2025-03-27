// Create a function that takes two or more numbers as user input and adds them
// together to get a new number. The function then repeatedly multiplies the digits
// of the new number by each other, giving a new number, until the product is
// returned only 1 digit long. Return the final value.
// EX. User input - ""16 28"" then -- 16 + 28 = 44 after this it will add digits like this
// --4 * 4 = 16 until it gets only single digit as value-- 1 * 6 = 6
const prompt = require("prompt-sync")();

function getSingleDigitProduct() {
    let input = prompt("Enter a number: ");
    let sum = parseInt(input);
    while (true) {
        input = prompt("Enter another number (or type 'null' to stop): ");
        if (input.toLowerCase() === "null") {
            break;
        }
        if (!isNaN(parseInt(input))) {
            sum += parseInt(input);
        } else {
            console.log("Invalid input. Please enter a number or 'null' to stop.");
        }
    }

    console.log("Sum of all numbers:", sum);

    // Reduce the sum to a single digit by multiplying its digits
    while (sum >= 10) {
        let digits = sum.toString().split("").map(Number); // Split digits and convert to numbers
        sum = digits.reduce((product, digit) => product * digit, 1); // Multiply all digits
    }

    return sum;
}

const result = getSingleDigitProduct();
console.log("Final single-digit product:", result);
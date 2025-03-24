// .Create a JavaScript function that takes a String value as an input and capitalizes
// a letter if its ASCII value is even and returns its lowercase version if its ASCII
// value is odd.
// Ex. User Input: "THE LITTLE MERMAID"
// Output: "THe LiTTLe meRmaiD"
const prompt = require("prompt-sync")();

function MyFunction(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str[i].charCodeAt();
        if (charCode % 2 === 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
        return result; // Return the final transformed string
    }
}

let str = prompt("Enter String: ");
let output = MyFunction(str);
console.log("Output:", output);
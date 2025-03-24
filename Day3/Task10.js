// Sort the given string based on ASCII value
const prompt = require("prompt-sync")();
ascii = []
function Sort(str) {
    str=str.split("")
    console.log(str.sort())
}
    input = prompt("Enter String:")
    Sort(input)

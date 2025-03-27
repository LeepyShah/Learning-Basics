// Write a JavaScript function that accepts a String with space-separated numbers
// and returns the highest and lowest number (as a string).
// Ex. User Input : "1 2 3 4 5"
// Output : "5 1"
const prompt = require("prompt-sync")();
function HighestNumber(num){
    num1=num.split(" ")
    console.log(num1)
    max=Math.max(...num1)
    min=Math.min(...num1)
    console.log("Output:"+min+" "+max)
}


num=(prompt("Enter Number:"))
HighestNumber(num)
// Write a JavaScript function that takes a two-digit number and determines if it's
// the largest of two possible digit swaps
// Ex:- If we give 43 as user input then it will return false because swapping 43
// gives us 34, and 43 > 34."
const prompt = require("prompt-sync")();
function reverse(num) {
    let rev=0
    while (num != 0) {
        d = num % 10;
        rev = rev * 10 + d;
        num=Math.floor(num/10)
    }
    return rev
}
function LargestPossibleDigits(num) {
    if(reverse(num)>=num){
        return true
    }
    else{
        return false
    }
 }
num = parseInt(prompt("Enter Number"));
console.log(LargestPossibleDigits(num))
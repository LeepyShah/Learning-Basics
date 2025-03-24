// Write a javascript program that returns `true` if the input string includes the string "ee"
const prompt = require("prompt-sync")();

function CheckSubstring(string){
 
    if(string.match("ee")){
        return true
    }
    else{
        return false
    }
}
str=prompt("Enter String:")
console.log(CheckSubstring(str))

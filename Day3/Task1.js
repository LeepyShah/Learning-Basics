// Write a JavaScript function that returns the string with "something" appended
// with a space " " to the given string value.
const prompt = require("prompt-sync")();
str1=prompt("Enter String: ")

function AppendSpace(){
    
    return("something"+" "+str1)
}
console.log(AppendSpace())
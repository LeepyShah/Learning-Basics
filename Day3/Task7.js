// Write a javascript program that takes in a number as a string n and returns the
// number without trailing and leading zeros.
// Ex. removeLeadingTrailing(""230.000"") ➞ ""230""
// removeLeadingTrailing(""00402"") ➞ ""402""
const prompt = require("prompt-sync")();
function removeLeadingTrailing(input){
   
    input=input.replace(/^0+|.0+$/g, "")
    // The "g" flag indicates that the regular expression should be tested against all possible matches in a string.
    console.log(input)
}
input=prompt("Enter Number:")
removeLeadingTrailing(input)
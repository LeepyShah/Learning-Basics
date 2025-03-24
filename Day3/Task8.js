// Write a JavaScript function that takes a string and returns the count of vowels
// contained within it.
// Ex. User Input : Celebration ➙ 5"
const prompt = require("prompt-sync")();
function VovelCounting(str){
    vovel=0
    for(i=0;i<str.length;i++){
        if(str[i]=='a'| str[i]=='e' | str[i]=='i'|str[i]=='o'|str[i]=='u'){
            vovel++
        }
    }
    return vovel

}
input=prompt("Enter String :")
console.log(VovelCounting(input))
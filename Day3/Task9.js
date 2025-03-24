// "Create a function that moves all capital letters to the front of a word.
// Ex. ""hApPy"" ➞ APhpy"""
const prompt = require("prompt-sync")();
function MoveCapitalForward(str){
    strArray=(str.split(""))
    upper=""
    lower=""
    for(i=0;i<strArray.length;i++){
        if(strArray[i] == strArray[i].toUpperCase()){
            upper=upper+strArray[i]
        }
        else{
            lower+=strArray[i]
        }
    }
    console.log(upper+lower)
}
input=prompt("Enter String Ex.hApPy :")
MoveCapitalForward(input)

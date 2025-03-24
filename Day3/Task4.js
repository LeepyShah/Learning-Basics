// "JavaScript program to display multiplication tables using user input integer
// value.
// Ex. User Input: 2
// 2 * 1 = 2
// 2 * 2 = 4
// ….
// 2 * 10 = 20"
const prompt = require("prompt-sync")();
function MuliplicationTable(num){
     for(i=1;i<=10;i++){
        console.log(`${num} * ${i} = ${num*i}`)
     }
}
user=parseInt(prompt("User Input: "))
MuliplicationTable(user)
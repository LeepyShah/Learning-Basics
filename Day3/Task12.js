// write a Javascript program that takes a number as its argument and returns an
// array of all its factors.
// Ex. 12 ➞ [1, 2, 3, 4, 6, 12]
// 4 ➞ [1, 2, 4]
const prompt = require("prompt-sync")();
num=parseInt(prompt("Enter Number"))
FactorsOfNumber(num)

function FactorsOfNumber(num){
    factors=[]
    for(i=2;i<=num;i++){
        if(num%i==0){
            factors.push(i)
        }
    }
    console.log(factors)
    
}

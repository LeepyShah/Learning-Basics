// Create a function that takes two or more numbers as user input and adds them
// together to get a new number. The function then repeatedly multiplies the digits
// of the new number by each other, giving a new number, until the product is
// returned only 1 digit long. Return the final value.
// EX. User input - ""16 28"" then -- 16 + 28 = 44 after this it will add digits like this
// --4 * 4 = 16 until it gets only single digit as value-- 1 * 6 = 6
const prompt = require("prompt-sync")();
input=prompt("Enter Number:")
inputs=[parseInt(input)]

while(input!="null"){
    input=prompt("Enter Number if you want to terminate enter null: ")
    
    if(input!="null"){
        inputs.push(parseInt(input))
    }
}
console.log(inputs)
add=0
for(i=0;i<=inputs.length;i++){
    while(inputs[i].length!=1){
        add=add+inputs[i]

    }
}
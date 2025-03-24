// Write a function that mimics (without the use of >>) the right shift operator and
// returns the result from the two given integers.
// Ex. 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
// -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
const prompt = require("prompt-sync")();
function ShiftOperator(num,shift){
    console.log(`${num} >> ${shift} = ${Math.floor(num/2**shift)} `)
}
num=prompt("Enter Number for Shift right:")
shift=prompt("Enter no of shift")
ShiftOperator(num,shift)                  
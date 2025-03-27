// Create a basic calculator using HTML, CSS, and JavaScript with buttons for
// numbers and basic arithmetic operations

function Add(num1,num2) {
     num1 = parseFloat(document.getElementById("num1").value); 
     num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById("result").value = num1 + num2; 
    } else {
        document.getElementById("result").value = "Invalid Input"; 
    }
}

function Sub(num1,num2){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById("result").value = num1 -num2; 
    } else {
        document.getElementById("result").value = "Invalid Input"; 
    }
}
function Mul(num1,num2){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById("result").value = num1 * num2; // Display result
    } else {
        document.getElementById("result").value = "Invalid Input"; // Handle invalid input
    }
}
function Div(num1,num2){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById("result").value = num1/num2; // Display result
    } else {
        document.getElementById("result").value = "Invalid Input"; // Handle invalid input
    }
}

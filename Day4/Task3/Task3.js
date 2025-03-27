// Create a program which will display the time remaining from the current date to
// the entered date
const prompt = require("prompt-sync")();
function calculateTimeRemaining(){
    const currentDate = new Date();
    //user input
    let inputDate = prompt("Enter a future date (dd-mm-yyyy): ");
    let dateParts = inputDate.split("-");
    console.log(Date.parse(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`))
    while(dateParts.length!=3 && isNaN(Date.parse(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`))){
        
        console.log("Invalid date format. Please enter the date in dd-mm-yyyy format.");
        inputDate = prompt("Enter a future date (dd-mm-yyyy): ");
        dateParts = inputDate.split("-");
    }
    const targetDate = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
    // ISO format can be in the form of YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS
    console.log(targetDate)
    console.log(currentDate)
    if (targetDate <= currentDate) {
        console.log("The entered date must be in the future.");
        return;
    }
    
    // difference in milliseconds
    const timeDifference = targetDate - currentDate;
    console.log("timeDiffrence",timeDifference,"milliseconds")

    //Write here Explanation 
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    console.log(`Time remaining: ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`);

}
calculateTimeRemaining()
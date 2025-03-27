// Create a program which will display the time remaining for the lunch. ex. lunch
// time: 1:00 PM, timenow : 10:30. Time remaining : 2:30
const prompt=require("prompt-sync")();
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let lunch_time=prompt("Enter time in formate (HH:MM:SS)")
lunch_time=lunch_time.split(":")
console.log(hours,minutes,seconds)
console.log(`Time Remaining: ${lunch_time[0]-hours}:${Math.abs(lunch_time[1]-minutes)}:${Math.abs(lunch_time[2]-seconds)}`)

// const d = new Date("July 21, 1983 01:15:00");
// lunch_time=new Date(now.getFullYear(),now.getDay,now.getMonth,17,0,0)
// //
// // let year = d.getTime();
// console.log(lunch_time.getTime())





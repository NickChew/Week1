// Activity 3: 
// Create a program that calculates the number 
// of days from today to your birth date. 
// Hint - Look for ‘Javascript Date’ on MDN.


let date1 = new Date('09/17/1974');
let date2 = new Date();

 // One day in milliseconds
 let oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
 let diffInTime = date2.getTime() - date1.getTime();

 // Calculating the no. of days between two dates
 let diffInDays = Math.round(diffInTime / oneDay);

 console.log (diffInDays);      //in days
 console.log (diffInDays/365);  //in years
 




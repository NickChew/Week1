//Create a variable called num.
//Check if the number is a palindrome (looks the 
//same forward as it does backwards e.g. 1001 or 
//20202).


let num = 202202                //Change to test
let reverse = parseInt(num.toString().split("").reverse().join("")); // change string to interger and split and reverse
                            //https://www.folkstalk.com/2022/09/palindrome-number-in-javascript-with-code-examples.html
if (num == reverse) {                           //if two halves match its a palindrome
    console.log (`${num} is a palindrome`)
}
else{
    console.log(`${num} is not a Palindrome`)
}
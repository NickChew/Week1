//Create two variables called num1 and num2.
//Create an if statement that checks if the result of the 
//sum is even. If it is return the number, otherwise return 
//the numbers multiplied together.

let num1 = Math.floor(Math.random()*100);       //random no. generator
let num2 = Math.floor(Math.random()*100);

let num3 = (num1 + num2)
//check if the number is even
if(num3 % 2 == 0) {
    console.log(`"The number is even." ${num3} `);
}
// if the number is odd
else {
    console.log(`"The number is odd." ${num3} `);
}

//different way//
// //activity 10
// let num1 = 6;
// let num2 = 7;
// let sum = num1 + num2;

// if (sum % 2 === 0) {
//     console.log("even")
// } else {
//     console.log(sum) //this will print as the odd number 
// }
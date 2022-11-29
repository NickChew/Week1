// Activity 5:
// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, if it’s divisible by 
// 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log 
// “fizz buzz” to the console. Otherwise log num to the console.


let num = Math.floor(Math.random()*100);     //create a random no. to test fizz buzz

if ((num % 15) == 0){                       //Following works out if divisible by 3 or 5 or both
    console.log (`${num} "FizzBuzz"`);
}
else if ((num % 3) == 0){
    console.log (`${num} "Fizz"`);
}
else if ((num % 5) == 0){
    console.log (`${num} "Buzz"`);
}
//else if (((num % 3) == 0) && ((num % 5) == 0)){
//    console.log (`${num}"FizzBuzz"`);
//}
else {
    console.log  (`${num}" is not divisible by 3 or 5 or both"`);
}
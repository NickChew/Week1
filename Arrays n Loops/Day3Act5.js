//Activity 5:
//Generate a random number between 1 and 30 Six times.
//For each random number generated, check if 
//this number of divisible by 7 or not.
//Log out a message to the console if it is divisible 
//by 7 or not. 
//----------------------------------------------------

let max=30
let min=1

for (let i = 0; i < 6; i++) {
    
    let rndno = Math.floor(Math.random() * (max-min) + min);
    console.log(rndno);
    if (rndno % 7 == 0){                //is no. divisible by 7 with no remainders
        console.log(`"Divisible by 7"`)
    }
    else{
        console.log (`"Not Divisible"`);
  
    }
}
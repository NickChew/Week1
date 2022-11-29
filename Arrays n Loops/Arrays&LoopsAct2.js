//Activity 2:
//Generate 6 random numbers between
//1-50 and log them to the console.
//----------------------------------------------------------------

//let max=50
//let min=1

//for (let i = 0; i < 6; i++) {           //Following Displays random no. 6 times between 1-50
    
//    let rndno = Math.floor(Math.random() * (max-min) + min);
//    console.log(rndno);
//}

let randNum = [];

for(let i = 0; i <= 5; i++){
    randNum.push((Math.ceil(Math.random() * 50)));
}
console.log(randNum);

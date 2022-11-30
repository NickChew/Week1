//Activity 3:git add 
//Cash machine time! 
//Let’s create one that:
//> Dispenses cash if your pin number is correct and your 
//balance is equal to, or more than, the amount you’re 
//trying to withdraw!
//Be Creative
/*
function cashMachine (pin, withdrawal, balance) {
    if (pin == "4321") {
        if (withdrawal <= balance) {
            console.log("You can have your money")
        } else {                                    //-- could be written like {
    console.log("No money for you today")           //else
        }                                           //}
    }
}
*/
// arrow  function version
const cashMachine = (pin, withdrawal, balance) => { //
    if (pin == "4321") {
        if (withdrawal <= balance) {
            console.log("You can have your money")
        } else {                                    
    console.log("No money for you today")           
        }                                           
    }
}


cashMachine("4321", 127, 100)       //pin , withdrawal, balance
cashMachine("4321", 27, 100)
    



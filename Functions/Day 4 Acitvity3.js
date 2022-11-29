//Activity 3:
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

const cashMachine = (pin, withdrawal, balance) => {
    if (pin == "4321") {
        if (withdrawal <= balance) {
            console.log("You can have your money")
        } else {                                    //-- could be written like {
    console.log("No money for you today")           //else
        }                                           //}
    }
}


cashMachine("4321", 127, 100)
cashMachine("4321", 27, 100)
    
// arrow  function version


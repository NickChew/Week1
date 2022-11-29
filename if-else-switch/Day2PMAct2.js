// Activity 2:
// Create a variable for any pizza topping. 
// Create a switch statement, if the topping is one of your 
// favourite ingredients, log to the console “These are 
// important ingredients for my pizza.” If you don’t mind 
// having Pepperoni for example log to the console “I don’t 
// mind having ${topping} on my pizza. 
// Finally, for any topping you don’t like log “${topping} 
// should not be on a pizza.” 

// Pizza!

let wantedtopping="Peperroni";          //change to test

let favtopping1="Cheese";
let favtopping2="Bacon";
let favtopping3="Chicken";
let favtopping4="Tuna";
const favtoparray = (favtopping1,favtopping2,favtopping3,favtopping4);


switch(favtoparray){                                                //
    case "Cheese" == wantedtopping && favtoparray:
       console.log("These are important ingredients for my pizza");
       break;
    case "Bacon" == wantedtopping && favtoparray:
        console.log("These are important ingredients for my pizza");
        break;
    case "Chicken" == wantedtopping && favtoparray:
        console.log("These are important ingredients for my pizza");
        break;
    case "Tuna" == wantedtopping && favtoparray:
        console.log("These are important ingredients for my pizza");
        break;    
    case "Peperroni" == wantedtopping && favtoparray:
        console.log("I dont mind Pepperoni on my pizza");
        break;    
    default:
        console.log(`${wantedtopping}("should not be on my Pizza!"`);
}
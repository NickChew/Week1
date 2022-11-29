//Activity 3:
//Create an object called coffeeShop with key values of: 
//branch, drinks with prices, food with prices
//And methods called drinksOrdered and foodOrdered.
//They should return a string saying [Your order] is … with all 
//items chosen with costs and total costs.

// Declaring the object called coffee shop
const coffeeShop = {
   //Properties of the coffee shop using key value pairs
   branch: "Humphrey's Coffee Shop",
   arrDrinks: ["coffee",  "coconut water", "fruit juice"],  //An array of drinks (strings)
   drinkPrices: [2.50, 1.50, 3.00],
   arrFood: ["bacon", "beans", "eggs", "sausage"],
   foodPrices: [2.00, 4.00, 1.00, 2.50],                    //An array of Prices (Floats)
   total: 0,

   //Function to determine the cost of food
   foodOrdered (foodParam ) {
       idx = this.arrFood.indexOf(foodParam);   //Finds the index of value in food
       foodCost = this.foodPrices[idx];         //Use the same index to find the price of the food
       console.log(`Your ${foodParam} costs £ ${foodCost}`);
       this.total += foodCost;                  //Adds the content o foodCost to this.total
   }, 

   //Funtion to determine the cost of the drink/
   drinksOrdered (drinkParam) {
       idx = this.arrDrinks.indexOf(drinkParam);   //Finds the index of the value in drink
       drinkCost = this.drinkPrices[idx];          //Use the same index to find the price of the drink
       console.log(`Your ${drinkParam} costs £ ${drinkCost}`);
       return(`The total bill is £: ${this.total += drinkCost}`) //returns the sting containing the total of both food and drink (i.e. food cost + drink cost)
   }
} 

// Calling the functions - to make them run
//console.log(coffeeShop.foodOrdered("beans")); // beans is an argument which is passed to the parameter foodParam
console.log(coffeeShop.drinksOrdered("coffee"));   // coffee is an argument which is passed to the parameter drinkParam
console.log(coffeeShop.drinksOrdered("coconut water")); // adds cocunut water to this.total
// Activity 2:
// Edit the below snippet to include two parameters and a
// running order count updated when the function is called

//let orderCount = 0;

// //const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
// }

// takeOrder("pineapple");


let orderCount = 0;

const takeOrder = (topping1, topping2 ) => {                
    console.log(`Pizza with ${topping1} and ${topping2} `);     // display pizza with the two toppings
    orderCount++;                                               //count Plus 1
}

takeOrder("Pineapple", "Ham");                              //1st order
console.log(`There are currently ${orderCount} orders.`)

takeOrder("extra cheese","Mushrooms")                       //2nd order
console.log(`There are currently ${orderCount} orders.`)
                                                            
takeOrder("Beef","Pepperoni")                               //3rd order
console.log(`There are currently ${orderCount} orders.`)

takeOrder("Sausage","Tuna")                                 //4th order
console.log(`There are currently ${orderCount} orders.`)    // total number of orders

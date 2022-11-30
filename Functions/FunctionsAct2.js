// Activity 2:
// Edit the below snippet to include two parameters and a
// running order count updated when the function is called

let orderCount = 0;

const takeOrder = (topping) => {
    console.log (`Pizza with ${topping}`);
    orderCount++;
}

takeOrder("pineapple");


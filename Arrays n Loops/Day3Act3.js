//If we can create a loop to put 0-9 on the screen, how 
//can we count from 9-0? Create a program that does 
//this.
//----------------------------------------------------------------

//   start ;  condition ; increment

for (let i = 0; i < 10; i++) {      //displays 0 - 9
    console.log ("i = ", i);
}
for (let i2 = 9; i2 >= 0; i2--) {   //displays 9 - 0, i2 starts at high no. till 0, count goes down --
    console.log ("i2 = ", i2);
}

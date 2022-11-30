// Activity 4: 
// > Create 9 variables: space1, space2… space9. 
// > Assign either the value ‘x’,’o’,’ ‘, to each of 
// these variables.
// > Insert the variables into your board using the 
// ${varName} syntax and make it look like the 
// displayed board.


let space1="x";
let space2="o";
let space3=" ";
let space4="x";
let space5="x";
let space6=" ";
let space7="o";
let space8=" ";
let space9=" ";
const tttarray = [space1,space2,space3,space4,space5,space6,space7,space8,space9];

//display array

console.log(`
    |   |   
  ${space1} | ${space2} | ${space3} 
    |   |   
 -----------
    |   |   
  ${space4} | ${space5} | ${space6} 
    |   |   
 -----------
    |   |   
  ${space7} | ${space8} | ${space9} 
    |   |   
 `);
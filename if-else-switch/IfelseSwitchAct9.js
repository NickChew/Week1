//Create a variable called word that takes a string. Create 
//an if statement that checks if the last letter is the same as 
//the first. If it is return true, otherwise return false.

const str = 'abcda';                //change to test

const first = str.charAt(0);
console.log(first); 

const last = str.charAt(str.length - 1);
console.log(last); 

if (first == last) {                           //if two halves match
    console.log (`True ${first} is same as ${last}` )
}
else{
    console.log(`False`)
}

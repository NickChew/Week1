//Activity 6:
//Imagine you’re a programmer for a social media platform! You have 
//been tasked with building a prototype for a mutual followers program. 
//> Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. 
//In these arrays place 4 names as strings. Make sure there are 2 names 
//that are in BOTH arrays.
//> Using a nested loop iterate over both arrays and console.log out the 
//matching follower.
//-----------------------------------------------------------------------

let bobsFollowers = ["Bob","Andy","Steve","Lyndsey"];
let hannahsFollowers = ["Xara","Jane","Lyndsey","Megan"];
  
// Function definition with passing two arrays
function findCommonElement(bobsFollowers, hannahsFollowers) {
      
    // Loop for array1
    for(let i = 0; i < bobsFollowers.length; i++) {
          
        // Loop for array2
        for(let j = 0; j < hannahsFollowers.length; j++) {
              
            // Compare the element of each and
            // every element from both of the
            // arrays
            if(bobsFollowers[i] === hannahsFollowers[j]) {
              
                // Display if common element found
                console.log((bobsFollowers[i]),(hannahsFollowers[j]))
              
            }
        }
    }
      
    // Return/console.log if no common element exist
    //return false; 
}
  
console.log(findCommonElement(bobsFollowers, hannahsFollowers))
//Displays 4 films stored in an array. JS
//Use a for loop to show each film in the array.
//Use an if statement to check if the 3rd film in the array is 
//Ghostbusters. 
//If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! 
//we want Ghostbusters
//----------------------------------------------------------------

let favFilms = ["Tron", "Star Wars", "Rambo", "Ghostbusters"];
   console.log(favFilms);

    for (let i=0; i <favFilms.length; i++){
        if ((favFilms[i]) = (favFilms[3]) == "Ghostbusters"){ //change value in [3] to test array location
            console.log (`“Yay its Ghostbusters”`);
            break;
        }
        else{
            console.log(`"Boo!we want Ghostbusters"`);
            break;
        }
      //  console.log(favFilms[i]);
    }
//Activity 1:
//Create an array that lists your favourite films, up to 
//5 elements.
//Add 2 more using a method. 
//Use a loop to cycle through the array
//----------------------------------------------------------------

let favFilms = ["Star wars", "Sphere","1899","Toy Story","Rambo"];
console.log(favFilms);
    favFilms.push("Saw","WaterWorld");  //adds 2 more items to array
console.log(favFilms);

//   start ;  condition ; increment
//for (let i = first; i <last; i+=inc) {
//   console.log ("i = ", i);
//}

for (let i=0; i <favFilms.length; i++){     //displays 1 item after another
    console.log(favFilms[i]);
}

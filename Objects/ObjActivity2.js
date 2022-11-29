//Activity 2: 
//Create an object called pet with the key values of:
//name, typeOfPet, age, colour
//And methods called eat and drink. They should return a 
//string saying [Your Pet Name] is eating/drinking.


const pet = {
    name3: "Handbrake",                             // key is name3, value is string "handbrake"
    typeOfPet: "Dog",                               // key is typeOfPet, value is string "Dog"    
    age: 7,                                         // key is age, value is numeric 7
    colour: "black",
    eat(){                                                          //function eat
        return `${this.name3} is a ${this.typeOfPet} and is eating` // returns Handbrake is a Dog and is eating when called at end
    },
    drink(){                                                        //function drink
        return  `${this.name3} is drinking`                         //returns Handbrake is drinking when called from end
    },
    sleep(){                                                        //function sleep
        return  `${this.name3} is sleeping`                         //returns Handbrake is sleeping whn called from end
    },
}

console.log(pet.eat());
console.log(pet.drink());
console.log(pet.sleep());
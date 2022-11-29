let offer = "none";
let time = 1200;

const cafe3 = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: ["Cappuccino","Latte","Filter coffee","Tea","Hot chocolate"],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry no offer",

    openCafe(){              //function openCafe put in object cafe3
        if (this.hasSpecialOffers){     // this. refers to a key within an object
        return "Time for a Special offer";
        }
    },
    closeCafe(){             //function closeCafe put in object cafe3
        return "We are closed, come back tomorrow!";
    }
};
console.log(cafe3.openCafe());
//console.log(cafe3.closeCafe());

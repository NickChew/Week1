// Create a variable called time, a variable called placeOfWork 
//and a variable called townOfHome. Create an if statement that 
//logs to the console where someone is at times of the day. E.g. if 
//the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

let time = 0745             //Change time to test

placeofwork = "Office"
hometown = "Wirral"

if (time >=0700 && time <0800){     //check var time is with in these times
    console.log ("i am at home");
    }
else if (time>=0800 && time <0900){
    console.log ("Im commuting");
    }
else if (time>=0900 && time<1701){
    console.log ("Im in Work");
    }
else
    console.log ("i am at home");


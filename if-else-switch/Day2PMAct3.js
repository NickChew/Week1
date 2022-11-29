// Activity 3:
// Create a variable called password. 
// Check how many letters are in the password, if there are 
// less than 8, log to the console that the password is too 
// short. Otherwise log the password to the console.


let password="Pasword"
let pwlength=password.length;

if (pwlength<8){                            //checks the password length if less than 8
    console.log ("password to short!");
}
else {
    console.log(password)
}
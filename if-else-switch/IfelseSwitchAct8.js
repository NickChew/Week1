//Take the string 
//“jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
//gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the 
//index of a last vowel in the string

string= ("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi")
vowels = ["a","e","i","o","u"];

strLen = string.length;
    for (let i=0; i<strLen; i++){
        for(j=0; j<6; j++){
            if (string[i] == vowels[j]) {
            console.log (`${vowels[j]} "Vowel found at" ${[i]}`);
            }     
        }                                                 
    }
console.log("is the last");


// let bigString = ("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi")
// let vowels =  ('a','e','i','o','u');
// let lastVowel = bigString.lastIndexOf(vowels);

// console.log(lastVowel);
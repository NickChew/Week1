//Take the string 
//“jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
//gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the 
//index of a last vowel in the string

string= ("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi")
vowels = ["a","e","i","o","u"];

strLen = string.length;
    for (let i=0; i<strLen; i++){
        for(j=0; j<6; j++)
        if (string[i] == vowels[j]) {
            console.log (`${vowels[j]} "Vowel found at" ${[i]}`);
        else if (i=0){
                console.log (`${item.vowels[j]} "last Vowel found"`);
            }
        }    
    }
console.log (`${item.vowels[j]} "last Vowel found"`);


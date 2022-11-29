// Activity 1:
// Let’s edit our person object to include…
// A function called sayHi and when it’s called, it 
// should return “Hello my name is ${this.name}”

// Objects
// person= name:

const person = {                        //person is object 
    name: "nick",   // whole things a property, key is name with : at end then value seperated by commas (key value pair)
    age: 48,

    sayHi(){                                    //function within object        
        return `Hello My name is ${this.name}`  // this function is to display hello my name is (contents of name 
    }                                           // using this(from within this single object person))
}

console.log(person.sayHi());                    //display sayhi function from within object person - Hello My name is nick

console.log(person);                            //displays whole object { name: 'nick', age: 48, sayHi: [Function: sayHi] }

console.log(person.name)                        //differant ways of displaying name
console.log(person["name"])


// Values and Data Types

/*
 Every Value is either an object or primitive data type

 Object - 

        let me = { 
            name: "pavel",
        }


 Primitive - 

        let age = 22; 
        let firstName = "Pavel"; 

 There are 7 primitive data types: 
    - Number. Floating point numbers -> used for decimal and integers 
    - String. Sequence of characters -> used for Text
    - Boolean. Logical type that can be only of true or false -> used for taking decisions 
    - Undefined. Value taken by a variable that is not yet defined ('empty value)
    - Null. Also means 'empty value' 
    - Symbol (ES2015). Value that is unique and cannot be changed [Not useful for now]
    - BigInt (ES2020): Larger integer than the Number type can hold  


    Java Script is a dynamically typed language: we do not have to define the date type of the value
    stored in the variable. Instead, data types are determined by automatically. 
    
    *The value has a type not the variable, variable just stores the data type, 
    we can assign different datatypes to the same variable. This can be useful and dangerous 
    since it can introduce bugs. 


 There are three different ways to declare variables in JavaScript -> let, const, var 

 NEW
    let - used to declare variables that will be changed later or can be mutated 
    const - used to declare variables that are not suppose to change 
 OLD 
    vat - works similar to let but really different
*/

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Array destructuring

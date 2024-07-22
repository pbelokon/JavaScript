/////// JavaScript Principles

/// Thread of execution

/*
    JavaScript runs code using a (thread of execution) which 
    goes line by line runs/executes each line and saves data like stings
    and arrays so we can use them late in the code. 
    
    We can also save code ("functions")
*/

// Name of something in code is called an (Identifier)
const num = 3;

function multiplyBy2(inputNumber) {
  // inputNumber is a parameter and what is = to is an argument
  const result = inputNumber * 2;
  return result; // locate result and ship it out/returns it
}

/*
    When a function call happens we get (Execution context)
    it's created to run code of a function - has 2 parts 
        - Thread of execution 
        - Memory

    
    when a function runs it creates it's own execution context
    separated from global execution context.
*/

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);

/// Call Stack

/*
    JavaScript keeps track of what function is currently running 
    via (Call Stack), Running a function adds it to the call stack,
    finish running the function removes it from the call stack. 
    Whatever is the top function of the call stack is currently running 
    function. 
*/

//// Functions & Callbacks

/*
    Higher order functions: 
            - We may not want to decide exactly what some of our functionality   
            would do until we run our function.  
*/

/// Generalized Functions - never repeat your self

function tenSquared() {
  return 10 * 10;
}

// ...... for all the other numbers ⬇️ always generalize make it reusable
function squared(n) {
  return n * n;
}

// Repeating functionality 🚫

function copyArrayAndMultiplyBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }

  return output;
}

function copyArrayAndDivideBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }

  return output;
}

const myArray = [1, 2, 3];
const result1 = copyArrayAndMultiplyBy2(myArray);
const result2 = copyArrayAndDivideBy2(myArray);

////Imperative approach

// Higher order function
function calc(array, instruction) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(instruction(array[i]));
  }

  return output;
}

// call back function

const multiBy2 = (input) => input * 2;

// we pass call back function to higher order function
const result3 = calc(myArray, multiBy2);

// ⬆️⬇️
const result4 = calc(myArray, (input) => input * 2);

/*
    How is the ⬆️ possible

        - Functions in javascript = first class object

        They can co-exist with and can be treated like any other javascript object 
            
            - Assigned to variable and properties of other objects
            - passed as arguments into functions 
            - returned as values from functions  

    *** 
    Declarative readable code: Map, Filter, Reduce - the most readable way to write code to work with data 
    
    Code smith & pre interview prep: One of the most popular topics to test in interview both for 
    Code smith and mid/senior level job interview. 
*/

// if your function does one thing it will be automatically returned
const multiply3 = (input) => input * 3;

// Closure

/*
   When out functions get called, we create a live store fo data (local memory/variable environment/state)
   for that function's execution context. 

   When the function finished execution, its local memory is deleted (except the return value). 

   But what is out function could hold on to live data between executions ? 

   This would let our function definitions have an associated cache/persistent memory. 

   But it all starts with us returning a function from another function.

   *** Memoization
*/

function createFunction() {
  function multiply2(num) {
    return num * 2;
  }

  return multiply2;
}

const generatedFunc = createFunction();
const result = generatedFunc(3);

function outer() {
  let counter = 0;

  function incrementCounter() {
    counter++;
    // console.log(counter);
  }

  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

/*
  when we return a function it takes with it self a small backpack with surrounding local data

  so in ⬆️ example we retain counter changes and it would increment from 0 to 1 to 2

  [[scope]] -> hidden property

  local memory - variable environment -> surround environment that surrounds an element
  backpack === closed over variable environment
  P.l.S.R.D
   - Persistent lexically or static scope reference data -> backpack --> closure 


   JS  scope rule = lexical or static scoping -> where i save my function determines what data will it has access to
  */

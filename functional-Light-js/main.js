// Functional Light JavaScript 

/*
 Imperative -> Focuses on describing how program operates --> Tells the computer what to do step by step 
 Declarative -> Focuses on what program should accomplish without explicity --> Tells computer what to do, leaving "how" behind 

  |-> comments should say why we need that --> what is it going to accomplish and why is that useful to us!


  Functions without a return keyword is a procedure  

  Functions can only call other functions if they call a procedure they become a procedure 
  input and output must be direct

  there can not be indirect input or output  like in side effect
*/


////////// Function Purity 

// !! not functional programming 🚫 ⬇️
function addNumber(x = 0, y = 0, z = 0, w = 0) { 
  var total = x + y + z + w; 
  console.log(total);
}

function extraNumber(x = 2, ...args) { 
  return addNumber(x, 40, ...args);
}


extraNumber(); // 42
extraNumber(3, 8, 11) // 62


// tuple is an array of elements | two values in an array 
// 
function tuple(x, y) { 
  return  [x + 1, y - 1];
}

var [a,b] = tuple(...[5,10]); 
a; // 6
b; // 9

// Function naming semantics 
// f(x) = 2x^2 + 3
function f(x) { 
  return 2* Math.pow(x,2) + 3; 
}

// Function: the semantic relationship between input and computed output ✅ ⬇️ [no input is a valid input, undefined is a valid output]
function shippingRate(size, weigh, speed) { 
  return ((size + 1) * weigh) + speed; 
}

// side effect -> they invalidate the function
function shippingRate2() { 
  rate = ((size + 1) * weight) + speed; 
}

var rate; 
var size = 12; 
var weight = 4; 
var speed = 5;
shippingRate(); 
rate; /// 57

size = 8; 
speed = 6; 
shippingRate(); 
rate; /// 42 

// the right way
function shippingRate3(size, weight, speed) { 
  return((size + 1) * weigh) + speed;
}

var rate; 
rate = shippingRate3(12,4,5); // 57
rate = shippingRate3(8, 4, 6) // 42


/*  
  Side Effects: 
      - I/0 (console, fles, etc)
      - Database Storage
      - NetworkCalls
      - DOM
      - TimeStamps
      - Random Numbers
      - CPU - Heat
      - Cpu Time Delay


      we must minimize  side effects
*/

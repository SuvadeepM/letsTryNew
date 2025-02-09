// variables in JS - var, let, const

const userId = 144553;
let accountEmamil = "suvadeep@gbitinc.com";
var password = `123456`;

// userId = 1445575; // not allowed
accountEmamil = "suvadeepmandal34@gmail.com"; // can be done
password = `1234567`; // can be

console.log(password);

// you can't reassign a const variable
// you can reassign a let variable
// you can reassign a var variable
// var is a global scope variable
// let is a block scope variable
// const is a block scope variable

console.table([accountEmamil, password, userId]);

/*  don't use var, use let and const 
because var is a global scope variable and it can be reassign
*/


// let's see
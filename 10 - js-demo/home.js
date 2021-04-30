/*
// Global scope and function scope
// Scope refers to the area in which you can access a variable
// Variables get declared in a scope
// Global scope actually refers to utils.js, home.js is continuation of the global scope
let productId = 12345; // declared in global scope

function showProductId() {
    console.log(productId);
}

showProductId();

// Best practice, usually developers creates just 1 variable on global scope as a const
// and include any variables that we have will become properties of that object
const app = {
    productId: 12345,
    userName: 'Joe',
    orderNumber: 789
};

function showAppName() {
    console.log(app.userName);
}

showAppName();

function showProductId() {
    let productId = 12345; // declared in function scope, accessible just inside of the function
    console.log(productId);
}

showProductId();

// Var and Hosting
productId = 456;

console.log(productId); // hosting is to access the variable before declaring it

var productId = 123; // change for let to fix it, avoid to use var

// Functions can be hoisted
// JS files get executed after two passes

showProductId();

function showProductId() {
    console.log(123);
}
*/

// Before was possible to use a variable without declaring.

productId = 1234; // is being declared on an object called window.

console.log(productId);
console.log(productId); // window is where the app is running

// Including this string force the code run in strict mode, which forces you to declare variables
'use stric';
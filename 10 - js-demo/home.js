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
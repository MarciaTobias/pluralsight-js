// Conditionals Using if
let price = 20;

if (price !== 15) {
    showMessage('discounted');
}

//§to fixed returns a string, to fix it we need use plus sign before the paratheses
// JS uses inacurate float num
if ( +(1.1 + 1.3).toFixed(2)  === 2.4) {
    let message = 'Hello'
    showMessage(message);
}


// Try to use always the curly braces always!!!
let price = 20;
if (price > 40) {
    showMessage('true');
} else {
    showMessage('false');
}


// Comparing == and ===.
//The first one converts the number to string
if (1 == "1") {
    showMessage('true');
} else {
    showMessage('false');
}

// Second compares the same type
if (1 === "1") {
    showMessage('true');
} else {
    showMessage('false');
}


// The Ternary Operator 
// (condition) ? true-statement : false-satatement

price = 20;
(price > 10) ? showMessage('yes') : showMessage('no');

price = 5;
// Best practice
let message = (price > 10) ? 'expensive' : 'cheap';
showMessage(message);

// Variables cannot be accessed outside of the block, for the old var, was possible

// Lopping with for()
// be careful with infinitive loops, you can get stuck with the web server

// While loop
let i = 4;
while (i > 0) {
    console.log(i);
}


// Do while, the test of the condition is tested after the code block
// 4, 3, 2, 1
let i = 4;
do {
    console.log(i);
    i--;
}
while (i > 0);

// -4
let i = -4;
do {
    console.log(i);
    i--;
}
while (i > 0);

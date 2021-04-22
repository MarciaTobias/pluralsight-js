/* Conditionals Using if
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
*/
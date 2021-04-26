// Function declaration or a function statement
function logMessage() {
    console.log('Here is a message');
}

// Function expression, best practice to give a name for the function, easir to debug too
let myFunction = function loggingFunction() {
    console.log("Here is another message");
}

logMessage();
myFunction();
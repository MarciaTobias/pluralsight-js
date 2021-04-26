/*
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


let myFunction = function loggingFunction(message, firstName) {
    console.log(message);
    console.log(firstName);
}

myFunction('Hello', 'John');

function getSecretCode(value) {

    // it's cleaner that way
    let code = value * 42;
    return code;
    //return value * 42
}

// best practice
let secretCode = getSecretCode(2);
showMessage( secretCode );
//showMessage( getSecretCode(2) );


//Function Scope, once the function completes execution, any parameters and local variable disappear 
// That's good because we can encapsulate some code and make sure it doesn't leak out into the surrouding code
let key = 42;

function getSecretCode(value) {

    let keyGenerator = function() {
        let key = 12;
        console.log('in keyGenerator: ', key);
        return key;
    }

    let code = value * keyGenerator();
    console.log(' in getSecretCode: ', key);//refers to the global variable key
    return code;

}

let secretCode = getSecretCode(2);
showMessage( secretCode );
*/

// New function
changePercentOff( 30 );
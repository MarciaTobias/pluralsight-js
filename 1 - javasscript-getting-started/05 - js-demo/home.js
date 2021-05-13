
/* 
Data Types in JS
- Numbers
- Operators Precedence
- Number Precision, Negative Numbers
- Strings ("", '', ``)
- Boolean
- Null and Undefined
- Objects
- Symbols (when we want a hidden a propertie of an object)

Display a text
let price = 49.99,
name = 'Hiking Boots',
discounted = false;
showMessage(discounted);

we can not start a variable with a number, the problem is with the source code.
should start wtih _ $ letter number
account, accountNumber, _account
token = simbol
declare variable = criar variable
variables names cannot have spaces, keywords
when declare a variable give a value

we need set a variable to a value
const price = 20;
showMessage(price);
Var Keyword
Codes executes from top to button
With var we don't get error as expected.. Best practices uses key let word insted of var
showMessage(price);
var price = 25;

Operator type of, is simbol that operates or changes some value
let price = 20.99;
showMessage(typeof price);
let price = 12;
showMessage(++price);
let price = 12;
showMessage(price++); // it increments 1 after shows the value
showMessage(price);

Precendent Operadores 
Multiplciation and division comes first that addition and subtraction. If you want by pass the roles just uses parenteses

Number Precision
let price = 1.1 + 1.3;
showMessage(price);

Negative Numbers
let amount = 0;
showMessage(--amount);

Strings
let message = "Hello \"World\"";
showMessage(message);
Interpolation - uses $ sign
let name = 'Andrea';
let message = `Hello ${name}`;
showMessage(message);

Manipulating Strings
it takes the message and save into message variable
substring smaller part of the string
let message = 'Hello';
message = message.toLowerCase();
message = message.toLowerCase();
showMessage(message);

Propertites = like a variable, it holds a single value on an object
let message = 'Hello';
message = message.length;
showMessage(typeof message);

let message = 'Hello';
message = message.substring(1);
showMessage(message);


let message = '123'
showMessage(message + 2);
the results will be 1232, adding a string 2 to the



Converting number to string
let amount = 124
amount = amount.toString()
showMessage(typeof amount);

This case Number is an object. The beginning of the string should be a number "123.12a" = 123.12
let amount = Number.parseFloat("123.12");
showMessage(typeof amount);

Used to flip or as a gate
let saved = true;
saved = !saved;
showMessage(saved);

let saved; //(undefined if is not inizialized the variable)
showMessage(typeof saved);

or if we want to wipe the value during the coding
let saved = 10;
saved = null; // best practices to use null insteod of undefined
showMessage(saved);
console.log(saved);

Symbols are advanced type. Person is an object that stores properties about a person
let person = {
    firstName: 'John',
    lastName: 'Adams'
};

showMessage(person.firstName);
*/


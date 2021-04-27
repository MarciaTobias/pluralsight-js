/*
// DOM - Document Object Model
// Objects has a several propoerties
// we access the properties using dot sintax, person.age (dot)

// How to create a symbol. It can used inside of an object to hide information, for example, salary, or plugin architecture
let mySymbol = Symbol();

let person = {
    name: "John",
    age: 32,
    partTime: false,
    [mySymbol]: 'secretInformation' //using quotes because is a variable name
};

person.age = 33;
person['age'] = 44;

showMessage(person.age);


let person = {
    name: "John",
    age: 32,
    partTime: false,
    // Methods are functions that can be attached to an object
    showInfo: function(realAge) {
        //showMessage('in showInfo');
        showMessage(this.name + ' is ' + realAge); //this refers to the name of THIS object (person),
        //to work with currently object

    }
};

person.showInfo(34);

// There is a big difference between passing an object to a function
// and passing a built-in type such as a string, a number or a boolean value to a function
let message = 'Hello';

function changeMessage(message) {
    message = 'Hi!'; // this get lost, because we are passing a string and not an object
}

// this take Hello and changes to Hi
changeMessage(message);

// this prints the hello
showMessage(message);

// When we pass objects we are able to change their properties and methods
let person = {
    name: "John",
    age: 32,
    partTime: false,
};

function incrementAge(person) {
    person.age++;
}
incrementAge( person )

showMessage(person.age);


// Standard built-in objects
let now = new Date();
showMessage( now.toDateString() );

showMessage( Math.abs(-42) );

let s = 'Hello';
showMessage( s.charAt(0));


// We can use JS with Node.js to run JS on the server, with Cordova
// Events such as a user typing an informations or clicking a button

const header = document.getElementById('message');

// that is the way to overrides css,
// get the element, access the style property and access the css property
header.style.color ='red';

// font-weight is in CSS. JS does not allow to have a dash in the name
header.style.fontWeight = '100';
*/

const button = document.getElementById('see-review');

button.addEventListener('click', function() {
    const review = document.getElementById('review');

    // acessing the class for this element
    // removes the d-none class and changes text button
    if(review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';

    } else {
        // add the d-none back
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
});
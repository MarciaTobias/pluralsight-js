
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

// Methods are functions that can be attached to an object

function showMessage(message) {
    // document is the webpage itself (JS object)
    // getElementById('message') is a method which has a property called textContent
    // we an object and a method, which returns another object which has a
    // property called textContent wich returns another object called textContent
    // and set that to the parameter message
    document.getElementById('message').textContent = message;
}

function changePercentOff(percentage) {
    document.getElementById('percent-off').textContent = percentage + "% OFF";
}
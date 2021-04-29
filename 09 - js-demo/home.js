
/*
const button = document.getElementById('see-review');

button.addEventListener('click', function() {

    const review = document.getElementById('review');

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    }
    else {
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
    

});


// Create and Initialize an Array
let values1 = [1, 2, 3]; // values has three elements

// Initialize an Array
let values2 = Array.of(1, 2, 3); // of is a method of the array object

// Best practice use the same data type in a array, it makes simpler
const values3 = ['a', 'b', 'c'];
console.log(values3);
console.log(typeof(values3)); // Array is not build-in data type
console.log(Array.isArray(values3)); // Method that checks if is an array

const values4 = ['a', 'b', 'c'];
values4[0] = 'aaa'; // how to change the value in a array
console.log(values4[0]);
*/

// Manipulating arrays using methods
const values = ['a', 'b', 'c'];
values.push('d', 'e', 'f'); // we can push one or more values
const last = values.pop();
const first = values.shift();
values.unshift('hello', 'world');
console.log(values, last, first);
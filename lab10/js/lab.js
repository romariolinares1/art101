// Author: Romario Linares <relinare@ucsc.edu>
// Date: 15 May 2023

// Creating public variable by finding HTML button by its ID
var myButton = document.getElementById('my-button');

// Function used from lab7
function sortedUserName() {
    // Grabs the input value from the input tag that has id 'user-name'
    var userInput = document.getElementById('user-name').value;
    var arrayInput = userInput.split('');
    var newInput = arrayInput.sort().join('');
    // Replaces the div with id output with p element
    var outputEl = document.getElementById('output');
    var newEl = document.createElement('p');
    outputEl.appendChild(newEl);
    outputEl.innerHTML = newInput;
}

// When button is clicked, it calls for sortedUserName() function
myButton.addEventListener('click', sortedUserName)
// Author: Romario Linares <relinare@ucsc.edu>
// Date: 4 May 2023

// Function squares number input for x
function rootInput(x) {
    var results = Math.sqrt(x);
    return results;
}

// Displays output in console to check if function is working
console.log("What is the square root of 10? ", rootInput(10));
console.log("What is the square root of 25? ", rootInput(25));

// Creating an array of number inputs
numArray = [49, 25, 10, 144, 441, 16, 9]
console.log("My number array is: ", numArray);

// Creating new variable that prints the output of the array inputs in rootInput(x) function
var firstResult = numArray.map(rootInput);
console.log("To test out if all the numbers in the array are square rooted: ", firstResult);

// Creating second variable that prints out the output of the array inputs with a new operation
var newResult = numArray.map(function(x) {
    var results = x / 2;
    return results;
})
console.log("Numbers in the array divided by 2: ", newResult);

var outputEl = document.getElementById("output");
outputEl.innerHTML = (
    "Original Array: " + "["+ numArray +"]" +
    "<br>Square Rooted Array: " + "["+ firstResult + "]" +
    "<br>Divided Array: " + "["+ newResult + "]" 
    );

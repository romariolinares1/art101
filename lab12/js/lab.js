// Author: Romario Linares <relinare@ucsc.edu>
// Date: 21 May 2023

// Takes string input
function sortingHat(str) {
    // Finds the length of the string input
    length = str.length;
    // Modulus operator to get a value in between 0 and 3
    mod = length % 4;
    console.log(mod);
    // Else if statement returns different houses based on what mod # is
    if (mod == 2) {
        return "Slytherin";
    }
    else if (mod == 0) {
        return "Gryffindor";
    }
    else if (mod == 1) {
        return "Ravenclaw";
    }
    else if (mod == 3) {
        return "Hufflepuff";
    }
}

// Creating button variable to find HTML element with "button" id
var button = document.getElementById("button");
// Button is given event listener and when clicked it will take the input value of the string and
// run it through sortingHat() function and return a string that changes div with id "output"
button.addEventListener("click", function() {
    var inputName = document.getElementById("input").value;
    var sortHouse = sortingHat(inputName);
    newText = "<p>The Sorting Hat has sorted you into " + sortHouse + "</p>";
    document.getElementById("output").innerHTML = newText;
})
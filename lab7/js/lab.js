// Author: Romario Linares <relinare@ucsc.edu>
// Date: 2 May 2023

// Function sortedUserName declares userName variable as user input and sorts the letters.
function sortedUserName() {
    console.log("if pop up twice then fix");
    var userName = window.prompt("What is your name user?");
    // Variable arrayName converts string userName to array.
    var arrayName = userName.split('');
    // Letters are sorted then the array is converted to string.
    return arrayName.sort().join('');
}

// Output shows final sortedName as string
var finalName = sortedUserName();
console.log(finalName);
document.writeln("Here is your sorted name: ", finalName, "</br>");
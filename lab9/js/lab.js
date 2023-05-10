// Author: Romario Linares <relinare@ucsc.edu>
// Date: 9 May 2023

// Creating new element for new1El
var outputEl = document.getElementById("output");
var new1El = document.createElement("p");

// Changing div with id "output" to a <p> tag
outputEl.appendChild(new1El);
outputEl.innerHTML = "Oh my goodness I changed into a p tag!";

// Creating new element for new2El
var outputEl2 = document.getElementById("output2");
var new2El = document.createElement("p");

// Changing div with id "output2" to a <p> tag
outputEl2.appendChild(new2El);
outputEl2.innerHTML = "This div a different p tag";

// Changing CSS features with HTML DOM Javascript
function changeCSS() {
    outputEl.style.fontFamily = 'Lucida Console';
    outputEl.style.textAlign = 'center';

    outputEl2.style.fontFamily = 'Lucida Console';
    outputEl2.style.textAlign = 'center';
    
    // Changing <h1> CSS
    var newHeader = document.getElementById("header");
    newHeader.style.fontFamily = 'VT323';
    newHeader.style.textAlign = 'center';
    newHeader.style.fontSize = '40px';
    newHeader.style.color = '#004f14';

    // Changing <h2> CSS by finding all with the same class name
    var newHeader2 = document.getElementsByClassName("header2");
    // Code that references all elements with "header2" class to change CSS is from: 
    // <https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbyclassname_loop>
    for (let i = 0; i < newHeader2.length; i++) {
        newHeader2[i].style.fontFamily = 'VT323';
        newHeader2[i].style.textAlign = 'center';
        newHeader2[i].style.fontSize = '40px';
        newHeader2[i].style.color = '#118a30';
    }

    // Changing <p> CSS by finding all with the same class name
    // Source for for loop is on line 38
    var newText = document.getElementsByClassName("text");
    for (let i = 0; i < newText.length; i++) {
        newText[i].style.fontFamily = 'Lucida Console';
        newText[i].style.textAlign = 'center';
    }

    // Changing CSS of div with 'content' ID
    var newContent = document.getElementById("content");
    newContent.style.backgroundColor = '#64a373';
    newContent.style.border = '20px groove';
    newContent.style.borderTopColor = '#26ff47';
    newContent.style.borderBottomColor = '#1d8617';
    newContent.style.borderLeftColor = '#1b7a18';
    newContent.style.borderRightColor = '#123e09';


    // Changing CSS of body
    document.body.style.backgroundColor = '#628069';
}
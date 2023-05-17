// Author: Romario Linares <relinare@ucsc.edu>
// Date: 16 May 2023

// Creating buttom elements through jQuery in each div section
$("#challenge").append("<button type='button' id='but1'>Click to see Challenge!</button>");
$("#problems").append("<button type='button' id='but2'>Click to see Problems!</button>");
$("#results").append("<button type='button' id='but3'>Click to see Results!</button>");

// Button click function for challenge button
$("#but1").click(function() {
    console.log("challenge work");
    $("#challenge").toggleClass("special");
});

// Button click function for problems button
$("#but2").click(function() {
    console.log("problems work");
    $("#problems").toggleClass("special");
});

// Button click function for results button
$("#but3").click(function() {
    console.log("results work");
    $("#results").toggleClass("special");
});

// Button click function for task X that changes the colors of every button
$("#but4").click(function() {
    console.log("button task work");
    $("#but1, #but2, #but3").toggleClass("change-color");
})
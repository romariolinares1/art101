// Author: Romario Linares <relinare@ucsc.edu>
// Date: 31 May 2023

// API for "charizard" pokemon was obtained through https://pokeapi.co/docs/v2#pokemon 
function getStuff() {
    console.log("Clicked!");
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/charizard/",
        type: "GET",
        data: {},
    })
    
    .done(function(data) {
        // Prints the full data for the pokemon with id of "charizard"
        console.log(data);
        // Outputs a list of the name, base experience, height, and weight data of the chosen pokemon
        $("#output").html("<p>" + "Name: " + data.name + ",\n" + "Base Experience: " + 
        data.base_experience + ",\n" + "Height: " + data.height + ",\n" + "Weight: " + data.weight);
    })
}

// On click feature for button to call for getStuff() function
$("button").click(getStuff);

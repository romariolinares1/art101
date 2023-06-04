// Author: Romario Linares <relinare@ucsc.edu>
// Date: 4 June 2023

$.ajax({
    url: "https://xkcd.com/info.0.json",
    data: {},
    type: "GET",
    dataType: "json",

    // Success function prints comicObj variable in console and 
    success: function (comicObj) {
      console.log(comicObj);
    },

    // Check to see if there is an error in API
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
    }
});
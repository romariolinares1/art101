// Author: Romario Linares <relinare@ucsc.edu>
// Date: 4 June 2023

$.ajax({
    url: "https://xkcd.com/614/info.0.json",
    data: {},
    type: "GET",
    dataType: "json",

    // Success function prints comicObj variable in console and return title and img
    success: function (comicObj) {
      console.log(comicObj);
      $("#output").html("<p>" + comicObj.title + "</p>");
      // Gives img the alt attribute by assigning it the alt of the comicObj
      $("#output").append("<img src =" + comicObj.img + " alt =\"" + comicObj.alt + "\">");
    },

    // Check to see if there is an error in API
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
    }
});
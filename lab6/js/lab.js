// Author: Romario Linares <relinare@ucsc.edu>
// Date: 1 May 2023

// Define myTransport array
myTransport = ["Honda Civic", "Metro Bus", "walking"];

// Creating myMainRide object
myMainRide = {
  make: "Honda",
  model: "Civic",
  color: "Chrome",
  year: 2010,
  // Defining function for age
  age: function() {
    return 2023 - this.year;
  }
}

// Output
document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");

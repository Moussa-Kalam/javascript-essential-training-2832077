// Find an element and add two different classes
document.querySelector(".maincontent").classList.add("start");
document.querySelector(".maincontent").classList.add("end");

// Remove only one of the new classes
document.querySelector(".maincontent").classList.remove("end");

// Add a new attribute to an element
document.querySelector("footer").setAttribute("id", "sitefooter");

//Request the value of the attribute added
let value = document.querySelector("footer").getAttribute("id");
console.log(value);

// Change the value of the attribute
document.querySelector("footer").setAttribute("id", "end");

/* 
Add an inline CSS to an element by specifying
the style property and setting its value
*/
document.querySelector(".site-title").style.backgroundColor = "green";
document.querySelector(".site-title").style.color = "white";
document.querySelector(".site-description").style.color = "red";
document.querySelector(".backpack__name").style.backgroundColor = "yellow";

/* 
Query the style property of an element in the console to 
get a list of all the style properties available.
*/
console.log(document.querySelector("main").style);

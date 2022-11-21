/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objects by calling their properties and using their methods in the console.
 */

import Laptop from "./Laptop.js";

// Create an instance of Laptop named laptop1
const laptop1 = new Laptop(
  "Dell",
  "French",
  "true",
  2,
  "8gb",
  "1 To",
  "AZERTY",
  2
);

console.log(laptop1);

// Create another instance of Laptop named laptop2
const laptop2 = new Laptop(
  "Lenovo",
  "English",
  "true",
  1,
  "16gb",
  "1 To",
  "QWERTY",
  1
);

console.log(laptop2);

// Change the brand, the language and the Keyboard of laptop 1
laptop1.newBrand("HP");
laptop1.newKeyboard("QWERTY");
laptop1.changeLang("English");
console.log("New laptop1:", laptop1);

// Change the RAM and the status of laptop2
laptop2.newRaw("8gb");
laptop2.newStatus("False");
console.log("New laptop2:", laptop2);

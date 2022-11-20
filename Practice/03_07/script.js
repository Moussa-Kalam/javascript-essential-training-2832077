/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const laptop = {
  brand: "Dell",
  language: "French",
  isNew: false,
  user: 2,
  specifications: {
    RAM: "8 gb",
    ROM: "1 To",
    keyboard: "AZERTY",
    charger: 2,
  },
};

console.log("The laptop object", laptop);

// Accessing properties using dot notation
console.log("My laptop's brand is", laptop.brand);
console.log("My laptop's specifications:", laptop.specifications);

// Accessing properties using bracket notations
console.log("My laptop's RAM is:", laptop["specifications"]["RAM"]);
console.log("Number of chargers:", laptop["specifications"]["charger"]);

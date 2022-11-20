/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const laptop = {
  brand: "Dell",
  language: "French",
  status: false,
  users: 2,
  specifications: {
    RAM: "8 gb",
    ROM: "1 To",
    keyboard: "AZERTY",
    charger: 2,
  },
  newBrand(brand) {
    this.brand = brand;
  },
  userNum(number) {
    this.users = number;
  },
  isNew(status) {
    this.status = status;
  },
  changeLang(lang) {
    this.language = lang;
  },
  newRam(ram) {
    this.RAM = ram;
  },
  newKeyboard(type) {
    this.keyboard = type;
  },
};

// Change the brand of my laptop
console.log("Current brand:", laptop.brand);
laptop.newBrand("Lenovo");
console.log("New brand:", laptop.brand);

// Change the language setting of the laptop
console.log("Current language set:", laptop.language);
laptop.changeLang("English");
console.log("New language set:", laptop.language);

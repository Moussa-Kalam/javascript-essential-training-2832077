/* Creating a class to build objects */

class Laptop {
  constructor(
    // Define parameters
    brand,
    language,
    isNew,
    users,
    specificationsRam,
    specificationsRom,
    specificationsK,
    specificationsC
  ) {
    // Define properties
    this.brand = brand;
    this.language = language;
    this.isNew = isNew;
    this.users = users;
    (this.specifications = {
      RAM: specificationsRam,
      ROM: specificationsRom,
      keyboard: specificationsK,
      charger: specificationsC,
    }),
      this.users;
  }
  // Define methods
  newBrand(brand) {
    this.brand = brand;
  }
  newStatus(isNew) {
    this.isNew = isNew;
  }
  changeLang(lang) {
    this.language = lang;
  }
  newRaw(ram) {
    this.RAM = ram;
  }
  newKeyboard(type) {
    this.keyboard = type;
  }
}

export default Laptop;

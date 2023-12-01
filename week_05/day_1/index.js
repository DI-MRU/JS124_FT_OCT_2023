try {
  class Car {
    constructor(brand, model, wheels, color, doors, hp) {
      this.brand = brand;
      this.model = model;
      this.wheels = wheels;
      this.color = color;
      this.doors = doors;
      this.hp = hp;
    }

    summaryClassic() {
      console.log(`-------Classic Summary-------`);
      console.log(`Brand: ${this.brand}`);
      console.log(`Model: ${this.model}`);
      console.log(`Wheels: ${this.wheels}`);
      console.log(`Color: ${this.color}`);
      console.log(`Doors: ${this.doors}`);
      console.log(`Horse Power: ${this.hp}`);
      console.log(`Safety: ${this.safety}`);
    }
  }

  let toyota = new Car("Toyota", "Hilux", 4, "Red", 2, 150);
  toyota.summaryClassic();

  console.log(toyota);
  console.log(JSON.stringify(toyota));

  let smolToyota = new Car("Toyota", "Vitz", 2, "White", 8, 50);
  toyota.smallVersion = smolToyota;
  smolToyota.features = ["airbag", "chips", "cup holder", "ironing board"];
  smolToyota.isActuallySmol = false;

  //   if (smolToyota.features.includes("chips"))
  //     throw new Error(`I hate chips! They make me fat!`);

  console.log(toyota); // Original object
  const toyotaJSON = JSON.stringify(toyota, null, 1);
  console.log(toyotaJSON); // String object
  const rebuiltToyota = JSON.parse(toyotaJSON);
  console.log(rebuiltToyota); // Rebuilt object

  //   toyota.summaryClassic();
  //   rebuiltToyota.summaryClassic();
} catch (err) {
  console.error(`OMG Something broke! Error: ${err}`);
} finally {
  console.log("Lorshinee is in class!");
}

console.log("Himanish is back!");

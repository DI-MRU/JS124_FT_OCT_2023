/* Recap functions vs objects
 ** Functions: Block of code which does something/processing
 ** Objects: Store/Data structure
 */

/*
 ** Car toyota;
 ** // I want to assign the car color
 ** toyota.color = "blue";
 */

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
console.log(toyota.brand, toyota.model);
toyota.safety = 5;
console.log(toyota);

let ford = new Car("Ford", "Ranger", 4, "Grey", 2, 150);
console.log(ford.brand);

// console.log(`-------Summary-------`);
// console.log(`Brand: ${toyota.brand}`);
// console.log(`Model: ${toyota.model}`);
// console.log(`Wheels: ${toyota.wheels}`);
// console.log(`Color: ${toyota.color}`);
// console.log(`Doors: ${toyota.doors}`);
// console.log(`Horse Power: ${toyota.hp}`);
// console.log(`Safety: ${toyota.safety}`);

// console.log(`-------Summary-------`);
// console.log(`Brand: ${ford.brand}`);
// console.log(`Model: ${ford.model}`);
// console.log(`Wheels: ${ford.wheels}`);
// console.log(`Color: ${ford.color}`);
// console.log(`Doors: ${ford.doors}`);
// console.log(`Horse Power: ${ford.hp}`);
// console.log(`Safety: ${ford.safety}`);

// function summaryClassic(car) {
//   console.log(`-------Classic Summary-------`);
//   console.log(`Brand: ${car.brand}`);
//   console.log(`Model: ${car.model}`);
//   console.log(`Wheels: ${car.wheels}`);
//   console.log(`Color: ${car.color}`);
//   console.log(`Doors: ${car.doors}`);
//   console.log(`Horse Power: ${car.hp}`);
//   console.log(`Safety: ${car.safety}`);
// }

// summaryClassic(toyota);
// summaryClassic(ford);

// let summaryArrow = (car) => {
//   console.log(`-------Arrow Summary-------`);
//   console.log(`Brand: ${car.brand}`);
//   console.log(`Model: ${car.model}`);
//   console.log(`Wheels: ${car.wheels}`);
//   console.log(`Color: ${car.color}`);
//   console.log(`Doors: ${car.doors}`);
//   console.log(`Horse Power: ${car.hp}`);
//   console.log(`Safety: ${car.safety}`);
// };

// summaryArrow(toyota);
// // summaryArrow = (car) => {
// //   console.log("ldfjglkjdflkgjdifljgkldf");
// // };
// summaryArrow(ford);

// let someNumber = 23974920357924;
// summaryArrow(someNumber);

toyota.summaryClassic();

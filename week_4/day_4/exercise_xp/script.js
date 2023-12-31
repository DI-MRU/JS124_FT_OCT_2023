// ex1
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// ex2
// function displayStudentInfo({ first, last }) {
//     return `Your full name is ${first} ${last}`;
// }

// const output = displayStudentInfo({ first: 'Elie', last: 'Schoppik' });
// console.log(output);

// ex3
// const users = { user1: 18273, user2: 92833, user3: 90315 };

// // Step 1: Convert object to array
// const usersArray = Object.entries(users);

// // Output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// console.log(usersArray);

// // Step 2: Multiply the user's ID by 2
// const modifiedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);

// // Output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// console.log(modifiedUsersArray);

// ex4
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);
// output: object

// ex5
// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };

// //   Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };


// The correct option is:
// // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };

// ex6
//1. Evaluate these (ie True or False)

// [2] === [2] // false
// {} === {} // false

// 2. What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number); // Output: 4
// console.log(object3.number); // Output: 4
// console.log(object4.number); // Output: 5



// Animal class
class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  
  // Mamal class, extends Animal
  class Mammal extends Animal {
    sound(noise) {
      return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}. ${noise}`;
    }
  }
  
  // Create a farmerCow object as an instance of Mammal
  const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
  
  // Call the sound method with the "moos" sound
  const cowSound = farmerCow.sound("Mooo!");
  console.log(cowSound);
  

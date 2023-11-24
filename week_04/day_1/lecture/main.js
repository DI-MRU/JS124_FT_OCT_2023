// let isCocaLiked = true;
// const priceStr = "Rs 30";
// var price = 30;

// // var newPrice = 100;
// var newPrice = 0;

// function printCocaPrice() {
//   //   let newPrice = 100;
//   //   console.log(price + 20);

//   //   var newPrice = 150;
//   newPrice = 150;
//   //   console.log("Rupee " + (price + 20));
//   //   console.warn("Rupee ", price + 20);
//   //   console.error(`Rupee ${price + 20}`);
//   console.log(`New price: ${newPrice}`);

//   function insideFunction() {
//     console.log("hello");
//   }

//   insideFunction();
// }

// printCocaPrice();

// // alert("Himanish");
// alert(newPrice);

// // const newPrice = 500;
// {
//   const newPrice = 200;
//   console.log(newPrice);
// }

// // Declare an arrow function
// const alertNewPrice = (price = 50) => {
//   //   let newNewerPrice = 2394;

//   console.log(typeof price);
//   alert(price);
// };

// // Call the arrow function
// alertNewPrice(100); // 100
// alertNewPrice(parseInt("500")); // 500
// alertNewPrice((239.94).toString()); // 239.94
// alertNewPrice("" + 239.94); // 239.94
// alertNewPrice(); // Empty

// // ternary operator
// let isCocaLiked = true;
// if (isCocaLiked) console.log("YAY We love coca!");
// else console.log("BOO We hate coca");

// let isColaLiked = false;

// isCocaLiked
//   ? console.log("YAY We love coca!")
//   : console.log("BOO We hate coca");

// isCocaLiked
//   ? isColaLiked
//     ? console.log("YAY We love coca cola!")
//     : console.log("YAY We love coca!")
//   : console.log("BOO We hate coca");

// const returnPetName = (petStartName) => `${petStartName}${"ger"}`;

// const result = returnPetName("Ginnnn");
// console.log(result);

studentList = ["Jeremy", "Lorshinee", "Alexis", "Jevin", "Himanish"];

// console.error(studentList[0]);
// console.error(studentList[1]);
// console.error(studentList[2]);
// console.error(studentList[3]);
// console.error(studentList[4]);

// console.warn(`Student list length: ${studentList.length}`);
// for (var i = 0; i < studentList.length; i++) {
//   console.info(studentList[i]);
// }
// console.log("------------");
// // console.warn(studentList[1][2]);
// studentList.forEach((element) => {
//   console.info(element);
// });

// studentList.forEach((element, index, arr) => {
//   console.info(`[${index}] | ${element} | ${arr}`);
// });

numbersList = [1, 5, 10, 50];
numbersList.forEach((element, index, arr) => {
  arr[index] = element * 10;
});

// console.log(numbersList);
console.log(`Some: ${numbersList.some((el) => el % 10 == 0)}`);
console.log(`Every: ${numbersList.every((el) => el % 10 == 0)}`);
console.log(`Includes: ${numbersList.includes(250)}`);
// map
// flat
// filter

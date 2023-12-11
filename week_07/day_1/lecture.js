// let greeting = "Yo";
// let firstName = "Alexis";

// for (let i = 0; i < 10; i++) {
//   console.log(`[${i + 1}] ${greeting} ${firstName}!`);
// }

// // ["Jeremy", "Himanish", "Alexis", "Jevin"]

// // Index 0 - Jeremy
// // Position 1 - Jeremy

// console.log(__dirname);
// console.log(__filename);

// const name = "Mike Taylor";

// // function sayGreeting(name) {

// // }

// // const sayGreeting = (name) => {

// // }

// const greeting = function (name) {
//   console.log(`Hello ${name}, welcome to NodeJS`);
// };

// greeting(name);

// const { someGreetingFunc, greetingsList } = require("./greeting_cjs");
// import { sayGreeting, greetingsList } from "./greeting_es6.js";

// // sayGreeting("Tanikete", "Hello");
// for (let i = 0; i < greetingsList.length; i++) {
//   sayGreeting("Himanish", greetingsList[i]);
// }

// Semantic Versioning
// MAJOR.MINOR.PATCH
// 0.214.2
// -> MAJOR CHANGE
// 1.0.0
// -> MAJOR CHANGE
// 2.0.0
// -> PATCH CHANGE
// 2.0.1
// -> MINOR CHANGE
// 2.1.0

// import * as path from "path";

// const products_path = "../../week_06/day_5/node_preview/index.html";
// const products_file = path.basename(products_path);

// console.log(products_file); // index.html

// const fs = require("fs");
// import * as fs from "fs";

// // const data = fs.readFileSync("info.txt", "utf-8");
// // console.log(data); // file content
// // console.log("The file has been read");

// const info = fs.readFile("info.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// fs.writeFile("test.txt", "Hello World!", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Write operation complete.");
//   }
// });

import * as http from "http";
import * as fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const info = fs.readFile("himanish.html", "utf-8", (err, data) => {
      res.end(data);
    });
  } else if (req.url === "/about") {
    res.end("<h1>About page</h1>");
  } else {
    res.end("page not found");
  }
});

server.listen(80, "localhost", () => {
  console.log("Server is listening at localhost on port 80");
});

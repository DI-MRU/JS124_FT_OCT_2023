// Make a node server

// Create a server that can listen to a request and respond with a file for example:
// if you go to the http://localhost:3000/ endpoint, it should display the index.html page
// if you go to the http://localhost:3000/other endpoint, it should display the second.html page
// if you go to the http://localhost:3000/third endpoint, it should display the third.html page

const express = require("express");
const app = express();
const PORT = 50035;

app.use(express.static("assets"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/other", (req, res) => {
  res.sendFile(__dirname + "/second.html");
});

app.get("/third", (req, res) => {
  res.sendFile(__dirname + "/third.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

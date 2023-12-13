const express = require("express");

const app = express();

app.get("/emoji", (req, res) => {
  const randomEmoji = getrandomEmoji();
  res.send(randomEmoji);
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  // Add more emoji objects
];

const getrandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};

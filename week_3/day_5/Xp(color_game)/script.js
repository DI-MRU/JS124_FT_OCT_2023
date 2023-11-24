let color = null;
let mousedown = false;

let body = document.body;
let colorContainer = document.getElementById("sidebar");
let fillContainer = document.getElementById("main");
let clearButton = document.querySelector("button");

// Create a 50x50 grid
const gridSize = 50;

for (let i = 0; i < (gridSize * gridSize); i++) {
  const gridBlock = document.createElement("div");
  fillContainer.appendChild(gridBlock);
}

clearButton.addEventListener("click", function () {
  let fillBlocks = fillContainer.querySelectorAll("div");
  for (let fillBlock of fillBlocks) {
    fillBlock.style.backgroundColor = "white";
  }
});

body.addEventListener("mousedown", function () {
  mousedown = true;
});

body.addEventListener("mouseup", function () {
  mousedown = false;
});

colorContainer.addEventListener("click", function (event) {
  color = event.target.style.backgroundColor;
});

fillContainer.addEventListener("mousedown", function (event) {
  if (color != null) event.target.style.backgroundColor = color;
});

fillContainer.addEventListener("mouseover", function (event) {
  if (mousedown && color != null) event.target.style.backgroundColor = color;
});

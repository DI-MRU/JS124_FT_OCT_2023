// allTruthy(true, true, true) ➞ true
// allTruthy(true, false, true) ➞ false
// allTruthy(5, 4, 3, 2, 1, 0) ➞ false

function allTruthy(...args) {
  console.log(args);
  // Receive as many arguments/parameters as provided
  let truthy = true; // Start with win condition
  console.log(`Truthy start: ${truthy}`);
  for (let i = 0; i < args.length; i++) {
    console.log(`Iteration ${i}`);
    // Loop through arguments
    if (!args[i]) {
      truthy = false; // If any argument is not truthy, fail it
      break; // Exit the loop
    }
  }

  console.log(`Truthy end: ${truthy}`);
  return truthy; // Return the value
}

console.log(allTruthy(true, true, true));
console.log(allTruthy(true, false, true));
console.log(allTruthy(5, 4, 3, 2, 1, 0));

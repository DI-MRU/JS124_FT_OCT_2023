// Common JS

function sayGreeting(name, greeting) {
  console.log(`${greeting} ${name}`);
}

greetingsList = ["Yo", "Hello", "Hi", "Bonjour", "Salut", "Namaste", "Ni Hao"];

// module.exports = sayGreeting;
module.exports = { someGreetingFunc: sayGreeting, greetingsList };

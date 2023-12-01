const First = () => console.log("First");
const Second = () => setTimeout(() => console.log("Second"), 500);
const Third = () => console.log("Third");
// synchronous
const dispaly = () => {
  First();
  Second();
  Third();
};

dispaly();

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const foo = async () => console.log("First");
const bar = async () => await delay(500).then(() => console.log("Second"));
const baz = async () => console.log("Third");

// asynchronous
const order = async () => {
  await foo();
  await bar();
  await baz();
};

order();

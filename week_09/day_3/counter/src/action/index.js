const increment = (num = 1) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
const decrement = (num = 1) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};
export { increment, decrement };

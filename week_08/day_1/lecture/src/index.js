import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Cat from "./Cat";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// root.render(<Cat />);

// console.log("Hello Tanikete");
// const myName = "Jevin";
// const myelement = (
//   <>
//     <h1>
//       I Love JSX! <b>Just kidding! {myName + 30} doesn't like JSX</b>
//     </h1>
//     <input type="password" name="password" />
//   </>
// );
// root.render(myelement, document.getElementById("root"));
// console.log("Hello Jeremy");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import TodayLesson from "./TodayLesson";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import lessonReducer from "./changeLesson";

const initialState = {
  lesson: "Developers Institute Week 9 Day 1",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: {
    lesson: lessonReducer,
  },
  preloadedState: initialState,
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodayLesson />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

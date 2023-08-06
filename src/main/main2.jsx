import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App2 from "../apps/App2";
import "../index.css";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../toolkit/slices/accountSlice";
import bonusReducer from "../toolkit/slices/bonusSlice";
import { Provider } from "react-redux";
import interestReducer from "../redux/reducers/interest";

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    interest: interestReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App2 />
    </Provider>
  </>
);

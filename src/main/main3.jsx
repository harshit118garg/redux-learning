import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App3 from "../apps/App3";
import usersReducer from "../toolkit/slices/userSlices/users";

const store = configureStore({
  reducer: usersReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App3 />
    </Provider>
  </>
);

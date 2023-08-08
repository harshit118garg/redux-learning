import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App4 from "../apps/App4";
import { adminApi } from "../api/adminSlice";

const store = configureStore({
  reducer: {
    // account: accountReducer,
    // bonus: bonusReducer,
    // interest: interestReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(adminApi.middleware),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App4 />
    </Provider>
  </>
);

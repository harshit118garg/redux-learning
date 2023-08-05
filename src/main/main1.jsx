import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import App1 from "../apps/App1";
import "../index.css";
import { accountsReducer } from "../redux/reducers/account";
import { bonusReducer } from "../redux/reducers/bonus";
import { Provider } from "react-redux";

const store = createStore(
  combineReducers({ account: accountsReducer, bonus: bonusReducer }),
  applyMiddleware(logger, thunk)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App1 />
    </Provider>
  </>
);

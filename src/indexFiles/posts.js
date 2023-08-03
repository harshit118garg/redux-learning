import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

/**
 
Make a Async type of call from a new reducer to any online API like JSON Placeholder Posts. Also show proper loading messages in console. Like - loading posts..., posts loaded , posts fetching failed. Also add those posts to a state of reducer in a sorted manner (sort by title)

PlaceHolder API => `https://jsonplaceholder.typicode.com/users`

**/

// action names
const getRequestFulfilled = "getRequestFulfilled";
const getRequestPending = "getRequestPending";
const getRequestFailed = "getRequestFailed";

const store = createStore(postsReducer, applyMiddleware(logger, thunk));

// reducer
function postsReducer(state = { posts: [] }, action) {
  const { type, payload, error } = action;
  switch (type) {
    case getRequestPending:
      return {
        posts: [],
        pending: true,
        error: "",
      };
    case getRequestFulfilled:
      return {
        posts: payload,
        pending: false,
        error: "",
      };
    case getRequestFailed:
      return {
        posts: [],
        pending: false,
        error: error.message,
      };
    default:
      return state;
  }
}

// action creators
function getPosts(_userId, sortedData = false) {
  return async (dispatch) => {
    try {
      dispatch(getRequestPendingAction());
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${_userId}`
      );
      let payloadData = data;
      if (sortedData) {
        payloadData = data.sort((a, b) => {
          let una = a.title.toLowerCase(),
            unb = b.title.toLowerCase();
          if (una < unb) return -1;
          if (una > unb) return 1;
          return 0;
        });
      }
      dispatch(getRequestFulfilledAction(payloadData));
    } catch (error) {
      dispatch(getRequestFailedAction(error));
    }
  };
}

function getRequestPendingAction() {
  return { type: getRequestPending };
}

function getRequestFulfilledAction(_payload) {
  return { type: getRequestFulfilled, payload: _payload };
}

function getRequestFailedAction(_error) {
  return { type: getRequestFailed, error: _error };
}

// action dispatch
let sortedData = true;
store.dispatch(getPosts(3, sortedData));

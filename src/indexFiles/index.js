import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// action names constants
const INC = "account/increment";
const DEC = "account/decrement";
const INCBYAMT = "account/incrementByAmount";
const DEBYAMT = "account/decrementByAmount";
const GETUSERACCOUNT_PENDING = "account/getUser/Pending";
const GETUSERACCOUNT_SUCCESS = "account/getUser/Success";
const GETUSERACCOUNT_FAILED = "account/getUser/Failed";
const INCBONUS = "bonus/increment";

// store config
const store = createStore(
  combineReducers({ account: accountsReducer, bonus: bonusReducer }),
  applyMiddleware(logger.default, thunk.default)
);

// account reducer function
function accountsReducer(state = { amount: 75 }, action) {
  switch (action.type) {
    case GETUSERACCOUNT_SUCCESS:
      return { amount: action.payload, pending: false };
    case GETUSERACCOUNT_FAILED:
      return { ...state, error: action.error, pending: false };
    case GETUSERACCOUNT_PENDING:
      return { ...state, pending: true };
    case INC:
      return { amount: state.amount + 2 };
    case DEC:
      return { amount: state.amount - 2 };
    case INCBYAMT:
      return { amount: state.amount + action.payload };
    case DEBYAMT:
      return { amount: state.amount - action.payload };

    default:
      return state;
  }
}

// bonus reducer function
function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case INCBONUS:
      return { points: state.points + 5 };
    case INCBYAMT:
      if (action.payload >= 150) return { points: state.points + 5 };

    default:
      return state;
  }
}

// action creators
function getUser(_id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getUserAccountPending());
      const { data } = await axios.get(`http://localhost:3000/accounts/${_id}`);
      dispatch(getUserAccountSuccess(data.amount));
    } catch (error) {
      dispatch(getUserAccountFailed(error.message));
    }
  };
}

function getUserAccountPending() {
  return { type: GETUSERACCOUNT_PENDING };
}
function getUserAccountSuccess(_payload) {
  return { type: GETUSERACCOUNT_SUCCESS, payload: _payload };
}
function getUserAccountFailed(error) {
  return { type: GETUSERACCOUNT_FAILED, error: error };
}
function increment() {
  return { type: INC };
}
function incrementBonus() {
  return { type: INCBONUS };
}
function decrement() {
  return { type: DEC };
}
function incrementBy(_payload) {
  return { type: INCBYAMT, payload: _payload };
}
function decrementBy(_payload) {
  return { type: DEBYAMT, payload: _payload };
}

// dispatch action with payload

store.dispatch(getUser(3));
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(incrementBy(150));
// store.dispatch(decrementBy(8));
// store.dispatch(incrementBonus());

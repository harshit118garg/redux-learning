import axios from "axios";

// action names constants
export const INC = "account/increment";
export const DEC = "account/decrement";
export const INCBYAMT = "account/incrementByAmount";
export const DEBYAMT = "account/decrementByAmount";
export const GETUSERACCOUNT_PENDING = "account/getUser/Pending";
export const GETUSERACCOUNT_SUCCESS = "account/getUser/Success";
export const GETUSERACCOUNT_FAILED = "account/getUser/Failed";
export const INCBONUS = "bonus/increment";

// action creators
export function getUser(_id) {
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

export function getUserAccountPending() {
  return { type: GETUSERACCOUNT_PENDING };
}
export function getUserAccountSuccess(_payload) {
  return { type: GETUSERACCOUNT_SUCCESS, payload: _payload };
}
export function getUserAccountFailed(error) {
  return { type: GETUSERACCOUNT_FAILED, error: error };
}
export function increment() {
  return { type: INC };
}
export function incrementBonus() {
  return { type: INCBONUS };
}
export function decrement() {
  return { type: DEC };
}
export function incrementBy(_payload) {
  return { type: INCBYAMT, payload: _payload };
}
export function decrementBy(_payload) {
  return { type: DEBYAMT, payload: _payload };
}

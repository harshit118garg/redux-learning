import {
  DEBYAMT,
  DEC,
  GETUSERACCOUNT_FAILED,
  GETUSERACCOUNT_PENDING,
  GETUSERACCOUNT_SUCCESS,
  INC,
  INCBYAMT,
} from "../actions";

// account reducer function
export function accountsReducer(state = { amount: 75 }, action) {
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
      return { amount: state.amount + Number(action.payload) };
    case DEBYAMT:
      return { amount: state.amount - Number(action.payload) };

    default:
      return state;
  }
}

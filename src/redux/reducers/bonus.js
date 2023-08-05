import { INCBONUS, INCBYAMT } from "../actions";

// bonus reducer function
export function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case INCBONUS:
      return { points: state.points + 5 };
    case INCBYAMT:
      if (action.payload >= 150) return { points: state.points + 5 };

    default:
      return state;
  }
}

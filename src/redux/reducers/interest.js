import { createAction, createReducer } from "@reduxjs/toolkit";

export const rateIncrement = createAction("interest/increment");
export const stepRateIncrement = createAction("interest/stepRateIncrement");

const initialState = { rate: 2 };

const interestReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(rateIncrement, (state) => {
      state.rate++;
    })
    .addCase(stepRateIncrement, (state, action) => {
      state.rate += Number(action.payload);
    });
});

export default interestReducer;

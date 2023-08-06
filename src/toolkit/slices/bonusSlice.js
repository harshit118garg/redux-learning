import { createSlice, createAction } from "@reduxjs/toolkit";

export const bonusIncAmt = createAction("account/incrementByAmount");

const initialState = {
  points: 0,
};

export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 5;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(bonusIncAmt, (state, action) => {
      if (action.payload > 150) {
        state.points += 2;
      }
    });
  },
});

export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;

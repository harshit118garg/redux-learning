import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  amount: 75,
};

export const fetchUserAccount = createAsyncThunk(
  "account/getUser",
  async (userId, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:3000/accounts/${userId}`
    );
    return data;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 2;
    },
    decrement: (state) => {
      state.amount -= 2;
    },
    incrementByAmount: (state, action) => {
      state.amount += Number(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAccount.fulfilled, (state, action) => {
        state.amount = action.payload.amount;
        state.pending = false;
      })
      .addCase(fetchUserAccount.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchUserAccount.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;

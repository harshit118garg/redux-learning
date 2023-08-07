import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  error: "",
  pending: false,
};

export const fetchUserData = createAsyncThunk(
  "users/fetchUsers",
  async (thunkAPI) => {
    const { data } = await axios.get(`http://localhost:3000/users`);
    return data;
  }
);

export const addUserData = createAsyncThunk(
  "users/addUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/users`,
        userData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const userUpdateData = createAsyncThunk(
  "users/updateUser",
  async (updateUserData, thunkAPI) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/users/${updateUserData.id}`,
        updateUserData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteUserData = createAsyncThunk(
  "users/deleteUser",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/users/${userId}`
      );
      return userId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.users = action.payload;
        state.pending = false;
      })
      .addCase(fetchUserData.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(addUserData.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.pending = false;
      })
      .addCase(addUserData.pending, (state) => {
        state.pending = true;
      })
      .addCase(addUserData.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(userUpdateData.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        state.users = state.users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
        state.pending = false;
      })
      .addCase(userUpdateData.pending, (state) => {
        state.pending = true;
      })
      .addCase(userUpdateData.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(deleteUserData.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (user) => user.id !== Number(action.payload)
        );
        state.pending = false;
      })
      .addCase(deleteUserData.pending, (state) => {
        state.pending = true;
      })
      .addCase(deleteUserData.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default usersSlice.reducer;

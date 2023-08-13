import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchItems,
  addItem,
  updateItem,
  deleteItem,
} from "../../../api/cartApi";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchItemsAsync = createAsyncThunk("cart/fetchItems", async () => {
  const response = await fetchItems();
  return response.data;
});

export const addItemAsync = createAsyncThunk("cart/addItem", async (item) => {
  const { id, brand, price } = item;
  const response = await addItem({ id, brand, price, quantity: 1 });
  return response.data;
});

export const deleteItemAsync = createAsyncThunk(
  "cart/deleteItem",
  async (id) => {
    await deleteItem(id);
    return id;
  }
);

export const updateItemAsync = createAsyncThunk(
  "cart/updateItem",
  async ({id, modifiedItem}) => {
    const response = await updateItem(id, modifiedItem);
    return response.data;
  }
);

export const itemSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItemsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(addItemAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(deleteItemAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(updateItemAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      });
  },
});

export default itemSlice.reducer;

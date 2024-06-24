import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: 0,
  list: [],
};

export const fetchTodos = createAsyncThunk("counter/fetchTodos", async () => {
  try {
    const response = await axios.get("http://localhost:3000/XitiProdaj");
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

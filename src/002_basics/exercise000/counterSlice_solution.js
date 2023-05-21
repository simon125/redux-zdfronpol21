import { createSlice } from "@reduxjs/toolkit";

const anotherCounterSlice = createSlice({
  name: "anotherCounter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

// selectors
export const selectValue = (state) => state.counter2.value;

export const { decrement, increment } = anotherCounterSlice.actions;

export default anotherCounterSlice.reducer;

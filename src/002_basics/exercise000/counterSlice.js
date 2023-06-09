import { createSlice } from "@reduxjs/toolkit";

const anotherCounterSlice = createSlice({
  name: "anotherCounter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrement: (state, action) => {
      console.log(action.type);
      console.log(action.payload);

      state.value = state.value - action.payload;
    },
  },
});

// selectors
export const selectValue = (state) => state.counter2.value;

export const { decrement, increment } = anotherCounterSlice.actions;

export default anotherCounterSlice.reducer;

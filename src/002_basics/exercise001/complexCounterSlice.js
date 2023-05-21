import { createSlice } from "@reduxjs/toolkit";

const complexCounterSlice = createSlice({
  name: "complexCounter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrement: (state, action) => {
      state.value = state.value - action.payload;
    },
  },
});

export const selectComplexCounterValue = (state) => state.complexCounter.value;

export const { decrement, increment } = complexCounterSlice.actions;

export default complexCounterSlice.reducer;

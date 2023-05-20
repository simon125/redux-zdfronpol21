import { createSlice } from "@reduxjs/toolkit";

export const complexCounterSlice = createSlice({
  initialState: {
    value: 0,
  },
  name: "complexCounter",
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement } = complexCounterSlice.actions;

export const selectCounterValue = (state) => state.complexCounter.value;

export default complexCounterSlice.reducer;

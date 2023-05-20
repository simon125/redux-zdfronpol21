import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  initialState: 0,
  name: "test",
});

export const store = configureStore({
  reducer: {
    temp: slice.reducer,
  },
});

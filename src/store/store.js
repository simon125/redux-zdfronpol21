import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    temp: 0,
  },
});

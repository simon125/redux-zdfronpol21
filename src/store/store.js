import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../001_setup/counterSlice";
/**
 * Tworzenie stora - obiekt który trzyma nasz stan reduxowy
 */
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

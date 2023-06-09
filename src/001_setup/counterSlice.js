import { createSlice } from "@reduxjs/toolkit";

// const [state, setState ] = useState(false)

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 2,
    poweredValue: 4,
    showPoweredValue: true,
  },
  /**
   * reducery = to takie funkcje określone przez nas (programistów)
   * które mówią w jaki sposób możemy zaktualizwoać nasz stan
   */
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
      state.poweredValue = state.value * state.value;
    },
    decrement: (state) => {
      state.value = state.value - 1;
      state.poweredValue = state.value * state.value;
    },
    resetCounter: (state) => {
      state.value = 0;
      state.poweredValue = 0;
    },
    toggleShowPoweredValue: (state) => {
      state.showPoweredValue = !state.showPoweredValue;
    },
  },
});

export const { decrement, increment, resetCounter, toggleShowPoweredValue } =
  counterSlice.actions;

export default counterSlice.reducer;

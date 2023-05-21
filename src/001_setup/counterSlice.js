import { createSlice } from "@reduxjs/toolkit";

// createSlice "odpowiednik" reactowego useStatu ALE na sterydach
// useState({INITIAL STATE})

const counterSlice = createSlice({
  name: "counter", // nazwa slica Ty wybierasz słowo
  initialState: {
    value: 100,
  },
  reducers: {},
});

export default counterSlice.reducer;

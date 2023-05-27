import { createSlice } from "@reduxjs/toolkit";

const counterWithApiSlice = createSlice({
  name: "counterWithApi",
  initialState: {
    value: 0,
  },
  reducers: {},
});

// selectors

export default counterWithApiSlice.reducer;

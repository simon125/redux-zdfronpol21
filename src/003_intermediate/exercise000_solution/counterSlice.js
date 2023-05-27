import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCounter = createAsyncThunk(
  "counter/getCounter",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    const resp = await fetch("http://localhost:3010/counter");
    const data = await resp.json();

    return fulfillWithValue(data.value);
  }
);

export const updateCounter = createAsyncThunk(
  "counter/updateCounter",
  async (newValue, { fulfillWithValue, rejectWithValue }) => {
    const resp = await fetch("http://localhost:3010/counter", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: newValue }),
    });
    const data = await resp.json();

    return fulfillWithValue(data.value);
  }
);

const counterWithApiSlice = createSlice({
  name: "counterWithApi",
  initialState: {
    value: 0,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCounter.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(getCounter.rejected, (state) => {
        state.value = 0;
      })
      .addCase(updateCounter.fulfilled, (state, action) => {
        console.log(action.payload);
        state.value = action.payload;
      });
  },
});

// selectors
export const selectValue = (state) => 2; // state.counterWithApi.value;

export default counterWithApiSlice.reducer;

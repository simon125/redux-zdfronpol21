import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  filters: {
    ageFilter: "",
    searchPhrase: "",
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      const idToDelete = action.payload;
      state.users = state.users.filter((user) => user.id !== idToDelete);
    },
    resetState: () => initialState,
  },
});

export const selectUsers = (state) => state.usersState.users;

export const { addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  initialState: {
    users: [],
    filter: "ALL", // possible values: ALL UNDERAGE ADULTS
  },
  name: "users",
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addUser, removeUser, setFilter } = usersSlice.actions;

export const selectUsers = (state) =>
  state.users.users.filter((user) => {
    if (state.users.filter === "ALL") return true;

    if (state.users.filter === "UNDERAGE" && user.age < 18) {
      return true;
    }

    if (state.users.filter === "ADULTS" && user.age >= 18) {
      return true;
    }

    return false;
  });

export const selectTotalAmountOfUsers = (state) => state.users.users.length;

export const selectFiltredAmountOfUsers = (state) => selectUsers(state).length;

export const selectSelectedFilter = (state) => state.users.filter;

export default usersSlice.reducer;

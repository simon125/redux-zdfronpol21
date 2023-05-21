import { createSlice } from "@reduxjs/toolkit";

const todosExampleSlice = createSlice({
  name: "todosExample",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todosExampleSlice.actions;

export default todosExampleSlice.reducer;

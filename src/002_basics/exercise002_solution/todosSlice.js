import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  initialState: {
    todos: [],
  },
  name: "todos",
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todosSlice.actions;

export const selectTodos = (state) => state.todos.todos;

export default todosSlice.reducer;

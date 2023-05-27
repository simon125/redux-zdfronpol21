import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  searchPhrase: "",
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    setSearchPhrase: (state, action) => {
      state.searchPhrase = action.payload; // wartość z inputa event.target.value
    },
  },
});

// slektory - do wyciągania danych (tych które chcemy w danym komponencie)

// export const selectTodos = (state) => {
//   return state.todoList.todos.filter((todo) => {
//     if (todo.includes(state.todoList.searchPhrase)) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };

export const selectTodos = (state) =>
  state.todoList.todos.filter((todo) =>
    todo.includes(state.todoList.searchPhrase)
  );

// ⭐⭐⭐ ultra oczyszczona wersja
export const selectTodos1 = ({ todoList }) =>
  todoList.todos.filter((todo) => todo.includes(todoList.searchPhrase));

export const selectTotalNumberOfTodos = (state) => state.todoList.todos.length;

export const selectNumberOfCharachters = (state) =>
  state.todoList.todos.join("").length;

export const selectNumberOfWordsWithLessThan5Charchters = (state) => {
  // stworzyć na podstawie tablicy ze stanu nową tablice ale tylko z wyrazami które mają mniej niż 5 znaków
  // zwrócić długosć tablicy stworzonej w poprzednim punkcie
  const newTodos = state.todoList.todos.filter((todo) => todo.length < 5);

  return newTodos.length;
};

export const selectSearchPhrase = (state) => state.todoList.searchPhrase;

// akcje - to co można zdipsatchować

export const { addTodo, resetState, setSearchPhrase } = todoListSlice.actions;

// reducer - kawałek naszego stanu który trzeba umieścić w storze

export default todoListSlice.reducer;

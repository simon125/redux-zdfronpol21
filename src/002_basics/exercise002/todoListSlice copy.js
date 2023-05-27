import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  searchPhrase: "",
  // to co poniej jest tylko w celach demonstracyjnych
  // obrazuje to jak duży i skomplikowany może być stan
  wrwer: [],
  dsgsf: [],
  dfgdfg: [],
  sdfsd: [],
  werwe: [],
  as: [],
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
    resetState: (state) => {
      // żeby zresetować stan nie musimy resetować każdego kawałka osobno
      // state.as = [];
      // state.dfgdfg = [];
      // state.sdfsd = [];
      // state.todos = [];
      // dzięki temu że initialState jest w osobnej zmiennej
      // moge tą zmienną wykorzystać do zresetowania stanu

      // przykład resetowania stanu za pomocą przypisania initalState do state
      // state = initialState;
      // ekwiwalent przypisania - to co akcja zwraca będzie nowym stanem
      return initialState;
    },
  },
});

// slektory - do wyciągania danych (tych które chcemy w danym komponencie)

export const selectTodos = (state) => state.todoList.todos;

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

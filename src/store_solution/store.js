import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../002_basics/exercise000/counterSlice";
import complexCounterReducer from "../002_basics/exercise001/complexCounterSlice";
import todosReducer from "../002_basics/exercise002/todosSlice";
import usersReducer from "../002_basics/exercise003/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    complexCounter: complexCounterReducer,
    todos: todosReducer,
    users: usersReducer,
  },
});

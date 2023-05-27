import { configureStore } from "@reduxjs/toolkit";

import couterReducer from "../001_setup/counterSlice";
import anotherCounterReducer from "../002_basics/exercise000/counterSlice";
import complexCounterReducer from "../002_basics/exercise001/complexCounterSlice";
import todosExampleReducer from "../002_basics/sliceExample002";
import todoListReducer from "../002_basics/exercise002/todoListSlice";
import usersReducer from "../002_basics/exercise003/usersSlice";
import asyncCounterReducer from "../003_intermediate/asyncCounterSliceExample";

export const store = configureStore({
  reducer: {
    counter: couterReducer,
    counter2: anotherCounterReducer,
    complexCounter: complexCounterReducer,
    todosExample: todosExampleReducer,
    todoList: todoListReducer,
    usersState: usersReducer,
    asyncCounter: asyncCounterReducer,
  },
});

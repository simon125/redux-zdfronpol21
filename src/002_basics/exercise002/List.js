import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "./todoListSlice";

export const List = () => {
  // podejście 1 - inlinowy selector
  // const todos = useSelector((state) => state.todoList.todos);
  // podejscie 2 - selector wyciągniety do funkcji zewnętrznej - najczęściej do pliku ze slicem
  const todos = useSelector(selectTodos);

  return (
    <ul>
      <li style={{ listStyle: "none" }}>
        <b>TODOS:</b>
      </li>
      {todos.map((todo) => (
        <li key={todo}>{todo} </li>
      ))}
    </ul>
  );
};

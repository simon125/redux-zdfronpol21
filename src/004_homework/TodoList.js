import React, { useState } from "react";
import { Filters } from "./Filters";
import { List } from "./List";

export const TodoListHomework = () => {
  const [todos, setTodos] = useState([
    "uwqgegwq",
    "f34f34f34",
    "qwe",
    "a",
    "wrwerwe",
  ]);

  const [filter, setFilter] = useState("3");

  //   computed state
  const filteredTodos = todos.filter((todo) => {
    if (filter === "0" && todo.length === 3) {
      return true;
    }

    if (filter === "1" && todo.length > 3) {
      return true;
    }

    if (filter === "2" && todo.length < 3) {
      return true;
    }

    if (filter === "3") {
      return true;
    }

    return false;
  });

  return (
    <article>
      <p>Todo List</p>
      <Filters filter={filter} setFilter={setFilter} />
      <List todos={filteredTodos} />
    </article>
  );
};

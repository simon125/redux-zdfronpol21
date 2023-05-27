import React from "react";

export const List = (props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
};

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoListSlice";

export const Form = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // dipspatch akcji addTodo z wartością z inputu
        dispatch(addTodo(todo));
        setTodo("");
      }}
    >
      <input
        type="text"
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

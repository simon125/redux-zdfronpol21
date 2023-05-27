import React from "react";
import { Form } from "./Form";
import { List } from "./List";

/**
 * Zadanie
 * Stwórz aplikacje typu todo list z wykorzystaniem reduxa oraz mockowego backendu
 */

export const TodoList = () => {
  return (
    <article>
      <p>TodoList</p>
      <Form />
      <List />
    </article>
  );
};

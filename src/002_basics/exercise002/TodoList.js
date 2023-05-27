import React from "react";
import { Form } from "./Form";
import { List } from "./List";
import { Metrics } from "./Metrics";
import { Search } from "./Search";

/**
 * Zadanie
 * Stwórz aplikacje typu todo list z wykorzystaniem reduxa
 *
 * w tym celu należy stworzyć plik przeznaczony na slice
 * stanem slica niech będzie tablica stringów, którą
 * będzie można updatować za pomocą formularza
 *
 * formularz powinien zbierać dane (znaki wpisane przez usera)
 * za pomocą stanu lokalnego (useState), następnie
 * na evencie submit aplikacja powinna dispatchować akcje
 * z payloadem który pochodzi ze stanu lokalnego (useState)
 *
 * na tej podstawie w slice będzie można aktualizaować tablice
 * np za pomocą metody dostępnej na tablicach .push(nowyElement)
 *
 * następnie wyświetl dane ze slica wyciągając je za pomocą selectora
 * w komponencie List
 *
 */

export const TodoList = () => {
  return (
    <article>
      <p>TodoList</p>
      <Form />
      <Metrics />
      <Search />
      <List />
    </article>
  );
};

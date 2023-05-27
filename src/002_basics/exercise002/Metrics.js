import React from "react";
import { useSelector } from "react-redux";
import {
  selectNumberOfCharachters,
  selectNumberOfWordsWithLessThan5Charchters,
  selectTotalNumberOfTodos,
} from "./todoListSlice";

export const Metrics = () => {
  const total = useSelector(selectTotalNumberOfTodos);
  const allCharachters = useSelector(selectNumberOfCharachters);
  const amountOfWordsLessThan5Charachters = useSelector(
    selectNumberOfWordsWithLessThan5Charchters
  );

  return (
    <article>
      <p>Total: {total}</p>
      <p>Ilość wszystkich znaków: {allCharachters}</p>
      <p>
        Ilość słów które mają mniej niż 5 znaków:{" "}
        {amountOfWordsLessThan5Charachters}
      </p>
    </article>
  );
};

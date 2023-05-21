import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./sliceExample002";
/**
 * Wstęp do reduxa
 *
 * 1) tworzenie slice-ów
 * 2) używanie (dispatchowanie) akcji na onClicku
 * 2a) akcje bez payloadu
 * 2b) akcje z payloadem
 * 3) debugowanie/weryfikacja stanu w narzedziach developerskich
 * 4) wyciąganie stanu - selectory
 *
 * na przykładzie
 * countera
 * todolisty
 *
 */

export const Example002 = () => {
  const [todoTitle, setTodoTitle] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todosExample.todos);

  return (
    <article>
      <p>Example</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addTodo(todoTitle));
          setTodoTitle("");
          /**
           * 1) dipsatchowanie akcji która w payloadzie przyjmie stan (todoTile)
           *    i zaktualizuje tablice w slice
           * 2) czyszczenie inputu czyli setTodoTtitle('');
           */
        }}
      >
        <input
          required
          type="text"
          value={todoTitle}
          onChange={(event) => {
            setTodoTitle(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </article>
  );
};

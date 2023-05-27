import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectValue, updateCounter, getCounter } from "./counterSlice";
import { Loader } from "../../components/Loader";

/**
 * Twoim zadaniem jest stowrznie aplikacji typu counter przy użyciu
 * redux-a,
 *
 * Do realizacji zadania będziesz potrzebować/potrzebowała stanu oraz możliwości aktualizacji tego stanu
 * dlatego stwórz slice (createSlice) dla komponentu CounterWithRedux w pliku counterSlice.js
 *
 * slice ten powinien mieć:
 * nazwę: "counterWithApi"
 * stan początkowy: obiekt z polem value oraz wartością 0
 * reducery: pusty obiekt
 * extraReducers: z casami dla requestów zakończonych sukcesem
 *
 * slice zwróci obiekt który będzie posiadał
 * kilka rzeczy które należy wykorzystać:
 *
 * reducer należy wyeksporotwać defaultowo i zaimportować w pliku ze storem po czym dodać reducera do obiektu konfiguracyjnego
 * w funkcji configureStore
 *
 * stwórz selektor który wyciągnie wartość countera ze stanu i pozwoli ja wyśweitlić w komponencie
 *
 *
 * asyncThunks stwórz akcje asynchroniczne za pomocą funkcji createAsyncThunk
 * funkcja ta przyjmuje dwa argumenty
 * 1 - nazwe/string - typ akcji
 * 2 - akcje asynchroniczną czyli funkcje która wykonuje np request HTTP
 *
 * w pliku ze slicem powinny być dwie akcje asynchroniczne
 *
 * 1 - pobieranie wartości countera
 * 2 - aktualizacja wartości countera
 *
 * skorzystaj z mockowego backednu json-server
 * który "wystawia" endpoint http://localhost:3010/counter
 *
 * endpoint ten obsługuje główne metody HTTP (w zadaniu istotne będą GET oraz PATCH)
 *
 * w przypadku metody PATCH w body należy przekazać obiekt z kluczem value i nową wartością countera
 *
 */

export const CounterWithAsyncRedux = () => {
  const counter = useSelector(selectValue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCounter());
  }, [dispatch]);

  return (
    <article>
      {/* <Loader /> */}
      <p>CounterWithRedux</p>
      <button
        onClick={() => {
          dispatch(updateCounter(counter + 5));
        }}
      >
        +5
      </button>
      <input type="text" value={counter} readOnly />
      <button
        onClick={() => {
          dispatch(updateCounter(counter - 10));
        }}
      >
        -10
      </button>
    </article>
  );
};

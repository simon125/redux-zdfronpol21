import React from "react";

/**
 * Twoim zadaniem jest stowrznie aplikacji typu counter ALE przy użyciu
 * redux-a,
 *
 * Do realizacji zadania będziesz potrzebować/potrzebowała stanu oraz możliwości aktualizacji tego stanu
 * dlatego stwórz slice (createSlice) dla komponentu CounterWithRedux w pliku counterSlice.js
 *
 * slice ten powinien mieć:
 * nazwę: "counter"
 * stan początkowy: obiekt z polem value oraz wartością 0
 * reducery: obiekt z metodami increment oraz decrement
 *
 * slice zwróci obiekt który będzie posiadał
 * kilka rzeczy które należy wykorzystać:
 *
 * reducer należy wyeksporotwać defaultowo i zaimportować w pliku ze storem po czym dodać reducera do obiektu konfiguracyjnego
 * w funkcji configureStore
 *
 * akcje należy wyekrportowac i wykorzystać w komponencie (w tym pliku) i wywołać je w odpowiednich przyciskach ALE
 * pamietaj że akcje nie mogę być tylko wywołane - ich wywołanie musi być zdispatchowane (dispatch + useDispatch)
 *
 * stwórz selektor który wyciągnie wartość countera ze stanu i pozwoli ja wyśweitlić w komponencie
 *
 *
 */

export const CounterWithRedux = () => {
  return (
    <article>
      <p>CounterWithRedux</p>
      <button onClick={() => {}}>+1</button>
      <input type="text" value={12} readOnly />
      <button onClick={() => {}}>-1</button>
    </article>
  );
};

/**
 * Zadanie
 *
 * Twoim zadaniem na rozgrzewkę jest stworzenie prostej aplikacji typu counter
 * aplikacja powinna się składać z dwóch przycisków i elementu wyświetlającego stan countera
 *
 * Wymagania:
 *
 * stan countera powinien być trzymany w hooku useState,
 * typ jaki ma mieć ten stan to number
 *
 * przycisnięcie przycisków powinno spowodować:
 * przycisk z labelką +1 (Increase) powinien zwiększać wartość stanu o jeden
 * przycisk z labelką -1 (Decrease) powinien zmniejszać wartość stanu o jeden
 *
 * komponent wyświetlający (Output) stan countera moze być zwykłym paragrafem który wyświetla warość stanu
 *
 * wszystkie te komponenty powinny zostać użyte w komponencie Counter w tym pliku
 *
 * komponent Counter powinien zostać zaimporowany w pliku App.js i wywołany w komponencie App
 *
 * użyj dostępnej struktury plików zaproponowanej w folderze 000_warm_up
 *
 */

import React, { useState } from "react";
import { Increase } from "./Increase";
import { Output } from "./Output";
import { Decrease } from "./Decrease";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <article>
      <p>Counter</p>
      <Increase
        cokolwiek={123}
        onIncreaseClick={() => setCounter(counter + 1)}
      />
      <Output value={counter} />
      <Decrease onDecreaseClick={() => setCounter(counter - 1)} />
    </article>
  );
};

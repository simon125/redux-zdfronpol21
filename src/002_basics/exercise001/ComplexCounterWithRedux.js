import React from "react";
import { Increase } from "./Increase";
import { Decrease } from "./Decrease";
import { Output } from "./Output";

/**
 * Zadanie
 *
 * zadanie zbliżone do poprzedniego ale różni się tym że mamy większą elastyczność jeżeli chodzi o manipulacje
 * counterem,
 *
 * żeby obsłużyc counter należy użyć reduxa oraz slice-a reduxowego jak poprzednio jednak tym razem
 * akcje będą przyjmować tzw payload jako argument dzieki temu będziemy mogli określić
 * o ile chcemy podnieść wartość naszego
 *
 * slice należy stworzyć w pliku complexCounterSlice.js (plik należy stowrzyć)
 * slice nie będzie się bardzo różnił od tego z zadania poprzedniego
 * jednak reducery w slicie będą teraz oprócz state przyjmowały
 * w drugim parametrze tzw payload czyli dane przekazane w momencie dispatchowania akcji
 * te dane (payload) posłuży nam jako wartość o którą chcemy zwiększyć lub zmniejszyć stan
 * naszego countera
 *
 * Zauważ w folderze z zadaniem jest przyjęty podział na komponenty
 * Komponent Output powinien wyświetlać dane ze slice-a (useSelector)
 * Komponenty Increase oraz Decrease powinny dispatchować akcje
 *
 *
 */

export const ComplexCounterWithRedux = () => {
  return (
    <article>
      <p>Complex Counter</p>
      <div style={{ display: "flex", gap: 20 }}>
        <Increase value={5} />
        <Increase value={1} />
        <Output />
        <Decrease value={1} />
        <Decrease value={5} />
      </div>
    </article>
  );
};

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
 * o ile chcemy podnieść wartość naszego countera
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

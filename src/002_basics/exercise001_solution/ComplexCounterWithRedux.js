import React from "react";
import { Increase } from "./Increase";
import { Decrease } from "./Decrease";
import { Output } from "./Output";

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

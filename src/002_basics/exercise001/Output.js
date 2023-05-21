import React from "react";
import { useSelector } from "react-redux";
import { selectComplexCounterValue } from "./complexCounterSlice";

export const Output = () => {
  // seletor podejscie 1 - inlinowe podejscie
  // const counterValue = useSelector((state) => state.complexCounter.value);
  // selector podejscie 2 - bradziej wskazane - funckje selectorów umieszczone w pliku ze slicem
  const counterValue = useSelector(selectComplexCounterValue);

  return <input type="text" value={counterValue} readOnly />;
};

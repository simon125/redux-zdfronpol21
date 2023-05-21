import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  resetCounter,
  toggleShowPoweredValue,
} from "./counterSlice";

export const CounterWithReduxExample = () => {
  const counter = useSelector((state) => state.counter.value);
  const poweredCounter = useSelector((state) => state.counter.poweredValue);
  const showPoweredValue = useSelector(
    (state) => state.counter.showPoweredValue
  );
  const dispatch = useDispatch();

  return (
    <article>
      <button onClick={() => dispatch(increment())}>+1</button>
      <input type="text" readOnly value={counter} />
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(resetCounter())}>RESET</button>
      <label>
        <input
          type="checkbox"
          checked={showPoweredValue}
          onChange={() => {
            dispatch(toggleShowPoweredValue());
          }}
        />
        Show powered value
      </label>
      {showPoweredValue && <p>Powerd value: {poweredCounter}</p>}
    </article>
  );
};

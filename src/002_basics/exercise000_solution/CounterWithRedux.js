import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCounterValue } from "./counterSlice";

export const CounterWithRedux = () => {
  const counter = useSelector(selectCounterValue);

  const dispatch = useDispatch();

  return (
    <article>
      <p>CounterWithRedux</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +1
      </button>
      <input type="text" value={counter} readOnly />
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -1
      </button>
    </article>
  );
};

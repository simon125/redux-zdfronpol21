import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "./complexCounterSlice";

export const Increase = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(increment(value));
      }}
    >
      +{value}
    </button>
  );
};

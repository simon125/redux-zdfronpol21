import React from "react";
import { decrement } from "./complexCounterSlice";
import { useDispatch } from "react-redux";

export const Decrease = ({ value }) => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(decrement(value))}>-{value}</button>;
};

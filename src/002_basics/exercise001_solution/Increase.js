import React from "react";
import { increment } from "./complexCounterSlice";
import { useDispatch } from "react-redux";

export const Increase = ({ value }) => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(increment(value))}>+{value}</button>;
};

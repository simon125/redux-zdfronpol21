import React from "react";
import { useSelector } from "react-redux";
import { selectCounterValue } from "./complexCounterSlice";

export const Output = () => {
  const counter = useSelector(selectCounterValue);
  return <input type="text" value={counter} readOnly />;
};

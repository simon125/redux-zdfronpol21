import React, { useEffect } from "react";
import { getCounter, updateCounter } from "./asyncCounterSliceExample";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";

import {
  selectIsLoading,
  selectCounterValue,
} from "./asyncCounterSliceExample";

export const Example003 = () => {
  const dispatch = useDispatch();

  const counter = useSelector(selectCounterValue);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCounter());
  }, [dispatch]);

  return (
    <article>
      {isLoading && <Loader />}
      <p>Thunks - createAsyncThunk</p>
      <button onClick={() => dispatch(updateCounter(counter + 5))}>+5</button>
      <input type="text" value={counter} readOnly />
      <button onClick={() => dispatch(updateCounter(counter - 10))}>-10</button>
    </article>
  );
};

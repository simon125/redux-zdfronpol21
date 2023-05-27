import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchPhrase, setSearchPhrase } from "./todoListSlice";

export const Search = () => {
  const dispatch = useDispatch();
  const searchPhraseValue = useSelector(selectSearchPhrase);

  return (
    <div>
      <p>Search</p>
      <input
        type="text"
        value={searchPhraseValue}
        onChange={(event) => dispatch(setSearchPhrase(event.target.value))}
      />
    </div>
  );
};

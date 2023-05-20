import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedFilter, setFilter } from "./usersSlice";

export const Filters = () => {
  const dispatch = useDispatch();

  const selectedFilter = useSelector(selectSelectedFilter);

  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
      }}
    >
      <p>Filters</p>
      <select
        value={selectedFilter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      >
        <option value="ALL">All</option>
        <option value="UNDERAGE">Underage</option>
        <option value="ADULTS">Adults</option>
      </select>
    </div>
  );
};

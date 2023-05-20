import React from "react";

export const Filters = () => {
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
      <select>
        <option value="ALL">All</option>
        <option value="UNDERAGE">Underage</option>
        <option value="ADULTS">Adults</option>
      </select>
    </div>
  );
};

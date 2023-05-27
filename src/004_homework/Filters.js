import React from "react";

export const Filters = (props) => {
  const { filter, setFilter } = props;

  return (
    <div>
      Filters
      <select
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      >
        <option value="0">string z 3 znakami</option>
        <option value="1">string z większą ilością znaków niż 3</option>
        <option value="2">string z mniejszą iloscia znakow niż 3</option>
        <option value="3">pokaż wszystko</option>
      </select>
    </div>
  );
};

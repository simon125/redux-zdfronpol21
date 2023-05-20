import React from "react";

export const Metric = ({ label, value }) => {
  return (
    <p
      style={{
        border: "1px solid gray",
        borderRadius: 10,
        padding: 20,
        width: "fit-content",
      }}
    >
      <b>{label}: </b>
      {value}
    </p>
  );
};

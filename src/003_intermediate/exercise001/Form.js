import React, { useState } from "react";

export const Form = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

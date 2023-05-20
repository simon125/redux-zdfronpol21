import React, { useState } from "react";

export const UserForm = () => {
  const [name, setName] = useState("");

  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
      }}
    >
      <p>UserForm</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Age" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

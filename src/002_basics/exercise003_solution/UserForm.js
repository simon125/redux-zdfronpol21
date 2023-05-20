import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./usersSlice";

export const UserForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const dispatch = useDispatch();

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
          const newUser = {
            id: Math.random(),
            name,
            lastName,
            age,
          };

          dispatch(addUser(newUser));

          setName("");
          setLastName("");
          setAge("");
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
        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          placeholder="Last Name"
        />
        <input
          type="text"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          placeholder="Age"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./usersSlice";

/**
 * 1) slice dla formularza + export reducera do store.js
 * 2) akcja dla formularza
 *
 * slice i jego stan to będzie tablica stringów
 */

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
          // stworzyć nowego usera na podstawie wpisanych wartości w inputy (nasz stan w useState)
          const user = {
            id: Math.random(),
            name,
            lastName,
            age,
          };
          // dispatch akcje która przyjmuje jako payload nowego usera a dalej w slice dodaje go do tablicy userów
          dispatch(addUser(user));

          // czyszczenie formularza
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
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={age}
          onChange={(event) => setAge(event.target.value)}
          type="text"
          placeholder="Age"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

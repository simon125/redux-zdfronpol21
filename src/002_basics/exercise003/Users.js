import React from "react";
import { UserForm } from "./UserForm";
import { Filters } from "./Filters";
import { Metric } from "./Metric";
import { UsersList } from "./UsersList";

export const Users = () => {
  const total = 2;
  const filtredAmount = 32;

  return (
    <article>
      <h4>Users</h4>
      <UserForm />
      <Filters />
      <div style={{ display: "flex", gap: 20 }}>
        <Metric label="Total" value={total} />
        <Metric label="Amount of filtered users" value={filtredAmount} />
      </div>

      <UsersList />
    </article>
  );
};

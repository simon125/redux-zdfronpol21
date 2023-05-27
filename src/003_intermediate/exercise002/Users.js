import React from "react";
import { UserForm } from "./UserForm";
import { Filters } from "./Filters";
import { Metric } from "./Metric";
import { UsersList } from "./UsersList";

/**
 * Zadanie
 * Twoim zadaniem jest obsłużenie formularza, wyświetlenie metryk zgodnych z aktualnym stanem
 * oraz wyświetlić wszystkie elementy w tabelce - kod JSX jest już przygotowany
 * użyj reduxa oraz mockowego backendu
 */

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

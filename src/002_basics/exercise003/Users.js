import React from "react";
import { UserForm } from "./UserForm";
import { Filters } from "./Filters";
import { Metric } from "./Metric";
import { UsersList } from "./UsersList";

/**
 * Zadanie
 * Twoim zadaniem jest obsłużenie formularza, wyświetlenie metryk zgodnych z aktualnym stanem
 * oraz wyświetlić wszystkie elementy w tabelce - kod JSX jest już przygotowany
 * zapoznaj się ze strukturą tego mini projektu tak żeby w odpowiednich miejscach użyć
 * reduxa.
 *
 * Żeby zrealizować zadanie będzie potrzebny slice reduxowy który będzie przechowywał
 * listę userów (tablice obiektów), dodatkowo będą potrzebne następujące akcje:
 * - addUser - do tworzenia userów
 * - removeUser - do usuwania wybranego usera
 * - setFilter - do ustawiania aktualnego stanu filtra
 *
 * W slicie będzie trzeba również zrobić funkcje selektory które będą wyciągać
 * poszzególne dane i informacje
 * - lista userów spełniających wybrany filtr (All, Underage, Adults)
 * - ilość wszystkich userów (nie ważne jaki filtr jest wybrany)
 * - ilość wszystkich przefiltrowanych userów
 * - wybrany filtr
 *
 * na podstawie powyższych informacji zaimplementuj selektory i użyj ich w odpowiednich miejsach
 * w aplikacji np. selectora do wyciągania wszyskich userów należy wykorzystać w komponencie UsersList
 * w pliku UsersList.js
 *
 *
 * ⭐ jako zadanie dodatkowe stwórz dodatkowe metryki wyświetlające inne interesujące z perspektywy usera rzeczy
 * np: najstarszy user, najmłodszy user, średnia wieku,
 *
 * ⭐ stwórz serch bar jako dodakowy filtr - stwórz input tekstowy w którym user będzie mógł dodatkowo
 * filtrować wyniki wyszukiwania w tabelce - UWAGA wygodniej będzie jeżeli stan inputu
 * będzie trzymany w reduxowym slicie nie w useState
 *
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

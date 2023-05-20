import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, selectUsers } from "./usersSlice";

export const UsersList = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={() => dispatch(removeUser(user.id))}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

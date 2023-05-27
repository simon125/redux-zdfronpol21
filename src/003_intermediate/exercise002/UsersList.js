import React from "react";

export const UsersList = () => {
  const users = [];
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
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

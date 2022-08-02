import React from "react";

export default function ReadOnlyRow({
  users,
  handleEditClick,
  handleUserRemove,
}) {
  return (
    <>
      <tr key={users.id + "_" + users.first_name}>
        <td>{users.id}</td>
        <td>{users.first_name}</td>
        <td>{users.last_name}</td>
        <td>{users.username}</td>
        <td>{users.email}</td>
        <td>{users.password}</td>
        <td>
          <button
            className="row-btn"
            onClick={() => handleEditClick(users.id, users)}
          >
            <i class="material-icons">edit</i>
          </button>
        </td>
        <td>
          <button
            className="row-btn"
            onClick={() => handleUserRemove(users.id)}
          >
            <i class="material-icons">delete</i>
          </button>
        </td>
      </tr>
    </>
  );
}

import React from "react";

export default function EditRow({
  users,
  editFormData,
  handleEditChange,
  handleSaveSubmit,
}) {
  return (
    <tr key={editFormData.first_name + " edit"}>
      <td>{users.id}</td>
      <td>
        <input
          type="text"
          name="first_name"
          value={editFormData.first_name}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="last_name"
          value={editFormData.last_name}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="username"
          value={editFormData.username}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="email"
          value={editFormData.email}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="password"
          value={editFormData.password}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <button className="row-btn" onClick={() => handleSaveSubmit()}>
          <i class="material-icons">save</i>
        </button>
      </td>
      <td>
        <button className="row-btn">
          <i class="material-icons">delete</i>
        </button>
      </td>
    </tr>
  );
}

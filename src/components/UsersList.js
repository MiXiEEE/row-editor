import React, { Fragment, useState } from "react";
import EditRow from "./EditRow";
import ReadOnlyRow from "./ReadOnlyRow";

export default function UsersList({
  users,
  setUsers,
  editFormData,
  setEditData,
  handleEditChange,
}) {
  const [userEditId, setUserEditId] = useState(null);

  const handleEditClick = (userId, users) => {
    setUserEditId(userId);
    const editUser = {
      id: userId,
      first_name: users.first_name,
      last_name: users.last_name,
      username: users.username,
      email: users.email,
      password: users.password,
    };
    setEditData(editUser);
  };

  const handleUserRemove = (id) => {
    const newUserList = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUserList);
  };

  const handleSaveSubmit = () => {
    const editedUser = {
      id: editFormData.id,
      first_name: editFormData.first_name,
      last_name: editFormData.last_name,
      username: editFormData.username,
      email: editFormData.email,
      password: editFormData.password,
    };
    setUsers((prev) =>
      prev.map((user) => (user.id === editedUser.id ? editedUser : user))
    );
    setUserEditId(null);
  };

  return (
    <>
      {users.map((users) => {
        return (
          <Fragment key={users.id}>
            {userEditId === users.id ? (
              <EditRow
                users={users}
                editFormData={editFormData}
                handleEditClick={handleEditClick}
                handleEditChange={handleEditChange}
                handleSaveSubmit={handleSaveSubmit}
              />
            ) : (
              <ReadOnlyRow
                users={users}
                handleEditClick={handleEditClick}
                handleUserRemove={handleUserRemove}
              />
            )}
          </Fragment>
        );
      })}
    </>
  );
}

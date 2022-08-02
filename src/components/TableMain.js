import React, { useEffect, useState } from "react";
import AddUserForm from "./AddUserForm";
import TableHeader from "./TableHeader";
import UsersList from "./UsersList";

export default function TableMain() {
  const [users, setUsers] = useState([]);
  const [addFormData, setAddFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });
  const [editFormData, setEditData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });
  const userAPI = "https://random-data-api.com/api/users/random_user?size=8";

  useEffect(() => {
    // GET request using fetch inside useEffect hook
    fetch(userAPI)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
    // empty dependancy array means this effect will only run once
  }, []);

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const formData = { ...addFormData };
    formData[fieldName] = fieldValue;
    setAddFormData(formData);
  };

  const addUser = () => {
    const id = users.length ? users[users.length - 1].id + 1 : 0;
    const newUser = {
      id: id,
      first_name: addFormData.first_name,
      last_name: addFormData.last_name,
      username: addFormData.username,
      email: addFormData.email,
      password: addFormData.password,
    };
    const usersList = [...users, newUser];
    setUsers(usersList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser();
  };

  const handleEditChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const formData = { ...editFormData };
    formData[fieldName] = fieldValue;
    setEditData(formData);
  };

  return (
    <>
      <table className="content-table">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <UsersList
            users={users}
            setUsers={setUsers}
            editFormData={editFormData}
            setEditData={setEditData}
            handleEditChange={handleEditChange}
          />
        </tbody>
      </table>
      <AddUserForm
        addFormData={addFormData}
        setAddFormData={setAddFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

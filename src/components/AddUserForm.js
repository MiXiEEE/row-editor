import React from "react";

export default function AddUserForm({ handleChange, handleSubmit }) {
  return (
    <div className="userform">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="first_name" onChange={handleChange} required />
        <label>Last Name:</label>
        <input type="text" name="last_name" onChange={handleChange} required />
        <label>Username:</label>
        <input type="text" name="username" onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />
        <label>Password:</label>
        <input type="text" name="password" onChange={handleChange} required />
        <button onSubmit={handleSubmit}>ADD</button>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/user/create", { username });
    alert("User Created!");
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create User</h3>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <button type="submit">Create</button>
    </form>
  );
}

export default UserForm;

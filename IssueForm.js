import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IssueForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sprintId, setSprintId] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/user/list").then(res => setUsers(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/issue/create", {
      title,
      description,
      sprint_id: sprintId,
      assigned_to: assignedTo
    });
    alert("Issue Created!");
    setTitle("");
    setDescription("");
    setSprintId("");
    setAssignedTo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Issue</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input value={sprintId} onChange={(e) => setSprintId(e.target.value)} placeholder="Sprint ID" required />
      <select value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} required>
        <option value="">Assign to...</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.username}</option>
        ))}
      </select>
      <button type="submit">Create</button>
    </form>
  );
}

export default IssueForm;

import React, { useState } from 'react';
import axios from 'axios';

function SprintForm() {
  const [name, setName] = useState("");
  const [projectId, setProjectId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/sprint/create", {
      name,
      project_id: projectId
    });
    alert("Sprint Created!");
    setName("");
    setProjectId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Sprint</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Sprint Name" required />
      <input value={projectId} onChange={(e) => setProjectId(e.target.value)} placeholder="Project ID" required />
      <button type="submit">Create</button>
    </form>
  );
}

export default SprintForm;

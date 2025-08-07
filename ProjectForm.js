import React, { useState } from 'react';
import axios from 'axios';

function ProjectForm() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/project/create", { name });
    alert("Project Created!");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Project</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Project Name" required />
      <button type="submit">Create</button>
    </form>
  );
}

export default ProjectForm;

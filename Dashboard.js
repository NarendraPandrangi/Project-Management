import React from 'react';
import ProjectForm from '../components/ProjectForm';
import SprintForm from '../components/SprintForm';
import IssueForm from '../components/IssueForm';
import UserForm from '../components/UserForm';

function Dashboard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px' }}>
      <ProjectForm />
      <SprintForm />
      <IssueForm />
      <UserForm />
    </div>
  );
}

export default Dashboard;

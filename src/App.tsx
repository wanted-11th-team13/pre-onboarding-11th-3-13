import React from 'react';
import { Outlet } from 'react-router-dom';
import { IssueInfo } from './context/IssueContext';

export default function App() {
  return (
    <div>
      <h1>{`${IssueInfo.OWNER} / ${IssueInfo.REPO}`}</h1>
      <Outlet />
    </div>
  );
}

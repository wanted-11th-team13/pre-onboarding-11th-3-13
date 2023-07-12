import React from 'react';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Repository Name</h1>
      <Outlet />
    </div>
  );
}

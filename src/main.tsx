import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import IssueList from './pages/IssueList/IssueList';
import IssueDetail from './pages/IssueDetail/IssueDetail';
import { IssueProvider } from './context/IssueContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <IssueList /> },
      {
        path: '/issue/:issueId',
        element: <IssueDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IssueProvider>
      <RouterProvider router={router} />
    </IssueProvider>
  </React.StrictMode>
);

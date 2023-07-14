/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom';
import { IssueInfo } from './context/IssueContext';
import { css } from '@emotion/react';

const pageArea = css`
  padding: 20px 50px;
  min-width: 650px;
  margin: 0 auto;
`;

const headerAlign = css`
  text-align: center;
`;
export default function App() {
  return (
    <div css={pageArea}>
      <h1 css={headerAlign}>{`${IssueInfo.OWNER} / ${IssueInfo.REPO}`}</h1>
      <Outlet />
    </div>
  );
}

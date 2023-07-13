import { useContext, useEffect } from 'react';
import { GithubContext } from '../../context/GithubContext';

export function IssueDetail() {
  const { issue, fetchIssue, isLoading } = useContext(GithubContext);

  return !isLoading ? (
    <div>
      <header></header>
    </div>
  ) : (
    <>loading...</>
  );
}

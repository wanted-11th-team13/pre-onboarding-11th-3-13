import { useContext, useEffect, useState } from 'react';
import { GithubContext } from '../../context/GithubContext';
import moment from 'moment';

export function IssueList() {
  const { issueList, fetchIssueList } = useContext(GithubContext);
  useEffect(() => {
    fetchIssueList();
  }, []);
  return (
    <main>
      <h2>Issue List</h2>
      <ul>
        {issueList.map((issue) => (
          <li key={issue.id}>
            <span>
              #{issue.number}
              {issue.title}
            </span>
            <span> 작성자 : {issue.user.login}</span>
            <span>
              작성일 : {moment(issue.created_at).format('YYYY-MM-DD')}
            </span>
            <span>🙋‍♂️{issue.comments}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

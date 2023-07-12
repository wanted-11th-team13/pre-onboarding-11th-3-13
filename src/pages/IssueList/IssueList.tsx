import React, { useEffect } from 'react';
import { useLoadingContext } from '../../context/LoadingContext';
import { githubApi } from '../../api/GithubIssueApi';
import { useIssueContext } from '../../context/IssueContext';

export default function IssueList() {
  const { isLoading, setLoading } = useLoadingContext();
  const { issueList, getIssueList } = useIssueContext();

  useEffect(() => {
    const getIssueLists = async () => {
      setLoading(true);

      try {
        const issueListData = await githubApi.getIsuueList();
        getIssueList(issueListData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getIssueLists();
  }, []);
  return (
    <div>
      {isLoading && <div>로딩중입니다.</div>}
      {!isLoading && (
        <ul>
          {issueList.map((issue) => (
            <li key={issue.issueNumber}>
              <p>{issue.author}</p>
              <p>{issue.commentCount}</p>
              <p>{issue.createdAt}</p>
              <p>{issue.issueNumber}</p>
              <p>{issue.title}</p>
              {issue.labels.map((label) => (
                <p key={label.id}>{label.name}</p>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import React, { useEffect } from 'react';
import { useLoadingContext } from '../../context/LoadingContext';
import { githubApi } from '../../api/GithubIssueApi';
import { IssueInfo, useIssueContext } from '../../context/IssueContext';
import { useNavigate } from 'react-router-dom';

export default function IssueList() {
  const { isLoading, setLoading } = useLoadingContext();
  const { issueListInfo, getIssueListInfo } = useIssueContext();

  const owner = IssueInfo.OWNER;
  const repo = IssueInfo.REPO;

  const navigate = useNavigate();

  useEffect(() => {
    const getIssueLists = async () => {
      setLoading(true);

      try {
        const issueListData = await githubApi.getIssueList(owner, repo);
        getIssueListInfo(issueListData);
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
          {issueListInfo?.map((issue) => {
            const issueId = issue.issueNumber;
            return (
              <li
                key={issue.issueNumber}
                onClick={() =>
                  navigate(`/issue/${issueId}`, {
                    state: {
                      owner,
                      repo,
                      issueId,
                    },
                  })
                }
              >
                <p>{issue.author}</p>
                <p>{issue.commentCount}</p>
                <p>{issue.createdAt}</p>
                <p>{issue.issueNumber}</p>
                <p>{issue.title}</p>
                {issue.labels.map((label) => (
                  <p key={label.id}>{label.name}</p>
                ))}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

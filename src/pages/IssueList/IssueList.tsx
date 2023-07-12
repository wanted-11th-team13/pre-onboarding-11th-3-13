import React, { useCallback, useEffect, useRef } from 'react';
import { useLoadingContext } from '../../context/LoadingContext';
import { githubApi } from '../../api/GithubIssueApi';
import { IssueInfo, useIssueContext } from '../../context/IssueContext';
import { useNavigate } from 'react-router-dom';

export default function IssueList() {
  const { isLoading, setLoading } = useLoadingContext();
  const { issueListInfo, getIssueListInfo } = useIssueContext();

  const targetRef = useRef<HTMLDivElement>(null);

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

  const infiniteScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      // getIssueListInfo();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, true);
    return () => window.removeEventListener('scroll', infiniteScroll, true);
  }, [infiniteScroll]);

  return (
    <div>
      {isLoading && <div>로딩중입니다.</div>}
      <div ref={targetRef} style={{ height: '10px' }} />
      {!isLoading && (
        <ul onScroll={infiniteScroll}>
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

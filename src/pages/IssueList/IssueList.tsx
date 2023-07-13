/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from 'react';
import { githubApi } from '../../api/GithubIssueApi';
import { IssueInfo, useIssueContext } from '../../context/IssueContext';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

const flexAlign = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const listStyle = css`
  list-style: none;
  margin: 0 auto;
`;

const itemStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 0;
  cursor: pointer;
`;

const issueTitleArea = css`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const issueTextArea = css`
  ${issueTitleArea}
  font-size: 16px;
`;

const issueTitle = css`
  font-weight: 700;
  margin-left: 10px;
  white-space: nowrap;
`;

const issueText = css`
  ${issueTitle}
  font-weight: 400;
  margin: 10px 0 10px 10px;
`;

const commentStyle = css`
  white-space: nowrap;
`;

const labelStyle = (color: string) => css`
  display: inline;
  border: 2px solid ${'#' + color};
  border-radius: 10px;
  margin: 10px 3px 20px;
`;

const line = css`
  width: 100%;
  height: 1px;
  background-color: #c0c0c0;
  margin: 10px 0;
`;

const adImg = css`
  height: 200px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const adTag = css`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px 20px;
  background-color: #ff0000;
  color: #ffffff;
`;

export default function IssueList() {
  const owner = IssueInfo.OWNER;
  const repo = IssueInfo.REPO;
  const { issueListInfo, getIssueListInfo } = useIssueContext();
  const [isDataLoading, setIsDataloading] = useState(false);
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver | null>(null);
  const navigate = useNavigate();

  const lastIssueElementRef = useCallback(
    (node: HTMLLIElement) => {
      if (isDataLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isDataLoading]
  );

  useEffect(() => {
    const getIssueLists = async () => {
      setIsDataloading(true);
      try {
        const issueListData = await githubApi.getIssueList(owner, repo, page);
        getIssueListInfo(issueListData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsDataloading(false);
      }
    };
    getIssueLists();
  }, [page]);

  const adZone = (index: number) => (index + 1) % 5 === 0;

  return (
    <div>
      <ul css={listStyle}>
        {issueListInfo?.map((issue, index) => {
          const issueId = issue.issueNumber;
          const date = issue.createdAt.split('T')[0].split('-');
          const isAdZone = adZone(index);
          return (
            <li
              ref={lastIssueElementRef}
              css={[itemStyle]}
              key={index}
              onClick={() => {
                if (isAdZone) {
                  window.location.href = 'https://www.wanted.co.kr/';
                } else {
                  navigate(`/issue/${issueId}`, {
                    state: {
                      owner,
                      repo,
                      issueId,
                    },
                  });
                }
              }}
            >
              {isAdZone ? (
                <div css={adImg}>
                  <img
                    style={{ width: '100%' }}
                    src="https://images.unsplash.com/photo-1495783436593-3015f0bc6f56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFkdmVydGlzaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
                    alt="광고 이미지"
                  />
                  <div css={adTag}>ad</div>
                </div>
              ) : (
                <>
                  <div css={flexAlign}>
                    <div>
                      <div css={issueTitleArea}>
                        <div>{index}</div>
                        <div>#{issue.issueNumber}</div>
                        <div css={issueTitle}>
                          {issue.title.length > 35
                            ? issue.title.slice(0, 35) + '...'
                            : issue.title}
                        </div>
                      </div>
                      <div css={issueTextArea}>
                        <div>작성자: {issue.author}</div>
                        <div css={issueText}>
                          작성일: {`${date[0]}년 ${date[1]}월 ${date[2]}일`}
                        </div>
                      </div>
                    </div>
                    <div css={commentStyle}>코멘트: {issue.commentCount}</div>
                  </div>
                  <div>
                    {issue.labels.map((label) => (
                      <button key={label.id} css={labelStyle(label.color)}>
                        {label.name}
                      </button>
                    ))}
                  </div>
                </>
              )}
              <div css={line} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import { useLoadingContext } from '../../context/LoadingContext';
import { githubApi } from '../../api/GithubIssueApi';
import { IssueInfo, useIssueContext } from '../../context/IssueContext';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

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

const refPosition = css`
  height: 50px;
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
  const { isLoading, setLoading } = useLoadingContext();
  const { issueListInfo, getIssueListInfo } = useIssueContext();

  const [page, setPage] = useState(1);
  const targetRef = useRef<HTMLDivElement>(null);

  const listRef = useRef<HTMLUListElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPositionToRestore, setScrollPositionToRestore] = useState(0);

  const [observe, unobserve] = useIntersectionObserver(() => {
    if (!isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, isLoading);

  const owner = IssueInfo.OWNER;
  const repo = IssueInfo.REPO;

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(listRef.current?.scrollTop || 0);
    };
    listRef.current?.addEventListener('scroll', handleScroll);
    return () => {
      listRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (listRef.current) {
      if (scrollPositionToRestore !== scrollPosition) {
        listRef.current.scrollTop = scrollPositionToRestore;
      }
    }
  }, [issueListInfo]);

  useEffect(() => {
    if (targetRef.current) {
      observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        unobserve(targetRef.current);
      }
    };
  }, [observe, unobserve]);

  useEffect(() => {
    const getIssueLists = async () => {
      setLoading(true);

      try {
        const issueListData = await githubApi.getIssueList(owner, repo, page);
        const currentScrollPosition = listRef.current?.scrollTop || 0;
        getIssueListInfo(issueListData);

        setScrollPositionToRestore(currentScrollPosition);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getIssueLists();
  }, [page]);

  const adZone = (index: number) => (index + 1) % 5 === 0;

  return (
    <div>
      {isLoading && <div>로딩중입니다.</div>}
      {!isLoading && (
        <ul css={listStyle} ref={listRef}>
          {issueListInfo?.map((issue, index) => {
            const issueId = issue.issueNumber;
            const date = issue.createdAt.split('T')[0].split('-');
            const isAdZone = adZone(index);
            return (
              <li
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
      )}
      <div ref={targetRef} css={refPosition} />
    </div>
  );
}

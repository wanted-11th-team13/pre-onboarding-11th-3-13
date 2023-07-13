/* eslint-disable react/no-children-prop */
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { githubApi } from '../../api/GithubIssueApi';
import { useIssueContext } from '../../context/IssueContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { css } from '@emotion/react';

const flexAlign = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const imgFlexAlign = css`
  ${flexAlign}
`;

const imgSize = css`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50%;
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

const line = css`
  width: 100%;
  height: 1px;
  background-color: #c0c0c0;
  margin: 10px 0;
`;

export default function IssueDetail() {
  const [isLoading, setIsLoading] = useState(false);
  const { issueDetailInfo, getIssueDetailInfo } = useIssueContext();
  const location = useLocation();
  const issueId = location.state.issueId;
  const owner = location.state.owner;
  const repo = location.state.repo;

  useEffect(() => {
    const getIssueDetail = async () => {
      setIsLoading(true);

      try {
        const issueDetailData = await githubApi.getIssueDetail(
          owner,
          repo,
          issueId
        );
        getIssueDetailInfo(issueDetailData!);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getIssueDetail();
  }, []);

  const date = issueDetailInfo.createdAt
    ? issueDetailInfo.createdAt.split('T')[0].split('-')
    : [];

  return (
    <div>
      {isLoading && <div>로딩중</div>}
      {!isLoading && (
        <>
          <div css={flexAlign}>
            <div>
              <div css={imgFlexAlign}>
                <div css={imgSize}>
                  <a href={issueDetailInfo.profileLink}>
                    <img
                      style={{ width: '100%' }}
                      src={issueDetailInfo.profileUrl}
                      alt="profile_img"
                    />
                  </a>
                </div>
                <div css={issueTitleArea}>
                  <div>#{issueDetailInfo.number}</div>
                  <div>{issueDetailInfo.title}</div>
                </div>
              </div>
              <div css={issueTextArea}>
                <div>작성자: {issueDetailInfo.author}</div>
                <div css={issueText}>
                  작성일: {`${date[0]}년 ${date[1]}월 ${date[2]}일`}
                </div>
              </div>
            </div>
            <div css={commentStyle}>코멘트: {issueDetailInfo.comments}</div>
          </div>
          <div css={line} />
          <ReactMarkdown
            children={issueDetailInfo.body}
            remarkPlugins={[remarkGfm]}
          />
        </>
      )}
    </div>
  );
}

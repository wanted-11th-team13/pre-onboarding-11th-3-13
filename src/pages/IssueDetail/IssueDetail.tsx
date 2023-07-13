/* eslint-disable react/no-children-prop */
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { githubApi } from '../../api/GithubIssueApi';
import { useIssueContext } from '../../context/IssueContext';
import {
  commentStyle,
  flexAlign,
  goToBackBtn,
  imgFlexAlign,
  imgSize,
  issueText,
  issueTextArea,
  issueTitleArea,
  line,
} from './IssueDetailCSS';
import Markdown from '../../components/IssueDetail/Markdown';
import { GoBack } from '../../assets/icons';

export default function IssueDetail() {
  const [isLoading, setIsLoading] = useState(false);
  const { issueDetailInfo, getIssueDetailInfo } = useIssueContext();
  const location = useLocation();
  const issueId = location.state.issueId;
  const owner = location.state.owner;
  const repo = location.state.repo;
  const navigate = useNavigate();

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

  const goToBack = () => {
    navigate(-1);
  };

  const date = issueDetailInfo.createdAt
    ? issueDetailInfo.createdAt.split('T')[0].split('-')
    : [];

  return (
    <div>
      {isLoading && <div>로딩중</div>}
      {!isLoading && (
        <div>
          <button css={goToBackBtn} onClick={goToBack}>
            <GoBack />
          </button>
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
          <Markdown issueDetailInfo={issueDetailInfo} />
        </div>
      )}
    </div>
  );
}

/* eslint-disable react/no-children-prop */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoadingContext } from '../../context/LoadingContext';
import { githubApi } from '../../api/GithubIssueApi';
import { useIssueContext } from '../../context/IssueContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function IssueDetail() {
  const { isLoading, setLoading } = useLoadingContext();
  const { issueDetailInfo, getIssueDetailInfo } = useIssueContext();
  const location = useLocation();
  const issueId = location.state.issueId;
  const owner = location.state.owner;
  const repo = location.state.repo;

  useEffect(() => {
    const getIssueDetail = async () => {
      setLoading(true);

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
        setLoading(false);
      }
    };
    getIssueDetail();
  }, []);

  return (
    <div>
      {isLoading && <div>로딩중</div>}
      {!isLoading && (
        <>
          <div>{issueDetailInfo.author}</div>
          <div>{issueDetailInfo.comments}</div>
          <div>{issueDetailInfo.createdAt}</div>
          <div>{issueDetailInfo.number}</div>
          <div>{issueDetailInfo.title}</div>
          <div>{issueDetailInfo.userId}</div>
          <div>
            <img src={issueDetailInfo.profileUrl} alt="profile_img" />
          </div>
          <ReactMarkdown
            children={issueDetailInfo.body}
            remarkPlugins={[remarkGfm]}
          />
        </>
      )}
    </div>
  );
}

import { useContext, useEffect } from 'react';
import { GithubContext } from '../../context/GithubContext';
import { IssueListItem } from '../IssueListItem/IssueListItem';
import { IssueListAd } from '../IssueListAd/IssueListAd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export function IssueList() {
  const { issueList, fetchIssueList, isLoading } = useContext(GithubContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetchIssueList();
  }, []);

  return !isLoading ? (
    <IssueWrap>
      {issueList.map((issue, index) =>
        (index + 1) % 4 === 0 ? (
          <IssueListItem
            onClick={() => {
              navigate(`/detail/${issue.id}`);
            }}
            key={issue.id}
            issue={issue}
          >
            <IssueListAd />
          </IssueListItem>
        ) : (
          <IssueListItem
            onClick={() => {
              navigate(`/detail/${issue.id}`);
            }}
            key={issue.id}
            issue={issue}
          />
        )
      )}
    </IssueWrap>
  ) : (
    <>loading...</>
  );
}

export const IssueWrap = styled.ul`
  list-style: none;
  width: 70%;
  margin: 0 auto;
  padding: 0;
`;

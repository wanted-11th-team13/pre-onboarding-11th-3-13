import { useContext, useEffect } from 'react';
import { GithubContext } from '../../context/GithubContext';
import * as S from './IssueList.styled';
import { IssueListItem } from '../IssueListItem/IssueListItem';
import { IssueListAd } from '../IssueListAd/IssueListAd';

export function IssueList() {
  const { issueList, fetchIssueList } = useContext(GithubContext);
  useEffect(() => {
    fetchIssueList();
  }, []);
  return (
    <main>
      <S.IssueWrap>
        {issueList.map((issue, index) =>
          (index + 1) % 4 === 0 ? (
            <IssueListItem key={issue.id} issue={issue}>
              <IssueListAd />
            </IssueListItem>
          ) : (
            <IssueListItem key={issue.id} issue={issue} />
          )
        )}
      </S.IssueWrap>
    </main>
  );
}

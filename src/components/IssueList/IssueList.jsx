import { useContext, useEffect, useState } from 'react';
import { GithubContext } from '../../context/GithubContext';
import moment from 'moment';
import * as S from './IssueList.styled';
import { Link } from 'react-router-dom';

export function IssueList() {
  const { issueList, fetchIssueList } = useContext(GithubContext);
  useEffect(() => {
    fetchIssueList();
  }, []);
  return (
    <main>
      <S.IssueWrap>
        {issueList.map((issue) => (
          <S.IssueList key={issue.id}>
            <S.IssueContainer>
              <S.IssueNumber>#{issue.number}</S.IssueNumber>
              <S.IssueTitle>{issue.title}</S.IssueTitle>
            </S.IssueContainer>

            <S.IssueWriter> 작성자 : {issue.user.login}</S.IssueWriter>
            <S.IssueDate>
              작성일 : {moment(issue.created_at).format('YYYY-MM-DD')}
            </S.IssueDate>

            <S.IssueComments>🙋‍♂️{issue.comments}</S.IssueComments>
          </S.IssueList>
        ))}
      </S.IssueWrap>
    </main>
  );
}

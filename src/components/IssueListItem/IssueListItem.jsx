import * as S from './IssueListItem.styled';
import moment from 'moment';

// eslint-disable-next-line react/prop-types
export function IssueListItem({ issue, children, ...restProps }) {
  return (
    <>
      <S.IssueList key={issue.id} {...restProps}>
        <S.IssueContainer>
          <S.IssueNumber>#{issue.number}</S.IssueNumber>
          <S.IssueTitle>{issue.title}</S.IssueTitle>
        </S.IssueContainer>
        <S.IssueWriter> 작성자 : {issue.user.login}</S.IssueWriter>
        <S.IssueDate>
          작성일 : {moment(issue.created_at).format('YYYY-MM-DD')}
        </S.IssueDate>
        <S.IssueComments>코멘트:{issue.comments}</S.IssueComments>
      </S.IssueList>
      {children}
    </>
  );
}

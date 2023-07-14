/** @jsxImportSource @emotion/react */
import {
  commentStyle,
  flexAlign,
  issueText,
  issueTextArea,
  issueTitle,
  issueTitleArea,
  labelStyle,
} from '../../pages/IssueList/IssueListCSS';
import { IssueProps } from '../../types/IssueListTypes';

interface ListItemProps {
  issue: IssueProps;
}

export default function ListItem({ issue }: ListItemProps) {
  const date = issue.createdAt.split('T')[0].split('-');

  return (
    <div>
      <div css={flexAlign}>
        <div>
          <div css={issueTitleArea}>
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
    </div>
  );
}

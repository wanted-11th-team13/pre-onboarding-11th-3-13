import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { IssueDetailProps } from '../../types/IssueDetailTypes';

interface MarkdownProps {
  issueDetailInfo: IssueDetailProps;
}

export default function Markdown({ issueDetailInfo }: MarkdownProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {issueDetailInfo.body}
    </ReactMarkdown>
  );
}

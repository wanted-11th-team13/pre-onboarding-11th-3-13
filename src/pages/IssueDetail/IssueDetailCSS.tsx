/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const goToBackBtn = css`
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  background-color: transparent;
  position: absolute;
  top: 45px;
  left: 50px;
  cursor: pointer;
`;

export const flexAlign = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const imgFlexAlign = css`
  ${flexAlign}
`;

export const imgSize = css`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50%;
`;

export const issueTitleArea = css`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const issueTextArea = css`
  ${issueTitleArea}
  font-size: 16px;
`;

export const issueTitle = css`
  font-weight: 700;
  margin-left: 10px;
  white-space: nowrap;
`;

export const issueText = css`
  ${issueTitle}
  font-weight: 400;
  margin: 10px 0 10px 10px;
`;

export const commentStyle = css`
  white-space: nowrap;
`;

export const line = css`
  width: 100%;
  height: 1px;
  background-color: #c0c0c0;
  margin: 10px 0;
`;

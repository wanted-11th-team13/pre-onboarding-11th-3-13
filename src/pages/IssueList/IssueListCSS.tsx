/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const flexAlign = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const filterLoading = css`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 50px;
`;

export const listStyle = css`
  list-style: none;
  margin: 0 auto;
`;

export const itemStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 0;
  cursor: pointer;
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

export const labelStyle = (color: string) => css`
  display: inline;
  border: 2px solid ${'#' + color};
  border-radius: 10px;
  margin: 10px 3px 20px;
`;

export const line = css`
  width: 100%;
  height: 1px;
  background-color: #c0c0c0;
  margin: 10px 0;
`;

export const adImg = css`
  height: 200px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const adTag = css`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px 20px;
  background-color: #ff0000;
  color: #ffffff;
`;

export const scrollLoading = css`
  font-size: 24px;
  text-align: center;
`;

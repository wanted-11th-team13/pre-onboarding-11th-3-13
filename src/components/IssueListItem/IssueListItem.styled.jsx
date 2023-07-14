import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const IssueContainer = styled.div`
  /* background-color: blueviolet; */
  margin-bottom: 10px;
`;

export const IssueList = styled.li`
  /* background-color: pink; */
  padding: 20px 0 20px 0;
  position: relative;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`;

export const IssueTitle = styled.span`
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

export const IssueNumber = styled.span`
  /* background-color: brown; */
  margin-right: 7px;
`;

export const IssueWriter = styled.span`
  /* background-color: beige; */
  margin-right: 5px;
  color: #333;
`;

export const IssueDate = styled.span``;

export const IssueComments = styled.span`
  /* background-color: darkblue; */
  position: absolute;
  right: 0;
  transform: translateY(-50%);
`;

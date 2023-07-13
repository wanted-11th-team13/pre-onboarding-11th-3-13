import axios from 'axios';
import { IssueNumber } from '../components/IssueListItem/IssueListItem.styled';

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
const repoOwner = 'facebook';
const repo = 'react';

export const getIssueList = async (perPage, Page) => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${repoOwner}/${repo}/issues?per_page=${perPage}&page=${Page}&sort=comments`, // per_page = Query parameters
      {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

const getIssue = async () => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${repoOwner}/${repo}/issues/${IssueNumber}`,
      {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

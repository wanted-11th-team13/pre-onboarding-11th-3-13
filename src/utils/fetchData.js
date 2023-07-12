import axios from 'axios';

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const getIssueList = async () => {
  try {
    const response = await axios.get(
      'https://api.github.com/repos/facebook/react/issues?per_page=100&sort=comments', // per_page = Query parameters
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
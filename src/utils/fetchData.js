import axios from 'axios';

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const getIssueList = async () => {
  try {
    const response = await axios.get(
      'https://api.github.com/repos/facebook/react/issues',
      {
        header: {
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

import axios from 'axios';
import { useEffect } from 'react';

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export function IssueList() {
  const getIssueList = async () => {
    try {
      const response = await axios.get(
        'https://api.github.com/repos/facebook/react/issues',
        {
          header: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(String(error));
    }
  };

  useEffect(() => {
    console.log(getIssueList());
  }, []);

  return <main>IssueList</main>;
}

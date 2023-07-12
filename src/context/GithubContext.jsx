import { createContext, useState } from 'react';
import { getIssueList } from '../utils';

const initialContext = {
  issueList: [],
  issue: null,
  fetchIssueList: () => {}, // null
};

export const GithubContext = createContext(initialContext);

// eslint-disable-next-line react/prop-types
export const GithubProvider = ({ children }) => {
  const [issueList, setIssueList] = useState([]);

  const fetchIssueList = async () => {
    try {
      const data = await getIssueList();
      setIssueList(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <GithubContext.Provider value={{ issueList, fetchIssueList }}>
      {children}
    </GithubContext.Provider>
  );
};

// GithubContext.displayName = 'GithubContext';

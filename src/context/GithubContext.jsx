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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [issueList, setIssueList] = useState([]);

  const fetchIssueList = async () => {
    setIsLoading(true);
    try {
      const data = await getIssueList();
      setIssueList(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <GithubContext.Provider
      value={{ issueList, fetchIssueList, error, isLoading }}
    >
      {children}
    </GithubContext.Provider>
  );
};

// GithubContext.displayName = 'GithubContext';

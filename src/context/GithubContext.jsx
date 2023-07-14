import { createContext, useState } from 'react';
import { getIssue, getIssueList } from '@/utils';

const initialContext = {
  issueList: [],
  issue: null,
  fetchIssueList: () => {}, // null
  fetchIssue: () => {},
};

export const GithubContext = createContext(initialContext);

// eslint-disable-next-line react/prop-types
export const GithubProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [issueList, setIssueList] = useState([]);
  const [issue, setIssue] = useState(null);

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

  const fetchIssue = async (issueNumber) => {
    setIsLoading(true);
    try {
      const data = await getIssue(issueNumber);
      setIssue(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GithubContext.Provider
      value={{ issueList, fetchIssueList, error, isLoading, issue, fetchIssue }}
    >
      {children}
    </GithubContext.Provider>
  );
};

// GithubContext.displayName = 'GithubContext';

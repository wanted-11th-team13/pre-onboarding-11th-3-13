import React, { ReactNode, createContext, useContext, useState } from 'react';
import { IssueProps } from '../types/IssueListTypes';

type IssueContextProps = {
  issueList: IssueProps[];
  getIssueList: (issueList: IssueProps[]) => void;
};

const IssueContext = createContext<IssueContextProps>({
  issueList: [],
  getIssueList: () => {},
});

interface IssueProviderProps {
  children: ReactNode;
}

export function IssueProvider({ children }: IssueProviderProps) {
  const [issueList, setIssueList] = useState<IssueProps[]>([]);

  const getIssueList = (issues: IssueProps[]) => {
    setIssueList(issues);
  };

  return (
    <IssueContext.Provider value={{ issueList, getIssueList }}>
      {children}
    </IssueContext.Provider>
  );
}

export const useIssueContext = () => useContext(IssueContext);

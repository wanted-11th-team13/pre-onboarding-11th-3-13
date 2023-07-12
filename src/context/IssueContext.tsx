import React, { ReactNode, createContext, useContext, useState } from 'react';
import { IssueProps } from '../types/IssueListTypes';
import { IssueDetailProps } from '../types/IssueDetailTyes';

type IssueContextProps = {
  issueListInfo: IssueProps[];
  issueDetailInfo: IssueDetailProps;
  getIssueListInfo: (issueList: IssueProps[]) => void;
  getIssueDetailInfo: (issueDetail: IssueDetailProps) => void;
};

const IssueContext = createContext<IssueContextProps>({
  issueListInfo: [],
  issueDetailInfo: {
    id: 0,
    number: 0,
    title: '',
    comments: 0,
    createdAt: null,
    body: '',
    userId: 0,
    author: '',
    profileUrl: '',
    profileLink: '',
  },
  getIssueListInfo: () => {},
  getIssueDetailInfo: () => {},
});

interface IssueProviderProps {
  children: ReactNode;
}

export function IssueProvider({ children }: IssueProviderProps) {
  const [issueListInfo, setIssueListInfo] = useState<IssueProps[]>([]);
  const [issueDetailInfo, setIssueDetailInfo] = useState<IssueDetailProps>({});

  const getIssueListInfo = (issues: IssueProps[]) => {
    setIssueListInfo(issues);
  };

  const getIssueDetailInfo = (issueDetail: IssueDetailProps) => {
    setIssueDetailInfo(issueDetail);
  };

  return (
    <IssueContext.Provider
      value={{
        issueListInfo,
        getIssueListInfo,
        issueDetailInfo,
        getIssueDetailInfo,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
}

export const useIssueContext = () => useContext(IssueContext);

export const IssueInfo = {
  OWNER: 'facebook',
  REPO: 'react',
};

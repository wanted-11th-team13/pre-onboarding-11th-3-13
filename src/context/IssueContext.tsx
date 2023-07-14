import React, { ReactNode, createContext, useContext, useState } from 'react';
import { IssueProps } from '../types/IssueListTypes';
import { IssueDetailProps } from '../types/IssueDetailTypes';
import {
  DirectionFilter,
  SortFilter,
  StateFilter,
} from '../types/IssueFilterTypes';

type IssueContextProps = {
  issueListInfo: IssueProps[];
  issueDetailInfo: IssueDetailProps;
  getIssueListInfo: (issueList: IssueProps[], isAppend: boolean) => void;
  getIssueDetailInfo: (issueDetail: IssueDetailProps) => void;
  stateFilter: StateFilter;
  setStateFilter: (state: StateFilter) => void;
  sortFilter: SortFilter;
  setSortFilter: (sort: SortFilter) => void;
  directionFilter: DirectionFilter;
  setDirectionFilter: (direction: DirectionFilter) => void;
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
  stateFilter: StateFilter.Open,
  setStateFilter: () => {},
  sortFilter: SortFilter.Comments,
  setSortFilter: () => {},
  directionFilter: DirectionFilter.Desc,
  setDirectionFilter: () => {},
});

interface IssueProviderProps {
  children: ReactNode;
}

export function IssueProvider({ children }: IssueProviderProps) {
  const [issueListInfo, setIssueListInfo] = useState<IssueProps[]>([]);
  const [issueDetailInfo, setIssueDetailInfo] = useState<IssueDetailProps>({
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
  });

  const [stateFilter, setStateFilter] = useState<StateFilter>(StateFilter.Open);
  const [sortFilter, setSortFilter] = useState<SortFilter>(SortFilter.Comments);
  const [directionFilter, setDirectionFilter] = useState<DirectionFilter>(
    DirectionFilter.Desc
  );

  const getIssueListInfo = (issues: IssueProps[], isAppend: boolean = true) => {
    setIssueListInfo((prev: IssueProps[]) =>
      isAppend ? [...prev, ...issues] : [...issues]
    );
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
        stateFilter,
        setStateFilter,
        sortFilter,
        setSortFilter,
        directionFilter,
        setDirectionFilter,
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

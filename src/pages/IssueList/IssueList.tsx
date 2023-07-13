/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from 'react';
import { githubApi } from '../../api/GithubIssueApi';
import { IssueInfo, useIssueContext } from '../../context/IssueContext';
import { useNavigate } from 'react-router-dom';
import { filterLoading, itemStyle, line, listStyle } from './IssueListCSS';
import Ad from '../../components/IssueList/Ad';
import ListItem from '../../components/IssueList/ListItem';
import Filter from '../../components/IssueList/Filter';

export default function IssueList() {
  const owner = IssueInfo.OWNER;
  const repo = IssueInfo.REPO;
  const {
    issueListInfo,
    getIssueListInfo,
    stateFilter,
    sortFilter,
    directionFilter,
  } = useIssueContext();
  const [isFilterLoading, setIsFilterLoading] = useState(false);
  const [isInfiniteScrollLoading, setIsInfiniteScrollLoading] = useState(false);
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver | null>(null);
  const navigate = useNavigate();

  const lastIssueElementRef = useCallback(
    (node: HTMLLIElement) => {
      if (isInfiniteScrollLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isInfiniteScrollLoading]
  );

  useEffect(() => {
    const getIssueLists = async () => {
      setIsFilterLoading(true);
      try {
        const issueListData = await githubApi.getIssueList(
          owner,
          repo,
          1,
          stateFilter,
          sortFilter,
          directionFilter
        );
        getIssueListInfo(issueListData, false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsFilterLoading(false);
      }
    };

    getIssueLists();
    setPage(1);
  }, [stateFilter, sortFilter, directionFilter]);

  useEffect(() => {
    const getMoreIssueLists = async () => {
      if (page === 1) return;

      setIsInfiniteScrollLoading(true);
      try {
        const issueListData = await githubApi.getIssueList(
          owner,
          repo,
          page,
          stateFilter,
          sortFilter,
          directionFilter
        );
        getIssueListInfo(issueListData, true);
      } catch (error) {
        console.log(error);
      } finally {
        setIsInfiniteScrollLoading(false);
      }
    };

    getMoreIssueLists();
  }, [page]);

  const adZone = (index: number) => (index + 1) % 5 === 0;

  const goToDetail = (issueId: number, isAdZone: boolean) => {
    if (isAdZone) {
      window.location.href = 'https://www.wanted.co.kr/';
    } else {
      navigate(`/issue/${issueId}`, {
        state: {
          owner,
          repo,
          issueId,
        },
      });
    }
  };

  return (
    <div>
      <Filter />
      {isFilterLoading ? (
        <div css={filterLoading}>Loading...</div>
      ) : (
        <ul css={listStyle}>
          {issueListInfo?.map((issue, index) => {
            const issueId = issue.issueNumber;
            const isAdZone = adZone(index);
            return (
              <li
                ref={lastIssueElementRef}
                css={itemStyle}
                key={index + issue.title}
                onClick={() => {
                  goToDetail(issueId, isAdZone);
                }}
              >
                {isAdZone ? <Ad /> : <ListItem issue={issue} />}
                <div css={line} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

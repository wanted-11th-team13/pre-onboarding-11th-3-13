/** @jsxImportSource @emotion/react */
import React from 'react';
import { useIssueContext } from '../../context/IssueContext';
import {
  DirectionFilter,
  SortFilter,
  StateFilter,
} from '../../types/IssueFilterTypes';
import { css } from '@emotion/react';

const filterAlign = css`
  text-align: center;
`;

const labelAlign = css`
  margin: 0 20px;
`;

export default function Filter() {
  const {
    stateFilter,
    setStateFilter,
    sortFilter,
    setSortFilter,
    directionFilter,
    setDirectionFilter,
  } = useIssueContext();

  const handleStateFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStateFilter(event.target.value as StateFilter);
  };

  const handleSortFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortFilter(event.target.value as SortFilter);
  };

  const handleDirectionFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDirectionFilter(event.target.value as DirectionFilter);
  };

  return (
    <div css={filterAlign}>
      <label>
        State:
        <select value={stateFilter} onChange={handleStateFilterChange}>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
          <option value="all">All</option>
        </select>
      </label>
      <label css={labelAlign}>
        Sort:
        <select value={sortFilter} onChange={handleSortFilterChange}>
          <option value="created">Created</option>
          <option value="updated">Updated</option>
          <option value="comments">Comments</option>
        </select>
      </label>
      <label>
        Direction:
        <select value={directionFilter} onChange={handleDirectionFilterChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
}

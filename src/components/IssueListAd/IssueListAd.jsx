import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function IssueListAd() {
  return (
    <AdList>
      <AdImage to="https://www.wanted.co.kr/jobsfeed">
        <img
          alt="광고"
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
        />
      </AdImage>
    </AdList>
  );
}

const AdList = styled.li`
  padding: 20px 0;
`;

const AdImage = styled(Link)`
  display: block;
  text-align: center;
`;

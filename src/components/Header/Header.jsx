import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <HeaderTitle>
      <HeaderTitleLink to="/" href>
        <h1>Facebook/React</h1>
      </HeaderTitleLink>
    </HeaderTitle>
  );
}

const HeaderTitle = styled.header`
  text-align: center;
`;

const HeaderTitleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

import styled from 'styled-components';

export function Header() {
  return (
    <HeaderTitle>
      <h1>Angular/Angular-cli</h1>
    </HeaderTitle>
  );
}

const HeaderTitle = styled.header`
  text-align: center;
`;

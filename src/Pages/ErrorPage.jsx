import styled from 'styled-components';

export function ErrorPage() {
  return (
    <ErrorContainer>
      <h1>Error!</h1>
      <h3>오류가 발생하였습니다</h3>
      <h4>
        <a href="/">메인페이지 돌아가기</a>
      </h4>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  text-align: center;
`;

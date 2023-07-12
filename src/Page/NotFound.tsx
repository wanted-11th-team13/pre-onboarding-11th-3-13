import { styled } from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100%;
  font-size: 100px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function NotFound() {
  return <Container>Error! Not Found</Container>;
}

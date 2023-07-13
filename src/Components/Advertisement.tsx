import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
`;

const Img = styled.img`
  height: 80%;
`;

export default function Advertisement() {
  return (
    <Link to="https://www.wanted.co.kr/">
      <Container>
        <Img src="/imgs/wanted.webp" alt="advertisement" />
      </Container>
    </Link>
  );
}

import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.img`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
`;

export default function Advertisement() {
  return (
    <Link to="https://www.wanted.co.kr/">
      <Container src="/imgs/wanted.webp" alt="advertisement" />
    </Link>
  );
}

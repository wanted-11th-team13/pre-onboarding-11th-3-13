import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 500px;
  position: relative;
`;
export default function Root() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import Issue from "./Components/Issue";
import Header from "./Components/Header";
import useDatas from "./Hooks/useDatas";
import Advertisement from "./Components/Advertisement";

const Container = styled.main`
  width: 600px;
  height: auto;
  border: 3px solid black;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 20px;
`;

const Loader = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const Bottom = styled.section`
  width: 80%;
  height: 100px;
  background-color: whitesmoke;
  border-radius: 20px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

const options = {
  threshold: 1.0,
};

function App() {
  const { datas, isLoading, addDatas } = useDatas();

  const target = useRef(null);

  const observer = new IntersectionObserver(addDatas, options);

  useEffect(() => {
    observer.observe(target.current as any);
  }, []);

  return (
    <Container>
      <Header />
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {datas.map((data, idx) => {
            if (idx > 0 && idx % 4 === 0) {
              return (
                <>
                  <Advertisement key={"Advertisement" + idx} />
                  <Issue key={data.number} data={data} />
                </>
              );
            } else {
              return <Issue key={data.number} data={data} />;
            }
          })}
        </>
      )}
      <Bottom ref={target}>⬆️</Bottom>
    </Container>
  );
}

export default App;

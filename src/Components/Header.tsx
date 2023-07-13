import { styled } from "styled-components";
import useRepoState from "../Context/useRepoState";
import useOwnerState from "../Context/useOwnerState";
import { useState } from "react";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.section`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
  margin: 0 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 0 10px;
  background-color: ghostwhite;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  &:focus {
    border: 3px solid black;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: gainsboro;
  margin: 30px 0;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export default function Header() {
  const [repo, setRepo] = useRepoState();
  const [owner, setOwner] = useOwnerState();
  const [edit, setEdit] = useState(false);

  return (
    <Container>
      {edit ? (
        <Text>
          <Input
            placeholder="owner"
            value={owner}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setOwner(event.target.value)
            }
          />
          <Input
            placeholder="repo"
            value={repo}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setRepo(event.target.value)
            }
          />
        </Text>
      ) : (
        <Text>{`${owner}  ${repo}`}</Text>
      )}
      <Button onClick={() => setEdit((prev: boolean) => !prev)}>
        {edit ? "확인" : "수정"}
      </Button>
    </Container>
  );
}

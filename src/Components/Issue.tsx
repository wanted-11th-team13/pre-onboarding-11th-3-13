import { Link } from "react-router-dom";
import { styled } from "styled-components";

interface IProps {
  data: IData;
}

const Container = styled.section`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Infos = styled.section`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
`;

const CommentNum = styled.h4`
  font-size: 20px;
`;

const PostInfo = styled.h5`
  font-size: 17px;
`;

export default function Issue({ data }: IProps) {
  return (
    <Link to={data.number + ""}>
      <Container>
        <Infos>
          <Title>
            {data.title.length >= 36
              ? data.title.slice(0, 36) + "..."
              : data.title}
          </Title>
          <CommentNum>{`코멘트: ${data.comments}`}</CommentNum>
        </Infos>
        <Infos>
          <PostInfo>
            {`작성자: ${data.user.login}, 작성일: ${data.updated_at}`}
          </PostInfo>
        </Infos>
      </Container>
    </Link>
  );
}

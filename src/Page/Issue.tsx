import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { styled } from "styled-components";
import Header from "../Components/Header";
import { formatDate } from "../functions/functions";
import Markdown from "../functions/Markdown";
import useOneIssue from "../Hooks/useOneIssue";

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
  width: 100%;
  height: 100%;
  font-size: 100px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IssueTop = styled.section`
  height: 100px;
  height: auto;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  background-color: black;
`;

const IssueTopTexts = styled.section`
  width: 430px;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 10px 0;
  margin-left: 50px;
  border-bottom: 1px solid black;
`;

const IssueTopText = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h2 {
    font-size: 30px;
    font-weight: bold;
  }

  & h3,
  & h4 {
    font-size: 20px;
    font-weight: 400;
  }
`;

const IssueBody = styled.section`
  margin: 50px 0;
`;

export default function Issue() {
  const params = useParams();
  const issueNumber = Number(params.issueNumber);

  const { data, isLoading } = useOneIssue(issueNumber);

  const navigate = useNavigate();

  useEffect(() => {
    if (data === null) {
      navigate("/notfound");
    }
  }, [data]);

  return isLoading ? (
    <Loader>Loading...</Loader>
  ) : (
    <Container>
      <Header />
      <IssueTop>
        <Avatar src={data?.user.avatar_url} alt="avatar" />
        <IssueTopTexts>
          <IssueTopText>
            <h2>{data?.title}</h2>
            <h4>{`코멘트: ${data?.comments}`}</h4>
          </IssueTopText>
          <IssueTopText>
            <h3>{`작성자: ${data?.user.login}, 작성일: ${formatDate(
              data?.updated_at as string
            )}`}</h3>
          </IssueTopText>
        </IssueTopTexts>
      </IssueTop>
      <IssueBody>
        <Markdown markdownString={data?.body as string} />
      </IssueBody>
    </Container>
  );
}

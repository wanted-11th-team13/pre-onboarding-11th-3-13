import { useParams } from 'react-router-dom';
import { IssueDetail } from '../components';
import { GithubContext, GithubProvider } from '../context/GithubContext';
import React, { useContext, useEffect } from 'react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import moment from 'moment';

function DetailPage() {
  const { number } = useParams();
  const { isLoading, issue, fetchIssue } = useContext(GithubContext);

  // console.log('id입니다', number);
  useEffect(() => {
    if (number) {
      const detailNumber = parseInt(number);
      fetchIssue(detailNumber);
    }
  }, []);

  return !isLoading ? (
    <Wrapper>
      <BoxContainer>
        <Title>title : {issue?.title}</Title>
        <IssueNumber>#{issue?.number}</IssueNumber>
        <Avatar src={issue?.user.avatar_url} alt="avatar" />
        <Writer>작성자:{issue?.user.login}</Writer>
        <Date>만든날짜 : {moment(issue?.created_at).format('YYYY-MM-DD')}</Date>
        <Comments>코멘트 : {issue?.comments}</Comments>
      </BoxContainer>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue?.body}</ReactMarkdown>
    </Wrapper>
  ) : (
    <>Loadding...</>
  );
}

// styeld-Component

const Wrapper = styled.div`
  width: 1200px;
  margin: 100px auto;
  /* background-color: pink; */

  position: relative;
`;

const BoxContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
`;

const Title = styled.h3`
  position: absolute;
  top: -20px;
  left: 110px;
`;

const IssueNumber = styled.div`
  position: absolute;
  left: 60px;
`;

const Writer = styled.span`
  margin-left: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  hegith: 50px;
`;

const Comments = styled.span`
  margin-left: 15px;
`;

const Date = styled.span`
  margin-left: 10px;
`;

export default DetailPage;

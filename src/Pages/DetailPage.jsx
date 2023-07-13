import { useParams } from 'react-router-dom';
import { IssueDetail } from '../components';
import { GithubContext, GithubProvider } from '../context/GithubContext';
import { useContext, useEffect } from 'react';

function DetailPage() {
  const { number } = useParams();
  const { isLoading, issue, fetchIssue } = useContext(GithubContext);

  console.log('id입니다', number);
  useEffect(() => {
    console.log('asd');
  }, []);

  return (
    <>
      <div>디테일</div>
    </>
  );
}

export default DetailPage;

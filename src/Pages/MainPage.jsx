import { IssueList } from '../components/IssueList/IssueList';
import { Header } from '../components/Header/Header';

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <IssueList />
      </main>
    </>
  );
}

export default MainPage;

import { IssueList, Header } from '@/components';
import { GithubProvider } from '../context/GithubContext';

export function App() {
  return (
    <GithubProvider>
      <Header />
      <IssueList />
    </GithubProvider>
  );
}

export default App;

import { IssueList, Header } from '@/components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../Pages/MainPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import DetailPage from '../Pages/DetailPage';
import { Header } from '../components';
import { ErrorPage } from '../Pages/ErrorPage';

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:number" element={<DetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import DetailPage from '../Pages/DetailPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail:number" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

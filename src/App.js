import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

import ScrollToTop from './layout/ScrollToTop';
import Layout from './layout/Layout';

import ToegeungilPage from './pages/project/ToegeungilPage';
import AlgorePage from './pages/project/AlgorePage';
import YthinkPage from './pages/project/YthinkPage';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='minyoung' element={<Layout />}>
            <Route index element={<DetailPage />} />
            <Route path='toegeungil' element={<ToegeungilPage />} />
            <Route path='algore' element={<AlgorePage />} />
            <Route path='ythink' element={<YthinkPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
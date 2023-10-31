import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

import ScrollToTop from './layout/components/ScrollToTop';
import MainLayout from './layout/MainLayout';
import ProjectLayout from './layout/ProjectLayout';

import ToegeungilPage from './pages/project/ToegeungilPage';
import AlgorePage from './pages/project/AlgorePage';
import YthinkPage from './pages/project/YthinkPage';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='minyoung' element={<MainLayout />}>
            <Route index element={<DetailPage />} />
          </Route>
          <Route path='project' element={<ProjectLayout />}>
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
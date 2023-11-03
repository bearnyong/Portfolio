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
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path='/Portfolio' element={<MainPage />} />
          <Route path='/Portfolio/minyoung' element={<MainLayout />}>
            <Route index element={<DetailPage />} />
          </Route>
          <Route path='/Portfolio/project' element={<ProjectLayout />}>
            <Route path='/Portfolio/project/toegeungil' element={<ToegeungilPage />} />
            <Route path='/Portfolio/project/algore' element={<AlgorePage />} />
            <Route path='/Portfolio/project/ythink' element={<YthinkPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
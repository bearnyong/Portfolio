import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

import ScrollToTop from './layout/ScrollToTop';
import Layout from './layout/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='detail' element={<Layout/>}>
            <Route index element={<DetailPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
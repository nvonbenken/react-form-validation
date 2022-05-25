import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Custom from './pages/Custom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Mui from './pages/Mui';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Mui" element={<Mui />} />
          <Route path="Custom" element={<Custom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

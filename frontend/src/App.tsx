import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

/**
 * App.tsx เป็นตัวกลางสำหรับจัดการ Routing ของหน้าต่าง ๆ
 */
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* คุณสามารถเพิ่ม Route หน้าใหม่ ๆ ได้ที่นี่ เช่น: */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

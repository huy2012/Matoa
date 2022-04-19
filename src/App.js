import { Routes, Route, Navigate } from "react-router-dom";

import NavMenu from './Components/header/nav/nav_menu';
import Index from "./pages/Index/Index";
import PaymentSupport from "./Components/body/PaymentSupport/PaymentSupport";
import Footer from "./Components/body/footer/Footer";
import DetailWatch from "./pages/DetailWatch/DetailWatch";
import './App.css';
import './App.scss'

function App() {
  return (
    <div>
      <div className='app'>
        <NavMenu />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/watchDetail" element={<DetailWatch />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <div className='footer'>
        <PaymentSupport />
        <Footer />
      </div>
    </div>
  );
}

export default App;

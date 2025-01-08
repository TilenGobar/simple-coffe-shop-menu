import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Coffe from "./coffe.jsx";;

const Menu = () => {
  const location = useLocation()

  const isMenuPage = location.pathname === "/menu"
  
  return (
    <div>
      {isMenuPage && (
      <nav>
        <div className="cont-one">
        <Link to="/menu/kavni-napitki" className='nav-button-menu'>KAVNI NAPITKI</Link>
        </div>
        <div className="cont-one">
        <Link to="/menu/topli-napitki" className='nav-button-menu'>TOPLI NAPITKI</Link>
        </div>
        <div className="cont-one">
        <Link to="/menu/brezalkoholne-pijace" className='nav-button-menu'>BREZALKOHOLNE PIJAČE</Link>
        </div>
        <div className="cont-one">
          <Link to="/menu/alkoholne-pijace" className='nav-button-menu'>ALKOHOLNE PIJAČE</Link>
        </div>
      </nav>
      )}
    <main>
      <Routes>
        <Route path="kavni-napitki" element={<Coffe/>} />
        <Route path="topli-napitki" element={<Coffe/>} />
        <Route path="brezalkoholne-pijace" element={<Coffe/>} />
        <Route path="alkoholne-pijace" element={<Coffe/>} />
      </Routes>
    </main>
    </div>
  );
};

export default Menu;

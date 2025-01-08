import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Menu from "../pages/menu.jsx"
import Coffe from '../pages/coffe.jsx'
import CoffeTwo from '../pages/coffe2.jsx'

const Paths = () => {
  return (
  <div>
    <div>
      <div className='container-menu'>
        <Link to="/menu" className='nav-button-menu pos-1'>NAZAJ</Link>
        <Link to="/menu/kavni-napitki" className='nav-button-menu pos-2'>1</Link>
        <Link to="/menu/kavni-napitki-2" className='nav-button-menu pos3'>2</Link>
      </div>
      <Routes>
        <Route path='/menu/*' element={<Menu/>}/>
        <Route path='kavni-napitki/*' element={<Coffe/>}/>
        <Route path='kavni-napitki-2/' element={<CoffeTwo/>}/>
      </Routes>
      </div>
  
    </div>
    )
}

export default Paths
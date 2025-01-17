import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.jsx";
import Menu from "./pages/menu.jsx";
import About from "./pages/about.jsx";
import reactImg from "../src/assets/logo_transparent.png";

function App() {
  return (
    <Router>
      <div className="App">
        <img className="image" src={reactImg} />
        <nav className="navbar">
          <Link to="/home" className="nav-button">
            DOMOV
          </Link>
          <Link to="/menu" className="nav-button">
            CENIK
          </Link>
          <Link to="/about" className="nav-button">
            O NAS
          </Link>
        </nav>
        
        <Routes>
          <Route path="/home/" element={<Home />} />
          <Route path="/menu/*" element={<Menu />} />
          <Route path="/about/" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

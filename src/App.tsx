import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CharacterSheet from './pages/CharacterSheet';
import Cosmology from './pages/Cosmology';
import Classes from './pages/Classes';
import './App.css';

function App() {
  return (
    <Router basename="/affinity-app">
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-title">Affinity TTRPG</h1>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/character">Character Sheet</Link></li>
              <li><Link to="/classes">Classes</Link></li>
              <li><Link to="/cosmology">Cosmology</Link></li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character" element={<CharacterSheet />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/cosmology" element={<Cosmology />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>Affinity TTRPG System - A dice pool system using d6s</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

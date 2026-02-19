import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">◇ Affinity</h1>
          <p className="hero-subtitle">A Heroic Risk-Attrition System</p>
          <div className="hero-tagline">
            <span className="symbol">△</span>
            <span>All dice are d6</span>
            <span className="divider">|</span>
            <span className="symbol">○</span>
            <span>Hit Dice as life &amp; stamina</span>
            <span className="divider">|</span>
            <span className="symbol">□</span>
            <span>Exertion fuels power</span>
          </div>
        </div>
      </header>

      {/* Philosophy Block */}
      <section className="philosophy-section">
        <h2>◇ Core Philosophy</h2>
        <div className="philosophy-grid">
          <div className="philosophy-card">
            <span className="card-symbol">5+</span>
            <h3>Success Thresholds</h3>
            <p>Roll 5+ for 1 success. Roll 6 for 2 successes (Explosive).</p>
          </div>
          <div className="philosophy-card">
            <span className="card-symbol">HD</span>
            <h3>Hit Dice Pools</h3>
            <p>Individual dice that exist or don't — no hit points, just dice.</p>
          </div>
          <div className="philosophy-card">
            <span className="card-symbol">⚠</span>
            <h3>Exertion Risk</h3>
            <p>Bonus dice grant power but burn HD on 1s. Commitment costs health.</p>
          </div>
          <div className="philosophy-card">
            <span className="card-symbol">◈</span>
            <h3>Resolve</h3>
            <p>Mental endurance fuels abilities and determines your will to fight.</p>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="nav-section">
        <h2>◇ Explore the Grimoire</h2>
        <div className="nav-cards">
          <Link to="/rules" className="nav-card">
            <div className="card-icon">📜</div>
            <h3>Rules Reference</h3>
            <p>Core resolution, combat mechanics, defense rolls, death &amp; dying</p>
          </Link>
          <Link to="/classes" className="nav-card">
            <div className="card-icon">⚔️</div>
            <h3>Classes &amp; Ways</h3>
            <p>Seven paths of power: Combatant, Priest, Ranger, Scholar, Shaman, Sovereign, Weaver</p>
          </Link>
          <Link to="/cosmology" className="nav-card">
            <div className="card-icon">✧</div>
            <h3>Cosmology</h3>
            <p>The Custodial Powers, cosmic realms, and the forces that shape Aeralon</p>
          </Link>
          <Link to="/character" className="nav-card">
            <div className="card-icon">📋</div>
            <h3>Character Sheet</h3>
            <p>Create, manage, and export your heroes — all data stays local</p>
          </Link>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="quick-section">
        <h2>◇ At a Glance</h2>
        <div className="quick-grid">
          <div className="quick-block">
            <h4>Action Resolution</h4>
            <ol>
              <li>Declare action + exertion</li>
              <li>Roll Proficiency + Exertion dice</li>
              <li>Count successes (5+=1, 6=2)</li>
              <li>Apply effects, burn HD for 1s</li>
            </ol>
          </div>
          <div className="quick-block">
            <h4>Proficiency by Level</h4>
            <table>
              <tbody>
                <tr><td>Lv 1-2</td><td>Prof 1</td></tr>
                <tr><td>Lv 3-4</td><td>Prof 2</td></tr>
                <tr><td>Lv 5-6</td><td>Prof 3</td></tr>
                <tr><td>Lv 7-8</td><td>Prof 4</td></tr>
                <tr><td>Lv 9-10</td><td>Prof 5</td></tr>
              </tbody>
            </table>
          </div>
          <div className="quick-block">
            <h4>Defense Rules</h4>
            <ul>
              <li>5+ sustains (die survives)</li>
              <li>4- fails (die destroyed)</li>
              <li>Capacity = Proficiency rolls</li>
              <li>Outer layers first</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="cta-section">
        <p className="design-intent">
          Big actions require commitment. Commitment risks collapse.
        </p>
      </section>
    </div>
  );
}

export default Home;

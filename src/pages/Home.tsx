function Home() {
  return (
    <div className="page">
      <h1>Welcome to Affinity TTRPG</h1>
      <div className="intro">
        <p>
          <strong>Affinity</strong> is a tabletop roleplaying game built on d6 dice pools,
          where your Hit Dice serve as both life and stamina, and every action demands
          meaningful choice.
        </p>
        
        <h2>Core Philosophy</h2>
        <ul>
          <li><strong>All dice are d6</strong> - No d20s, just pools of six-sided dice</li>
          <li><strong>Success Thresholds</strong> - Roll 5+ for 1 success, 6 counts as 2 successes</li>
          <li><strong>Hit Dice as Resource</strong> - Your HD pool represents life, stamina, and capability</li>
          <li><strong>Exertion Risk</strong> - Bonus dice burn HD on 1s, creating tension</li>
          <li><strong>Resolve</strong> - Mental endurance that fuels abilities and measures will</li>
        </ul>

        <h2>Quick Start</h2>
        <p>
          Navigate to <strong>Character Sheet</strong> to create your character, or explore
          <strong> Classes</strong> and <strong>Cosmology</strong> to learn about the world of Aeralon.
        </p>

        <h2>Character Management</h2>
        <p>
          This app allows you to:
        </p>
        <ul>
          <li>Create and manage character sheets</li>
          <li>Export characters as encoded strings (save them locally!)</li>
          <li>Import characters from previously saved strings</li>
          <li>No account needed - all data stays on your machine</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

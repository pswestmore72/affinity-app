import { useState } from 'react';
import '../styles/Rules.css';

type RuleTab = 'resolution' | 'combat' | 'resources' | 'death';

export default function Rules() {
  const [activeTab, setActiveTab] = useState<RuleTab>('resolution');

  return (
    <div className="rules-page">
      <header className="rules-header">
        <h1>◇ Rules Reference</h1>
        <p className="design-intent">
          The foundational grimoire — all dice are d6, all rolls are dice pools
        </p>
      </header>

      <nav className="rules-tabs">
        <button 
          className={`tab ${activeTab === 'resolution' ? 'active' : ''}`}
          onClick={() => setActiveTab('resolution')}
        >
          Core Resolution
        </button>
        <button 
          className={`tab ${activeTab === 'combat' ? 'active' : ''}`}
          onClick={() => setActiveTab('combat')}
        >
          Combat
        </button>
        <button 
          className={`tab ${activeTab === 'resources' ? 'active' : ''}`}
          onClick={() => setActiveTab('resources')}
        >
          Resources
        </button>
        <button 
          className={`tab ${activeTab === 'death' ? 'active' : ''}`}
          onClick={() => setActiveTab('death')}
        >
          Death &amp; Dying
        </button>
      </nav>

      <section className="rules-content">
        {activeTab === 'resolution' && <CoreResolution />}
        {activeTab === 'combat' && <CombatRules />}
        {activeTab === 'resources' && <ResourcesSection />}
        {activeTab === 'death' && <DeathSection />}
      </section>
    </div>
  );
}

function CoreResolution() {
  return (
    <div className="rules-section">
      <h2>◇ Core Resolution</h2>
      
      <div className="rule-block">
        <h3>Success Rules</h3>
        <ul className="rule-list">
          <li><strong>5+</strong> = 1 success</li>
          <li><strong>6</strong> = 2 successes (Explosive)</li>
          <li><strong>1</strong> = burn 1 HD (only on exertion dice)</li>
        </ul>
      </div>

      <div className="rule-block">
        <h3>Action Resolution Sequence</h3>
        <ol className="rule-list numbered">
          <li>Declare action and exertion (max = your Proficiency per action)</li>
          <li>Roll Proficiency + Exertion dice</li>
          <li>Count successes (5=1, 6=2)</li>
          <li>Check if required successes met</li>
          <li>Apply effect (Base + Bonus, bonus capped at Prof)</li>
          <li>Burn HD for any 1s rolled on exertion dice</li>
        </ol>
      </div>

      <h2>◇ Proficiency by Level</h2>
      <div className="rules-table-container">
        <table className="rules-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>Proficiency</th>
              <th>Resolve</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1-2</td><td>1</td><td>5</td></tr>
            <tr><td>3-4</td><td>2</td><td>5</td></tr>
            <tr><td>5-6</td><td>3</td><td>5</td></tr>
            <tr><td>7-8</td><td>4</td><td>5</td></tr>
            <tr><td>9-10</td><td>5</td><td>5</td></tr>
          </tbody>
        </table>
      </div>

      <h2>◇ Action Tiers</h2>
      <div className="rules-table-container">
        <table className="rules-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Required Successes</th>
              <th>Threshold</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Basic</td><td>1+</td><td>5</td></tr>
            <tr><td>Advanced</td><td>2+</td><td>5</td></tr>
            <tr><td>Expert</td><td>3+</td><td>5</td></tr>
            <tr><td>Legendary</td><td>4+</td><td>5</td></tr>
            <tr><td>Ultimate</td><td>5+</td><td>6</td></tr>
            <tr><td>Mythical</td><td>6+</td><td>6</td></tr>
          </tbody>
        </table>
      </div>

      <div className="design-intent">
        <strong>Design Philosophy:</strong> This is a heroic risk-attrition system. 
        Big actions require commitment. Commitment risks collapse.
      </div>
    </div>
  );
}

function CombatRules() {
  return (
    <div className="rules-section">
      <h2>◇ Initiative</h2>
      
      <div className="rule-block">
        <h3>Rolling Initiative</h3>
        <ul className="rule-list">
          <li><strong>Roll 3d6</strong>, sum the total (range 3-18)</li>
          <li>Highest total acts first, descending order</li>
          <li>Can exert on initiative (up to Proficiency) if <em>not surprised</em></li>
          <li><strong>Surprised:</strong> Cannot exert, roll at disadvantage</li>
          <li><strong>Ties:</strong> Highest single die wins, then GM decides</li>
          <li><strong>Resolve bonus:</strong> Gain 1 Resolve when rolling initiative (max 5)</li>
        </ul>
      </div>

      <h2>◇ Action Economy</h2>
      
      <div className="rule-block highlight">
        <h3>Actions Per Turn: Up to 2</h3>
        <ul className="rule-list">
          <li><strong>Only 1</strong> may be Expert tier or higher</li>
          <li>Once you use Expert+ action, remaining actions must be Basic/Advanced</li>
        </ul>
        <div className="example-block">
          <strong>✅ Allowed:</strong> Attack (Basic) + Attack (Basic), Spell (Advanced) + Defend (Basic)
          <br />
          <strong>❌ Not Allowed:</strong> Fireball (Expert) + Teleport (Expert)
        </div>
      </div>

      <div className="rule-block">
        <h3>Movement</h3>
        <ul className="rule-list">
          <li><strong>Base:</strong> 10 yards per turn (doesn't cost action)</li>
          <li><strong>Difficult Terrain:</strong> Costs double movement</li>
          <li><strong>Through Enemies:</strong> Requires Agility check</li>
        </ul>
      </div>

      <h2>◇ Attack Resolution</h2>
      
      <div className="rule-block">
        <h3>Attack Sequence</h3>
        <ol className="rule-list numbered">
          <li>Declare attack, target, and exertion</li>
          <li>Roll Proficiency + Exertion dice</li>
          <li>Count successes (5=1, 6=2)</li>
          <li>Calculate damage: Base + Bonus (capped at Proficiency)</li>
          <li>Burn HD for any 1s on exertion dice</li>
          <li>Target defends</li>
          <li>Apply final damage</li>
        </ol>
      </div>

      <h2>◇ Defense Rolls</h2>
      
      <div className="critical-block">
        <h3>⚠️ CRITICAL: Dice Are Destroyed, Not Hit Points Deducted</h3>
        <p><strong>Affinity has NO hit points.</strong> Damage destroys individual dice from your defense pools.</p>
      </div>

      <div className="rule-block">
        <h3>Defense Layers (Outermost → Innermost)</h3>
        <ol className="rule-list numbered">
          <li><strong>Shield</strong> (if equipped): 1d12</li>
          <li><strong>Armor</strong> (if worn): 2-4 dice (d6/d8/d10)</li>
          <li><strong>Body</strong>: Your Hit Dice (d10/d8/d6)</li>
        </ol>
      </div>

      <div className="rule-block">
        <h3>Defense Capacity = Proficiency</h3>
        <p>How many defense rolls you get <strong>per attack</strong>:</p>
        <ul className="rule-list">
          <li><strong>5+</strong> = Success → Die survives</li>
          <li><strong>4-</strong> = Fail → Die is DESTROYED</li>
          <li>When capacity exhausted → Auto-fail remaining damage</li>
          <li>Defense Capacity <strong>refreshes per attack</strong></li>
        </ul>
      </div>

      <div className="example-block large">
        <h4>Defense Example</h4>
        <p><strong>Character:</strong> 6d8 body + 3d8 armor + 1d12 shield (Proficiency 2)</p>
        <p><strong>Attack:</strong> 5 HD damage incoming</p>
        <div className="sequence">
          <p>1st HD: Roll 1d12 (shield) → <span className="success">8 ✅</span> (shield survives)</p>
          <p>2nd HD: Roll 1d12 (shield) → <span className="fail">3 ❌</span> (shield destroyed)</p>
          <p>3rd HD: No rolls left → Auto-fail (armor 3d8 → 2d8)</p>
          <p>4th HD: No rolls left → Auto-fail (armor 2d8 → 1d8)</p>
          <p>5th HD: No rolls left → Auto-fail (armor 1d8 → 0)</p>
        </div>
        <p><strong>Result:</strong> Shield gone, armor gone, body intact</p>
      </div>
    </div>
  );
}

function ResourcesSection() {
  return (
    <div className="rules-section">
      <h2>◇ Hit Dice</h2>
      
      <div className="critical-block">
        <h3>⚠️ Hit Dice Are DICE POOLS, Not Hit Points</h3>
        <p><strong>THERE ARE NO HIT POINTS IN AFFINITY.</strong></p>
        <p>Hit Dice are individual dice that exist or don't exist. "7d10" means seven individual d10 dice, not ~49 HP.</p>
      </div>

      <div className="rule-block">
        <h3>HD by Class Type</h3>
        <ul className="rule-list">
          <li><strong>Tough (d10):</strong> Combatants, Sovereigns</li>
          <li><strong>Balanced (d8):</strong> Rangers, Priests, Scholars</li>
          <li><strong>Fragile (d6):</strong> Weavers, Shamans</li>
        </ul>
      </div>

      <h3>HD Pool by Level</h3>
      <div className="rules-table-container">
        <table className="rules-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>Tough (d10)</th>
              <th>Balanced (d8)</th>
              <th>Fragile (d6)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>5</td><td>5</td><td>4</td></tr>
            <tr><td>2</td><td>7</td><td>7</td><td>5</td></tr>
            <tr><td>3</td><td>9</td><td>8</td><td>6</td></tr>
            <tr><td>4</td><td>11</td><td>10</td><td>8</td></tr>
            <tr><td>5</td><td>13</td><td>12</td><td>9</td></tr>
            <tr><td>6</td><td>15</td><td>13</td><td>11</td></tr>
            <tr><td>7</td><td>17</td><td>15</td><td>12</td></tr>
            <tr><td>8</td><td>19</td><td>17</td><td>14</td></tr>
            <tr><td>9</td><td>21</td><td>18</td><td>15</td></tr>
            <tr><td>10</td><td>23</td><td>20</td><td>17</td></tr>
          </tbody>
        </table>
      </div>

      <h2>◇ Rest &amp; Recovery</h2>
      
      <div className="rule-block">
        <h3>Rest (0.5-8 hours, threatened)</h3>
        <ul className="rule-list">
          <li>Regain <strong>Proficiency HD</strong></li>
          <li>Regain <strong>1 Resolve</strong></li>
          <li>Reset short rest abilities</li>
          <li>Armor repairable (if you have craft abilities)</li>
          <li><strong>Max 2 Rests per day</strong></li>
        </ul>
      </div>

      <div className="rule-block">
        <h3>Recover (6+ hours, safe)</h3>
        <ul className="rule-list">
          <li>Regain <strong>all HD</strong></li>
          <li>Regain <strong>all Resolve</strong> (5)</li>
          <li>Restore armor layer (usable for defense again)</li>
          <li>Reset all abilities</li>
          <li><strong>Requires safe space</strong> (Rangers/Priests can create safety)</li>
        </ul>
      </div>

      <h2>◇ Universal Actions</h2>
      
      <div className="rule-block highlight">
        <h3>Rush</h3>
        <p><strong>Cost:</strong> 1 Resolve (automatic, no roll)</p>
        <p><strong>Effect:</strong> Immediately regain Proficiency HD</p>
        <p><strong>Frequency:</strong> Resets on Rest</p>
        <p className="flavor-text">Trade mental fortitude for physical recovery.</p>
      </div>

      <div className="rule-block highlight">
        <h3>Steady</h3>
        <p><strong>Cost:</strong> 3 HD (automatic, no roll)</p>
        <p><strong>Effect:</strong> Immediately gain 1 Resolve</p>
        <p><strong>Frequency:</strong> Resets on Rest</p>
        <p className="flavor-text">Trade physical vitality for mental fortitude.</p>
      </div>
    </div>
  );
}

function DeathSection() {
  return (
    <div className="rules-section">
      <h2>◇ Death &amp; Dying</h2>
      
      <div className="critical-block">
        <h3>You die when you reach BOTH 0 HD AND 0 Resolve</h3>
      </div>

      <div className="rule-block">
        <h3>Collapse (0 Resolve, HD &gt; 0)</h3>
        <ul className="rule-list">
          <li>Fall unconscious for 0-2 days</li>
          <li><strong>NOT dying</strong>, but incapacitated</li>
          <li>Wake with 1 Resolve eventually</li>
        </ul>
      </div>

      <div className="rule-block">
        <h3>Dying (0 HD, Resolve &gt; 0)</h3>
        <ul className="rule-list">
          <li>Make Resolve check each round</li>
          <li><strong>4-:</strong> Lose 1 Resolve</li>
          <li><strong>5:</strong> Hold current Resolve</li>
          <li><strong>6:</strong> Gain 1 Resolve</li>
          <li>If healed above 0 HD: Stop checks, regain consciousness</li>
          <li>If you reach 0 Resolve while at 0 HD: <strong className="death-text">DEATH</strong></li>
        </ul>
      </div>

      <div className="rule-block">
        <h3>Stabilize Action (Basic 2+)</h3>
        <ul className="rule-list">
          <li>Touch dying ally</li>
          <li>Target auto-succeeds next Resolve check this round</li>
          <li>Buys time for healing</li>
        </ul>
      </div>

      <h2>◇ Resolve Checks</h2>
      
      <div className="rule-block">
        <h3>When Required</h3>
        <ul className="rule-list">
          <li>Lose ≥ Proficiency + 1 HD in one round</li>
          <li>Reduced to 0 HD</li>
          <li>At 0 HD and take any hit</li>
          <li>Use maximum Exertion in one round (= Proficiency)</li>
          <li>Fail an Expert+ action</li>
          <li>Certain enemy effects</li>
        </ul>
        <p><strong>Max 1 check per round</strong> (even if multiple triggers)</p>
      </div>

      <div className="rule-block">
        <h3>Resolve Check (Roll 1d6)</h3>
        <ul className="rule-list">
          <li><strong>4 or less:</strong> Lose 1 Resolve</li>
          <li><strong>5:</strong> Stay at current Resolve</li>
          <li><strong>6:</strong> Gain 1 Resolve (max 5)</li>
        </ul>
      </div>

      <h2>◇ Resolve Stage Effects</h2>
      <div className="rules-table-container">
        <table className="rules-table resolve-table">
          <thead>
            <tr>
              <th>Resolve</th>
              <th>State</th>
              <th>Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5</td>
              <td>Focused</td>
              <td>No penalty</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Steady</td>
              <td>No penalty</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Shaken</td>
              <td>-1 die on Expert+ actions</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Rattled</td>
              <td>-1 die on all actions</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Breaking</td>
              <td>-2 dice on all actions</td>
            </tr>
            <tr className="danger-row">
              <td>0</td>
              <td>Collapse/Death</td>
              <td>See above</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

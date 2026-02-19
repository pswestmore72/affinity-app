import { useState } from 'react';
import '../styles/Classes.css';

interface ClassData {
  name: string;
  hitDie: string;
  hdType: 'tough' | 'balanced' | 'fragile';
  subtitle: string;
  custodialPower: string;
  description: string;
  keyAbilities: { name: string; desc: string }[];
  ways: string[];
  progression: { level: number; prof: number; hd: string; milestone: string; way: string }[];
}

const classesData: ClassData[] = [
  {
    name: 'Combatant',
    hitDie: 'd10',
    hdType: 'tough',
    subtitle: 'Oath-Bound Warrior, Battlefield Master',
    custodialPower: 'The Concordant Halls',
    description: 'Warriors who have bound themselves to something greater than survival. Through oaths that carry metaphysical weight, Combatants master armor, weaponry, and battlefield control. They are durable, skilled, and when they speak their oath aloud, reality itself reinforces their will.',
    keyAbilities: [
      { name: 'Weapon Strike', desc: 'All weapon attacks are Basic (2+) tier' },
      { name: 'Battlefield Awareness', desc: 'Advantage on tactical assessment' },
      { name: 'War Cries', desc: 'Rally, Hold the Line, Unbreakable Will' },
      { name: 'Oath-Driven Strike', desc: 'Enhanced attacks carrying metaphysical weight' },
    ],
    ways: ['Shield', 'Blade', 'Bond', 'Crown', 'Flame', 'Stone', 'Bell'],
    progression: [
      { level: 1, prof: 1, hd: '5d10', milestone: 'Oath-Bound Warrior', way: '—' },
      { level: 2, prof: 1, hd: '7d10', milestone: 'Heavy Armor', way: 'Row 1' },
      { level: 3, prof: 2, hd: '9d10', milestone: 'Oath Enforcer', way: '—' },
      { level: 4, prof: 2, hd: '11d10', milestone: 'Rally Upgrade', way: 'Row 2' },
      { level: 5, prof: 3, hd: '13d10', milestone: 'Champion of Purpose', way: '—' },
      { level: 6, prof: 3, hd: '15d10', milestone: "Veteran's Resilience", way: 'Row 3' },
      { level: 7, prof: 4, hd: '17d10', milestone: 'Oath Ascendant', way: '—' },
      { level: 8, prof: 4, hd: '19d10', milestone: 'Armor Mastery', way: 'Row 4' },
      { level: 9, prof: 5, hd: '21d10', milestone: 'Living Oath', way: '—' },
      { level: 10, prof: 5, hd: '23d10', milestone: 'Oath Absolute', way: 'Row 5' },
    ],
  },
  {
    name: 'Priest',
    hitDie: 'd8',
    hdType: 'balanced',
    subtitle: 'Invoker, Resolve Anchor, Space Sanctifier',
    custodialPower: 'Any Custodial Power',
    description: 'Mortal vessels who channel powers far beyond themselves. Through Power Words, they speak reality into compliance, steadying the collapsing, sanctifying the profane, transforming loss into sacrifice with purpose. They are conduits between the mortal and the infinite.',
    keyAbilities: [
      { name: 'Power Word: Endure', desc: 'Restore HD and Resolve to allies' },
      { name: 'Power Word: Smite', desc: 'Devastating divine judgment' },
      { name: 'Sanctify Space', desc: 'Claim areas as patron\'s domain' },
      { name: 'Divine Conduit', desc: 'Channel patron abilities directly' },
    ],
    ways: ['Shield', 'Blade', 'Bond', 'Crown', 'Flame', 'Stone', 'Bell'],
    progression: [
      { level: 1, prof: 1, hd: '5d8', milestone: 'Divine Voice', way: '—' },
      { level: 2, prof: 1, hd: '7d8', milestone: 'Resolve Anchor', way: 'Row 1' },
      { level: 3, prof: 2, hd: '8d8', milestone: 'Power Expansion', way: '—' },
      { level: 4, prof: 2, hd: '10d8', milestone: 'Sanctify Upgrade', way: 'Row 2' },
      { level: 5, prof: 3, hd: '12d8', milestone: 'Greater Invocations', way: '—' },
      { level: 6, prof: 3, hd: '13d8', milestone: 'Shield of Faith', way: 'Row 3' },
      { level: 7, prof: 4, hd: '15d8', milestone: 'Divine Authority', way: '—' },
      { level: 8, prof: 4, hd: '17d8', milestone: 'Conversion Mastery', way: 'Row 4' },
      { level: 9, prof: 5, hd: '18d8', milestone: 'Avatar State', way: '—' },
      { level: 10, prof: 5, hd: '20d8', milestone: 'Divine Vessel', way: 'Row 5' },
    ],
  },
  {
    name: 'Ranger',
    hitDie: 'd8',
    hdType: 'balanced',
    subtitle: 'Wilderness Master, Terrain Controller, Hunter',
    custodialPower: 'The Living Accord',
    description: "Those who have learned to read the natural world's code and rewrite the rules of engagement. Rangers don't fight in the wilds—they make the wilds fight for them. They decide where the battle happens and who suffers along the way.",
    keyAbilities: [
      { name: "Nature's Treaty", desc: 'Auto-succeed Basic wilderness checks' },
      { name: 'Mark Prey', desc: 'Track and hunt with supernatural precision' },
      { name: 'Killing Ground', desc: 'Weaponize terrain against enemies' },
      { name: 'Companion Bond', desc: 'Animal allies fight alongside you' },
    ],
    ways: ['Breath', 'Thorn', 'Tide', 'Rot', 'Hearth', 'Star', 'Howl'],
    progression: [
      { level: 1, prof: 1, hd: '5d8', milestone: 'Wilderness Master', way: '—' },
      { level: 2, prof: 1, hd: '7d8', milestone: 'Mark Prey', way: 'Row 1' },
      { level: 3, prof: 2, hd: '8d8', milestone: 'Terrain Control', way: '—' },
      { level: 4, prof: 2, hd: '10d8', milestone: 'Enhanced Tracking', way: 'Row 2' },
      { level: 5, prof: 3, hd: '12d8', milestone: 'Killing Ground', way: '—' },
      { level: 6, prof: 3, hd: '13d8', milestone: 'Survival Mastery', way: 'Row 3' },
      { level: 7, prof: 4, hd: '15d8', milestone: 'Apex Predator', way: '—' },
      { level: 8, prof: 4, hd: '17d8', milestone: 'Territory Master', way: 'Row 4' },
      { level: 9, prof: 5, hd: '18d8', milestone: "Nature's Wrath", way: '—' },
      { level: 10, prof: 5, hd: '20d8', milestone: 'Living Wild', way: 'Row 5' },
    ],
  },
  {
    name: 'Scholar',
    hitDie: 'd8',
    hdType: 'balanced',
    subtitle: 'Knowledge Weaponizer, Pattern Identifier',
    custodialPower: 'The Curator Arcanum',
    description: 'Those who understand patterns reveal inevitability. Scholars see hidden structures that govern behavior, predict outcomes before they unfold, and weaponize information itself. Understanding something completely is the first step to controlling it.',
    keyAbilities: [
      { name: 'Analyze', desc: 'Identify weaknesses and vulnerabilities' },
      { name: 'Exploit Weakness', desc: 'Devastating strikes against studied foes' },
      { name: 'Crafting Mastery', desc: 'Create items, potions, and augments' },
      { name: 'Pattern Recognition', desc: 'Predict enemy actions' },
    ],
    ways: ['Moments', 'Thresholds', 'Unleashed Force', 'Mutable Flesh', 'Open Doors', 'Veiled Sight'],
    progression: [
      { level: 1, prof: 1, hd: '5d8', milestone: 'Analytical Mind', way: '—' },
      { level: 2, prof: 1, hd: '7d8', milestone: 'Knowledge Archive', way: 'Row 1' },
      { level: 3, prof: 2, hd: '8d8', milestone: 'Exploit Weakness', way: '—' },
      { level: 4, prof: 2, hd: '10d8', milestone: 'Crafting Focus', way: 'Row 2' },
      { level: 5, prof: 3, hd: '12d8', milestone: 'Pattern Master', way: '—' },
      { level: 6, prof: 3, hd: '13d8', milestone: 'Counter-Tactics', way: 'Row 3' },
      { level: 7, prof: 4, hd: '15d8', milestone: 'Knowledge Absolute', way: '—' },
      { level: 8, prof: 4, hd: '17d8', milestone: 'Creation Mastery', way: 'Row 4' },
      { level: 9, prof: 5, hd: '18d8', milestone: 'Inevitable Outcome', way: '—' },
      { level: 10, prof: 5, hd: '20d8', milestone: 'Omniscient', way: 'Row 5' },
    ],
  },
  {
    name: 'Weaver',
    hitDie: 'd6',
    hdType: 'fragile',
    subtitle: 'Reality Bender, Spell Supremacist',
    custodialPower: 'The Curator Arcanum',
    description: 'Those who rewrite the laws of reality through applied understanding. Weavers are the only class capable of casting Ultimate tier spells. Fragile but devastating, they trade durability for the ability to reshape existence itself.',
    keyAbilities: [
      { name: 'Spell Supremacy', desc: 'Can cast Ultimate tier spells' },
      { name: 'Arcane Flexibility', desc: 'Largest spell selection available' },
      { name: 'Reality Manipulation', desc: 'Bend fundamental laws of existence' },
      { name: 'Metamagic', desc: 'Modify spells as you cast them' },
    ],
    ways: ['Moments', 'Thresholds', 'Unleashed Force', 'Mutable Flesh', 'Open Doors', 'Veiled Sight'],
    progression: [
      { level: 1, prof: 1, hd: '4d6', milestone: 'Arcane Awakening', way: '—' },
      { level: 2, prof: 1, hd: '5d6', milestone: 'Spell Focus', way: 'Row 1' },
      { level: 3, prof: 2, hd: '6d6', milestone: 'Reality Sight', way: '—' },
      { level: 4, prof: 2, hd: '8d6', milestone: 'Metamagic I', way: 'Row 2' },
      { level: 5, prof: 3, hd: '9d6', milestone: 'Expert Casting', way: '—' },
      { level: 6, prof: 3, hd: '11d6', milestone: 'Spell Mastery', way: 'Row 3' },
      { level: 7, prof: 4, hd: '12d6', milestone: 'Legendary Casting', way: '—' },
      { level: 8, prof: 4, hd: '14d6', milestone: 'Metamagic II', way: 'Row 4' },
      { level: 9, prof: 5, hd: '15d6', milestone: 'Ultimate Casting', way: '—' },
      { level: 10, prof: 5, hd: '17d6', milestone: 'Reality Sovereign', way: 'Row 5' },
    ],
  },
  {
    name: 'Shaman',
    hitDie: 'd6',
    hdType: 'fragile',
    subtitle: 'Spirit Speaker, Threshold Walker',
    custodialPower: 'The Living Accord',
    description: 'Those who commune with spirits and walk between worlds. Shamans negotiate with entities that exist beyond mortal perception, channeling their power through rituals and bargains. They are fragile but connected to forces most cannot perceive.',
    keyAbilities: [
      { name: 'Spirit Communion', desc: 'Channel spirit aid and guidance' },
      { name: 'Threshold Sight', desc: 'See through veils between worlds' },
      { name: 'Ritual Mastery', desc: 'Powerful ceremonial magic' },
      { name: 'Spirit Bond', desc: 'Bound spirits fight alongside you' },
    ],
    ways: ['Breath', 'Thorn', 'Tide', 'Rot', 'Hearth', 'Star', 'Howl'],
    progression: [
      { level: 1, prof: 1, hd: '4d6', milestone: 'Spirit Awakening', way: '—' },
      { level: 2, prof: 1, hd: '5d6', milestone: 'First Bargain', way: 'Row 1' },
      { level: 3, prof: 2, hd: '6d6', milestone: 'Threshold Walker', way: '—' },
      { level: 4, prof: 2, hd: '8d6', milestone: 'Spirit Bond', way: 'Row 2' },
      { level: 5, prof: 3, hd: '9d6', milestone: 'Ritual Master', way: '—' },
      { level: 6, prof: 3, hd: '11d6', milestone: 'Dual Sight', way: 'Row 3' },
      { level: 7, prof: 4, hd: '12d6', milestone: 'Spirit Host', way: '—' },
      { level: 8, prof: 4, hd: '14d6', milestone: 'Greater Bargains', way: 'Row 4' },
      { level: 9, prof: 5, hd: '15d6', milestone: 'World Walker', way: '—' },
      { level: 10, prof: 5, hd: '17d6', milestone: 'Spirit Sovereign', way: 'Row 5' },
    ],
  },
  {
    name: 'Sovereign',
    hitDie: 'd10',
    hdType: 'tough',
    subtitle: 'Self-Sufficient Master, Balance Keeper',
    custodialPower: 'None (intentionally unbound)',
    description: 'Warriors who master themselves rather than serve greater powers. Sovereigns are resource efficiency experts who convert between HD, Resolve, and other resources. They need no patron, no custodian—only perfect discipline and understanding of their own limits.',
    keyAbilities: [
      { name: 'Internal Alchemy', desc: 'Convert between HD and Resolve' },
      { name: 'Centered Strike', desc: 'Economy bonuses at peak efficiency' },
      { name: 'Efficient Recovery', desc: 'Superior resource restoration' },
      { name: 'Perfect Balance', desc: 'Bonuses when resources equal' },
    ],
    ways: ['Sealed Gate', 'Keen Edge', 'Still Water', 'Tempered Forge', 'Unbroken'],
    progression: [
      { level: 1, prof: 1, hd: '5d10', milestone: 'Self Mastery', way: '—' },
      { level: 2, prof: 1, hd: '7d10', milestone: 'Internal Alchemy', way: 'Row 1' },
      { level: 3, prof: 2, hd: '9d10', milestone: 'Centered Strike', way: '—' },
      { level: 4, prof: 2, hd: '11d10', milestone: 'Resource Flow', way: 'Row 2' },
      { level: 5, prof: 3, hd: '13d10', milestone: 'Perfect Balance', way: '—' },
      { level: 6, prof: 3, hd: '15d10', milestone: 'Efficient Rest', way: 'Row 3' },
      { level: 7, prof: 4, hd: '17d10', milestone: 'Greater Alchemy', way: '—' },
      { level: 8, prof: 4, hd: '19d10', milestone: 'Unshakeable', way: 'Row 4' },
      { level: 9, prof: 5, hd: '21d10', milestone: 'Transcendence', way: '—' },
      { level: 10, prof: 5, hd: '23d10', milestone: 'Self Sovereign', way: 'Row 5' },
    ],
  },
];

function Classes() {
  const [expandedClass, setExpandedClass] = useState<string | null>(null);

  const toggleClass = (className: string) => {
    setExpandedClass(expandedClass === className ? null : className);
  };

  return (
    <div className="classes-page">
      <header className="classes-header">
        <h1>◇ Classes</h1>
        <p className="design-intent">
          Seven paths of power — each bound to cosmic forces or self-mastery
        </p>
      </header>

      <div className="class-grid">
        {classesData.map((cls) => (
          <div
            key={cls.name}
            className={`class-card ${expandedClass === cls.name ? 'expanded' : ''}`}
            onClick={() => toggleClass(cls.name)}
          >
            <h2>{cls.name}</h2>
            <div className="class-meta">
              <span className={`hd-badge ${cls.hdType}`}>{cls.hitDie}</span>
              <span className={`hd-badge ${cls.hdType}`}>{cls.hdType}</span>
            </div>
            <p className="class-subtitle">{cls.subtitle}</p>
            <p className="custodial-connection">
              <strong>◇</strong> {cls.custodialPower}
            </p>
            <p className="class-description">{cls.description}</p>

            <div className="key-abilities">
              <h3>Key Abilities</h3>
              <ul className="abilities-list">
                {cls.keyAbilities.map((ability, idx) => (
                  <li key={idx}>
                    <strong>{ability.name}:</strong> {ability.desc}
                  </li>
                ))}
              </ul>
            </div>

            {expandedClass === cls.name && (
              <div className="class-expanded" onClick={(e) => e.stopPropagation()}>
                <h3>◇ Progression Table</h3>
                <div className="progression-table-container">
                  <table className="progression-table">
                    <thead>
                      <tr>
                        <th>Level</th>
                        <th>Prof</th>
                        <th>Body HD</th>
                        <th>Core Milestone</th>
                        <th>Way</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cls.progression.map((row) => (
                        <tr key={row.level}>
                          <td className="level-cell">{row.level}</td>
                          <td>{row.prof}</td>
                          <td>{row.hd}</td>
                          <td className="milestone-cell">{row.milestone}</td>
                          <td>{row.way}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="ways-section">
                  <h3>◇ Ways of {cls.name === 'Combatant' || cls.name === 'Priest' ? 'the Concordant Halls' : 
                       cls.name === 'Ranger' || cls.name === 'Shaman' ? 'the Living Accord' :
                       cls.name === 'Scholar' || cls.name === 'Weaver' ? 'the Curator Arcanum' : 
                       'Self'}</h3>
                  <div className="ways-grid">
                    {cls.ways.map((way) => (
                      <span key={way} className="way-tag">
                        Way of the {way}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="collapse-btn" onClick={() => setExpandedClass(null)}>
                  ▲ Collapse
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Classes;

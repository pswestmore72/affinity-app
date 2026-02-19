import { useState, useEffect, useMemo } from 'react';
import { Character, WaySelection } from '../types/character';
import { getClassDefinition } from '../data/classes';
import { encodeCharacter, decodeCharacter, saveCharacterToLocal, loadCharacterFromLocal } from '../utils/characterStorage';
import '../styles/CharacterSheet.css';

export default function CharacterSheet() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [importString, setImportString] = useState('');
  const [exportString, setExportString] = useState('');
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'stats' | 'abilities' | 'ways' | 'notes'>('stats');

  // Load character from localStorage on mount
  useEffect(() => {
    const saved = loadCharacterFromLocal('current');
    if (saved) {
      setCharacter(saved);
    }
  }, []);

  // Auto-save to localStorage when character changes
  useEffect(() => {
    if (character) {
      const timer = setTimeout(() => {
        saveCharacterToLocal(character, 'current');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [character]);

  // Get class definition
  const classDefinition = useMemo(() => {
    if (!character) return null;
    return getClassDefinition(character.class);
  }, [character?.class]);

  // Get all abilities up to current level
  const unlockedAbilities = useMemo(() => {
    if (!classDefinition || !character) return [];
    const abilities: any[] = [];
    classDefinition.levelProgression
      .filter(m => m.level <= character.level)
      .forEach(milestone => {
        if (milestone.abilities) {
          abilities.push(...milestone.abilities);
        }
      });
    return abilities;
  }, [classDefinition, character?.level]);

  // Get all passives up to current level
  const unlockedPassives = useMemo(() => {
    if (!classDefinition || !character) return [];
    const passives: any[] = [];
    classDefinition.levelProgression
      .filter(m => m.level <= character.level)
      .forEach(milestone => {
        if (milestone.passives) {
          passives.push(...milestone.passives);
        }
      });
    return passives;
  }, [classDefinition, character?.level]);

  // Get number of way nodes available
  const wayNodesAvailable = useMemo(() => {
    if (!character) return 0;
    // Way nodes at levels 2, 4, 6, 8, 10
    return Math.floor(character.level / 2);
  }, [character?.level]);

  // Get armor proficiencies at current level
  const armorProficiencies = useMemo(() => {
    if (!classDefinition || !character) return [];
    return classDefinition.armorProficiencies.filter(a => a.unlockedAtLevel <= character.level);
  }, [classDefinition, character?.level]);

  // Import character
  const handleImport = () => {
    if (!importString.trim()) {
      setMessage('Please paste a character code.');
      return;
    }

    const decoded = decodeCharacter(importString);
    if (decoded) {
      // Update derived stats based on class/level
      const updated = updateDerivedStats(decoded);
      setCharacter(updated);
      setMessage('Character imported successfully!');
      setImportString('');
    } else {
      setMessage('Failed to import character. Invalid code.');
    }
  };

  // Export character
  const handleExport = () => {
    if (!character) return;
    const encoded = encodeCharacter(character);
    setExportString(encoded);
    setMessage('Character exported! Copy the code below.');
  };

  // Copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportString);
    setMessage('Copied to clipboard!');
  };

  // Update derived stats based on class definition and level
  const updateDerivedStats = (char: Character): Character => {
    const classDef = getClassDefinition(char.class);
    if (!classDef) return char;

    const milestone = classDef.levelProgression.find(m => m.level === char.level);
    if (!milestone) return char;

    return {
      ...char,
      hitDieType: classDef.hitDieType,
      maxHD: milestone.bodyHD,
      proficiency: milestone.proficiency,
      maxResolve: milestone.resolve,
      exertionBudget: milestone.proficiency,
      // Keep currentHD/currentResolve but cap at new max
      currentHD: Math.min(char.currentHD, milestone.bodyHD),
      currentResolve: Math.min(char.currentResolve, milestone.resolve)
    };
  };

  // Handle level change
  const handleLevelChange = (newLevel: number) => {
    if (!character) return;
    const clamped = Math.max(1, Math.min(10, newLevel));
    
    const updated = updateDerivedStats({
      ...character,
      level: clamped
    });
    
    // Remove way selections above new level
    const maxWayRow = Math.floor(clamped / 2);
    updated.waySelections = updated.waySelections.filter(w => w.row <= maxWayRow);
    
    setCharacter(updated);
  };

  // Handle way node selection
  const handleWayNodeSelect = (wayName: string, row: number, nodeName: string) => {
    if (!character) return;
    
    // Create new selection
    const newSelection: WaySelection = { wayName, row, nodeName };
    
    // Remove any existing selection at this row
    const filtered = character.waySelections.filter(w => w.row !== row);
    
    setCharacter({
      ...character,
      waySelections: [...filtered, newSelection].sort((a, b) => a.row - b.row)
    });
  };

  // Check if a way node is selected
  const isNodeSelected = (wayName: string, row: number): boolean => {
    if (!character) return false;
    return character.waySelections.some(w => w.wayName === wayName && w.row === row);
  };

  // Check if a way node can be selected (based on adjacency rules)
  const canSelectNode = (wayName: string, row: number): boolean => {
    if (!character || !classDefinition) return false;
    
    // Can't select above available nodes
    if (row > wayNodesAvailable) return false;
    
    // Row 1 must be in starting way
    if (row === 1) return wayName === character.startingWay;
    
    // For subsequent rows, check adjacency
    const prevSelections = character.waySelections.filter(w => w.row < row);
    if (prevSelections.length === 0) return false;
    
    // Can continue in same way
    if (prevSelections.some(w => w.wayName === wayName)) return true;
    
    // Can branch to adjacent ways (one row below current highest)
    const maxRow = Math.max(...prevSelections.map(w => w.row));
    if (row <= maxRow) {
      const way = classDefinition.ways.find(w => w.name === wayName);
      if (way) {
        return prevSelections.some(w => way.adjacent.includes(w.wayName));
      }
    }
    
    return false;
  };

  // Handle resource changes (editable values)
  const handleResourceChange = (field: 'currentHD' | 'currentResolve' | 'tempHD' | 'affinityDiceAvailable', value: number) => {
    if (!character) return;
    setCharacter(prev => prev ? { ...prev, [field]: value } : prev);
  };

  // No character loaded - show import screen
  if (!character) {
    return (
      <div className="page character-sheet-page">
        <h1>✧ Character Sheet</h1>
        
        <div className="no-character">
          <h2>Import a Character</h2>
          <p>Paste your character code below to load your character.</p>
          
          <div className="import-section centered">
            <textarea
              placeholder="Paste character code here..."
              value={importString}
              onChange={(e) => setImportString(e.target.value)}
              rows={5}
              className="import-textarea"
            />
            <button onClick={handleImport} className="btn-primary">
              Import Character
            </button>
          </div>
          
          {message && <div className="message-box">{message}</div>}
          
          <p className="create-link">
            Don't have a character? <a href="/affinity-app/create">Create one here</a>
          </p>
        </div>
      </div>
    );
  }

  // Character loaded - show full sheet
  return (
    <div className="page character-sheet-page">
      {message && <div className="message-box">{message}</div>}

      {/* Character Header */}
      <header className="character-header">
        <div className="character-identity">
          <h1>{character.name}</h1>
          <p className="character-subtitle">
            Level {character.level} {character.class} · {character.affinity} Affinity
          </p>
          {classDefinition && (
            <p className="character-connection">✦ {classDefinition.custodialConnection}</p>
          )}
        </div>
        
        <div className="level-control">
          <label>Level</label>
          <div className="level-buttons">
            <button onClick={() => handleLevelChange(character.level - 1)} disabled={character.level <= 1}>−</button>
            <span className="level-display">{character.level}</span>
            <button onClick={() => handleLevelChange(character.level + 1)} disabled={character.level >= 10}>+</button>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="sheet-tabs">
        <button className={`tab ${activeTab === 'stats' ? 'active' : ''}`} onClick={() => setActiveTab('stats')}>
          Stats
        </button>
        <button className={`tab ${activeTab === 'abilities' ? 'active' : ''}`} onClick={() => setActiveTab('abilities')}>
          Abilities
        </button>
        <button className={`tab ${activeTab === 'ways' ? 'active' : ''}`} onClick={() => setActiveTab('ways')}>
          Ways
        </button>
        <button className={`tab ${activeTab === 'notes' ? 'active' : ''}`} onClick={() => setActiveTab('notes')}>
          Notes
        </button>
      </nav>

      {/* Stats Tab */}
      {activeTab === 'stats' && (
        <section className="sheet-section">
          <div className="stats-grid">
            {/* Editable Resources */}
            <div className="stat-block editable">
              <label>Hit Dice (Body)</label>
              <div className="stat-inputs">
                <input
                  type="number"
                  min="0"
                  max={character.maxHD}
                  value={character.currentHD}
                  onChange={(e) => handleResourceChange('currentHD', parseInt(e.target.value) || 0)}
                  className="current"
                />
                <span>/</span>
                <span className="max-value">{character.maxHD}{character.hitDieType}</span>
              </div>
            </div>

            <div className="stat-block editable">
              <label>Resolve</label>
              <div className="stat-inputs">
                <input
                  type="number"
                  min="0"
                  max={character.maxResolve}
                  value={character.currentResolve}
                  onChange={(e) => handleResourceChange('currentResolve', parseInt(e.target.value) || 0)}
                  className="current"
                />
                <span>/</span>
                <span className="max-value">{character.maxResolve}</span>
              </div>
            </div>

            <div className="stat-block editable">
              <label>Temp HD</label>
              <input
                type="number"
                min="0"
                value={character.tempHD}
                onChange={(e) => handleResourceChange('tempHD', parseInt(e.target.value) || 0)}
              />
            </div>

            <div className="stat-block editable">
              <label>Affinity Dice</label>
              <input
                type="number"
                min="0"
                value={character.affinityDiceAvailable}
                onChange={(e) => handleResourceChange('affinityDiceAvailable', parseInt(e.target.value) || 0)}
              />
            </div>

            {/* Read-only Derived Stats */}
            <div className="stat-block readonly">
              <label>Proficiency</label>
              <span className="stat-value">+{character.proficiency}</span>
            </div>

            <div className="stat-block readonly">
              <label>Exertion Budget</label>
              <span className="stat-value">{character.exertionBudget}</span>
            </div>

            <div className="stat-block readonly">
              <label>Defense Capacity</label>
              <span className="stat-value">{character.proficiency}</span>
            </div>
          </div>

          {/* Armor Proficiencies */}
          <div className="armor-section">
            <h3>Armor Proficiencies</h3>
            <div className="armor-grid">
              {armorProficiencies.map(armor => (
                <div key={armor.type} className="armor-item">
                  <span className="armor-type">{armor.type}</span>
                  <span className="armor-dice">{armor.dice}</span>
                </div>
              ))}
              {classDefinition?.shieldProficiency && (
                <div className="armor-item">
                  <span className="armor-type">Shield</span>
                  <span className="armor-dice">{classDefinition.shieldDice}</span>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Abilities Tab */}
      {activeTab === 'abilities' && (
        <section className="sheet-section">
          <h2>Abilities</h2>
          
          {unlockedAbilities.length === 0 ? (
            <p className="no-content">No abilities unlocked yet.</p>
          ) : (
            <div className="abilities-list">
              {unlockedAbilities.map((ability, index) => (
                <div key={index} className="ability-card">
                  <div className="ability-header">
                    <h4>{ability.name}</h4>
                    <span className="ability-tier">{ability.tier} ({ability.targetNumber}+)</span>
                  </div>
                  {ability.successesRequired > 0 && (
                    <p className="ability-meta">Requires: {ability.successesRequired} successes</p>
                  )}
                  <p className="ability-description">{ability.description}</p>
                  {ability.range && <p className="ability-detail"><strong>Range:</strong> {ability.range}</p>}
                  {ability.duration && <p className="ability-detail"><strong>Duration:</strong> {ability.duration}</p>}
                  {ability.cost && <p className="ability-detail"><strong>Cost:</strong> {ability.cost}</p>}
                  {ability.usesPerRest && <p className="ability-detail"><strong>Uses:</strong> {ability.usesPerRest}</p>}
                </div>
              ))}
            </div>
          )}

          <h2>Passives</h2>
          {unlockedPassives.length === 0 ? (
            <p className="no-content">No passives unlocked yet.</p>
          ) : (
            <div className="passives-list">
              {unlockedPassives.map((passive, index) => (
                <div key={index} className="passive-card">
                  <h4>{passive.name}</h4>
                  <p>{passive.description}</p>
                  {passive.bullets && (
                    <ul>
                      {passive.bullets.map((bullet: string, i: number) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Ways Tab */}
      {activeTab === 'ways' && classDefinition && (
        <section className="sheet-section">
          <h2>Way Progression</h2>
          <p className="way-info">
            Starting Way: <strong>{character.startingWay}</strong> · 
            Nodes Available: <strong>{wayNodesAvailable}</strong> / 5
          </p>

          <div className="way-grid">
            {classDefinition.ways.map(way => {
              const isStartingWay = way.name === character.startingWay;
              const hasNodes = character.waySelections.some(w => w.wayName === way.name);
              
              return (
                <div 
                  key={way.name} 
                  className={`way-column ${isStartingWay ? 'starting' : ''} ${hasNodes ? 'active' : ''}`}
                >
                  <h4>{way.name.replace('Way of the ', '')}</h4>
                  <p className="way-theme-small">{way.theme}</p>
                  
                  <div className="way-nodes">
                    {way.nodes.map(node => {
                      const selected = isNodeSelected(way.name, node.row);
                      const selectable = canSelectNode(way.name, node.row);
                      const locked = node.row > wayNodesAvailable;
                      
                      return (
                        <div
                          key={node.row}
                          className={`way-node ${selected ? 'selected' : ''} ${selectable ? 'selectable' : ''} ${locked ? 'locked' : ''}`}
                          onClick={() => selectable && handleWayNodeSelect(way.name, node.row, node.name)}
                          title={node.description}
                        >
                          <span className="node-level">L{node.row * 2}</span>
                          <span className="node-name">{node.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Nodes Detail */}
          {character.waySelections.length > 0 && (
            <div className="selected-nodes">
              <h3>Your Way Nodes</h3>
              {character.waySelections.map(selection => {
                const way = classDefinition.ways.find(w => w.name === selection.wayName);
                const node = way?.nodes.find(n => n.row === selection.row);
                if (!way || !node) return null;
                
                return (
                  <div key={`${selection.wayName}-${selection.row}`} className="selected-node-card">
                    <div className="node-header">
                      <h4>{node.name}</h4>
                      <span className="node-way">{way.name} · Row {node.row}</span>
                    </div>
                    <p>{node.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* Notes Tab */}
      {activeTab === 'notes' && (
        <section className="sheet-section">
          <div className="notes-grid">
            <div className="notes-column">
              <h3>Backstory</h3>
              <textarea
                value={character.backstory}
                onChange={(e) => setCharacter(prev => prev ? { ...prev, backstory: e.target.value } : prev)}
                rows={10}
                placeholder="Character backstory, personality, goals..."
              />
            </div>
            <div className="notes-column">
              <h3>Session Notes</h3>
              <textarea
                value={character.notes}
                onChange={(e) => setCharacter(prev => prev ? { ...prev, notes: e.target.value } : prev)}
                rows={10}
                placeholder="Campaign details, reminders, important NPCs..."
              />
            </div>
          </div>
        </section>
      )}

      {/* Export Section */}
      <section className="export-footer">
        <button onClick={handleExport} className="btn-primary">
          Export Character
        </button>
        
        {exportString && (
          <div className="export-result">
            <textarea
              readOnly
              value={exportString}
              rows={3}
              onClick={(e) => e.currentTarget.select()}
            />
            <button onClick={copyToClipboard} className="btn-secondary">
              Copy
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

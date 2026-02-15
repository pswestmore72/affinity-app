import { useState, useEffect } from 'react';
import { Character, defaultCharacter } from '../types/character';
import { encodeCharacter, decodeCharacter, saveCharacterToLocal, loadCharacterFromLocal } from '../utils/characterStorage';
import '../styles/CharacterSheet.css';

function CharacterSheet() {
  const [character, setCharacter] = useState<Character>(defaultCharacter);
  const [exportString, setExportString] = useState('');
  const [importString, setImportString] = useState('');
  const [message, setMessage] = useState('');

  // Load character from localStorage on mount
  useEffect(() => {
    const saved = loadCharacterFromLocal('current');
    if (saved) {
      setCharacter(saved);
    }
  }, []);

  // Auto-save to localStorage when character changes
  useEffect(() => {
    const timer = setTimeout(() => {
      saveCharacterToLocal(character, 'current');
    }, 1000);
    return () => clearTimeout(timer);
  }, [character]);

  const handleInputChange = (field: keyof Character, value: any) => {
    setCharacter(prev => ({ ...prev, [field]: value }));
  };

  const handleExport = () => {
    const encoded = encodeCharacter(character);
    setExportString(encoded);
    setMessage('Character exported! Copy the string below to save it.');
  };

  const handleImport = () => {
    if (!importString.trim()) {
      setMessage('Please paste a character string first.');
      return;
    }
    
    const decoded = decodeCharacter(importString);
    if (decoded) {
      setCharacter(decoded);
      setMessage('Character imported successfully!');
      setImportString('');
    } else {
      setMessage('Failed to import character. Invalid string.');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportString);
    setMessage('Copied to clipboard!');
  };

  return (
    <div className="page character-sheet-page">
      <h1>Character Sheet</h1>

      {message && (
        <div className="message-box">
          {message}
        </div>
      )}

      <div className="import-export-section">
        <div className="export-section">
          <h3>Export Character</h3>
          <button onClick={handleExport}>Generate Export String</button>
          {exportString && (
            <div className="export-result">
              <textarea
                readOnly
                value={exportString}
                rows={3}
                onClick={(e) => e.currentTarget.select()}
              />
              <button onClick={copyToClipboard}>Copy to Clipboard</button>
            </div>
          )}
        </div>

        <div className="import-section">
          <h3>Import Character</h3>
          <textarea
            placeholder="Paste character string here..."
            value={importString}
            onChange={(e) => setImportString(e.target.value)}
            rows={3}
          />
          <button onClick={handleImport}>Import Character</button>
        </div>
      </div>

      <div className="character-form">
        {/* Identity Section - Traditional Header */}
        <section className="identity-header">
          <div className="header-field">
            <label>Character Name</label>
            <input
              type="text"
              value={character.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter name"
            />
          </div>
          <div className="header-stats">
            <div className="stat-box">
              <label>Class</label>
              <select
                value={character.class}
                onChange={(e) => handleInputChange('class', e.target.value)}
              >
                <option value="Combatant">Combatant</option>
                <option value="Priest">Priest</option>
                <option value="Ranger">Ranger</option>
                <option value="Scholar">Scholar</option>
                <option value="Weaver">Weaver</option>
                <option value="Shaman">Shaman</option>
                <option value="Sovereign">Sovereign</option>
              </select>
            </div>
            <div className="stat-box">
              <label>Level</label>
              <input
                type="number"
                min="1"
                max="10"
                value={character.level}
                onChange={(e) => handleInputChange('level', parseInt(e.target.value))}
              />
            </div>
            <div className="stat-box">
              <label>Affinity</label>
              <select
                value={character.affinity}
                onChange={(e) => handleInputChange('affinity', e.target.value)}
              >
                <option value="Guardian">Guardian</option>
                <option value="Freedom">Freedom</option>
                <option value="Memory">Memory</option>
                <option value="Knowledge">Knowledge</option>
                <option value="Chaos">Chaos</option>
                <option value="Order">Order</option>
              </select>
            </div>
          </div>
        </section>

        {/* Core Stats - Traditional Boxes */}
        <section className="core-stats">
          <div className="stat-blocks">
            <div className="stat-block primary">
              <label>Hit Dice</label>
              <div className="stat-inputs">
                <input
                  type="number"
                  min="0"
                  value={character.currentHD}
                  onChange={(e) => handleInputChange('currentHD', parseInt(e.target.value))}
                  className="current"
                />
                <span>/</span>
                <input
                  type="number"
                  value={character.maxHD}
                  onChange={(e) => handleInputChange('maxHD', parseInt(e.target.value))}
                  className="max"
                />
              </div>
              <div className="stat-type">
                <select
                  value={character.hitDieType}
                  onChange={(e) => handleInputChange('hitDieType', e.target.value)}
                >
                  <option value="d6">d6</option>
                  <option value="d8">d8</option>
                  <option value="d10">d10</option>
                </select>
              </div>
            </div>

            <div className="stat-block">
              <label>Resolve</label>
              <div className="stat-inputs">
                <input
                  type="number"
                  min="0"
                  max="5"
                  value={character.currentResolve}
                  onChange={(e) => handleInputChange('currentResolve', parseInt(e.target.value))}
                  className="current"
                />
                <span>/</span>
                <span className="max-display">5</span>
              </div>
            </div>

            <div className="stat-block">
              <label>Proficiency</label>
              <div className="stat-display">
                <input
                  type="number"
                  value={character.proficiency}
                  onChange={(e) => handleInputChange('proficiency', parseInt(e.target.value))}
                />
              </div>
            </div>

            <div className="stat-block">
              <label>Exertion Budget</label>
              <div className="stat-display">
                <input
                  type="number"
                  value={character.exertionBudget}
                  onChange={(e) => handleInputChange('exertionBudget', parseInt(e.target.value))}
                />
              </div>
            </div>

            <div className="stat-block">
              <label>Armor</label>
              <input
                type="text"
                value={character.armorType}
                onChange={(e) => handleInputChange('armorType', e.target.value)}
                placeholder="Light/Medium/Heavy"
              />
            </div>

            <div className="stat-block">
              <label>Temp HD</label>
              <div className="stat-inputs">
                <input
                  type="number"
                  min="0"
                  value={character.tempHD}
                  onChange={(e) => handleInputChange('tempHD', parseInt(e.target.value))}
                  className="current"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills - Traditional List */}
        <section className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {character.skills.map((skill, index) => (
              <label key={skill.name} className="skill-checkbox">
                <input
                  type="checkbox"
                  checked={skill.trained}
                  onChange={(e) => {
                    const newSkills = [...character.skills];
                    newSkills[index].trained = e.target.checked;
                    handleInputChange('skills', newSkills);
                  }}
                />
                <span className="skill-name">{skill.name}</span>
                {skill.trained && <span className="skill-bonus">+1d6</span>}
              </label>
            ))}
          </div>
        </section>

        {/* Notes Section */}
        <section className="notes-section">
          <div className="notes-column">
            <h2>Backstory</h2>
            <textarea
              value={character.backstory}
              onChange={(e) => handleInputChange('backstory', e.target.value)}
              rows={8}
              placeholder="Character backstory, personality, goals..."
            />
          </div>
          <div className="notes-column">
            <h2>Session Notes</h2>
            <textarea
              value={character.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              rows={8}
              placeholder="Campaign details, reminders, important NPCs..."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default CharacterSheet;

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
                rows={4}
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
            rows={4}
          />
          <button onClick={handleImport}>Import Character</button>
        </div>
      </div>

      <div className="character-form">
        <section className="form-section">
          <h2>Identity</h2>
          <div className="form-grid">
            <div className="form-field">
              <label>Name</label>
              <input
                type="text"
                value={character.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            <div className="form-field">
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
            <div className="form-field">
              <label>Level</label>
              <input
                type="number"
                min="1"
                max="10"
                value={character.level}
                onChange={(e) => handleInputChange('level', parseInt(e.target.value))}
              />
            </div>
            <div className="form-field">
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

        <section className="form-section">
          <h2>Resources</h2>
          <div className="form-grid">
            <div className="form-field">
              <label>Current HD</label>
              <input
                type="number"
                min="0"
                value={character.currentHD}
                onChange={(e) => handleInputChange('currentHD', parseInt(e.target.value))}
              />
            </div>
            <div className="form-field">
              <label>Max HD</label>
              <input
                type="number"
                value={character.maxHD}
                onChange={(e) => handleInputChange('maxHD', parseInt(e.target.value))}
              />
            </div>
            <div className="form-field">
              <label>Hit Die Type</label>
              <select
                value={character.hitDieType}
                onChange={(e) => handleInputChange('hitDieType', e.target.value)}
              >
                <option value="d6">d6 (Fragile)</option>
                <option value="d8">d8 (Balanced)</option>
                <option value="d10">d10 (Tough)</option>
              </select>
            </div>
            <div className="form-field">
              <label>Proficiency</label>
              <input
                type="number"
                value={character.proficiency}
                onChange={(e) => handleInputChange('proficiency', parseInt(e.target.value))}
              />
            </div>
            <div className="form-field">
              <label>Current Resolve</label>
              <input
                type="number"
                min="0"
                max="5"
                value={character.currentResolve}
                onChange={(e) => handleInputChange('currentResolve', parseInt(e.target.value))}
              />
            </div>
            <div className="form-field">
              <label>Max Resolve (Always 5 for PCs)</label>
              <input
                type="number"
                value={5}
                disabled
              />
            </div>
            <div className="form-field">
              <label>Exertion Budget</label>
              <input
                type="number"
                value={character.exertionBudget}
                onChange={(e) => handleInputChange('exertionBudget', parseInt(e.target.value))}
              />
            </div>
          </div>
        </section>

        <section className="form-section">
          <h2>Skills</h2>
          <div className="skills-list">
            {character.skills.map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <label>
                  <input
                    type="checkbox"
                    checked={skill.trained}
                    onChange={(e) => {
                      const newSkills = [...character.skills];
                      newSkills[index].trained = e.target.checked;
                      handleInputChange('skills', newSkills);
                    }}
                  />
                  {skill.name} {skill.trained && '(+1d6)'}
                </label>
              </div>
            ))}
          </div>
        </section>

        <section className="form-section">
          <h2>Equipment</h2>
          <div className="form-grid">
            <div className="form-field">
              <label>Armor Type</label>
              <input
                type="text"
                value={character.armorType}
                onChange={(e) => handleInputChange('armorType', e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Temp HD (from armor)</label>
              <input
                type="number"
                min="0"
                value={character.tempHD}
                onChange={(e) => handleInputChange('tempHD', parseInt(e.target.value))}
              />
            </div>
          </div>
        </section>

        <section className="form-section">
          <h2>Notes & Backstory</h2>
          <textarea
            value={character.backstory}
            onChange={(e) => handleInputChange('backstory', e.target.value)}
            rows={6}
            placeholder="Character backstory, personality, goals..."
          />
          <textarea
            value={character.notes}
            onChange={(e) => handleInputChange('notes', e.target.value)}
            rows={6}
            placeholder="Session notes, campaign details, reminders..."
          />
        </section>
      </div>
    </div>
  );
}

export default CharacterSheet;

import { useState, useMemo } from 'react';
import { Character, ClassType, AffinityType, defaultCharacter } from '../types/character';
import { ClassRegistry, getClassDefinition } from '../data/classes';
import { encodeCharacter } from '../utils/characterStorage';
import '../styles/CharacterSheet.css';

// Affinities available in the system
const AFFINITIES: AffinityType[] = ['Guardian', 'Freedom', 'Memory', 'Knowledge', 'Chaos', 'Order'];

// Available classes (only those with definitions loaded)
const AVAILABLE_CLASSES: ClassType[] = Object.keys(ClassRegistry) as ClassType[];

export default function CharacterCreation() {
  const [character, setCharacter] = useState<Character>({
    ...defaultCharacter,
    level: 1
  });
  const [exportString, setExportString] = useState('');
  const [message, setMessage] = useState('');
  const [step, setStep] = useState<'identity' | 'class' | 'way' | 'review'>('identity');

  // Get the class definition for the selected class
  const classDefinition = useMemo(() => {
    return getClassDefinition(character.class);
  }, [character.class]);

  // Get level 1 stats from class definition
  const level1Stats = useMemo(() => {
    if (!classDefinition) return null;
    return classDefinition.levelProgression.find(m => m.level === 1);
  }, [classDefinition]);

  // Update character when class changes
  const handleClassChange = (newClass: ClassType) => {
    const classDef = getClassDefinition(newClass);
    if (!classDef) return;
    
    const level1 = classDef.levelProgression.find(m => m.level === 1);
    if (!level1) return;

    setCharacter(prev => ({
      ...prev,
      class: newClass,
      hitDieType: classDef.hitDieType,
      maxHD: level1.bodyHD,
      currentHD: level1.bodyHD,
      proficiency: level1.proficiency,
      maxResolve: level1.resolve,
      currentResolve: level1.resolve,
      exertionBudget: level1.proficiency,
      startingWay: '',  // Reset way selection
      waySelections: []
    }));
  };

  // Handle way selection
  const handleWaySelect = (wayName: string) => {
    setCharacter(prev => ({
      ...prev,
      startingWay: wayName,
      waySelections: []  // Clear any previous selections
    }));
  };

  // Generate export string
  const handleExport = () => {
    if (!character.name.trim()) {
      setMessage('Please enter a character name.');
      return;
    }
    if (!character.startingWay) {
      setMessage('Please select a starting Way.');
      return;
    }

    const encoded = encodeCharacter(character);
    setExportString(encoded);
    setMessage('Character created! Copy the string below to save it.');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportString);
    setMessage('Copied to clipboard!');
  };

  // Step navigation
  const canProceed = () => {
    switch (step) {
      case 'identity': return character.name.trim().length > 0;
      case 'class': return !!classDefinition;
      case 'way': return !!character.startingWay;
      case 'review': return true;
      default: return false;
    }
  };

  const nextStep = () => {
    const steps: typeof step[] = ['identity', 'class', 'way', 'review'];
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    const steps: typeof step[] = ['identity', 'class', 'way', 'review'];
    const currentIndex = steps.indexOf(step);
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
    }
  };

  return (
    <div className="page character-creation-page">
      <h1>✧ Create Character</h1>
      
      {message && <div className="message-box">{message}</div>}

      {/* Step Indicator */}
      <div className="step-indicator">
        <div className={`step ${step === 'identity' ? 'active' : ''}`}>1. Identity</div>
        <div className={`step ${step === 'class' ? 'active' : ''}`}>2. Class</div>
        <div className={`step ${step === 'way' ? 'active' : ''}`}>3. Way</div>
        <div className={`step ${step === 'review' ? 'active' : ''}`}>4. Review</div>
      </div>

      {/* Step 1: Identity */}
      {step === 'identity' && (
        <section className="creation-step">
          <h2>Character Identity</h2>
          
          <div className="form-group">
            <label>Character Name</label>
            <input
              type="text"
              value={character.name}
              onChange={(e) => setCharacter(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter your character's name"
              className="form-input large"
            />
          </div>

          <div className="form-group">
            <label>Affinity</label>
            <p className="form-help">Your character's connection to cosmic principles. Grants bonus dice when embodied through action.</p>
            <div className="affinity-grid">
              {AFFINITIES.map(affinity => (
                <button
                  key={affinity}
                  className={`affinity-option ${character.affinity === affinity ? 'selected' : ''}`}
                  onClick={() => setCharacter(prev => ({ ...prev, affinity }))}
                >
                  <span className="affinity-name">✦ {affinity}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Backstory</label>
            <textarea
              value={character.backstory}
              onChange={(e) => setCharacter(prev => ({ ...prev, backstory: e.target.value }))}
              placeholder="Who is your character? What drives them?"
              rows={4}
              className="form-textarea"
            />
          </div>
        </section>
      )}

      {/* Step 2: Class Selection */}
      {step === 'class' && (
        <section className="creation-step">
          <h2>Choose Your Class</h2>
          
          <div className="class-selection-grid">
            {AVAILABLE_CLASSES.map(className => {
              const def = getClassDefinition(className);
              if (!def) return null;
              return (
                <div
                  key={className}
                  className={`class-card ${character.class === className ? 'selected' : ''}`}
                  onClick={() => handleClassChange(className)}
                >
                  <h3>{className}</h3>
                  <p className="class-role">{def.role}</p>
                  <p className="class-connection">✦ {def.custodialConnection}</p>
                  <div className="class-stats">
                    <span>Hit Die: {def.hitDieType}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {classDefinition && (
            <div className="class-details">
              <h3>{classDefinition.name}</h3>
              <p className="class-fantasy">{classDefinition.coreFantasy}</p>
              
              <div className="class-identity-text">
                {classDefinition.classIdentity.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {level1Stats && (
                <div className="level1-preview">
                  <h4>Level 1 Statistics</h4>
                  <div className="stat-preview-grid">
                    <div className="stat-preview">
                      <span className="stat-label">Body HD</span>
                      <span className="stat-value">{level1Stats.bodyHD}{classDefinition.hitDieType}</span>
                    </div>
                    <div className="stat-preview">
                      <span className="stat-label">Resolve</span>
                      <span className="stat-value">{level1Stats.resolve}</span>
                    </div>
                    <div className="stat-preview">
                      <span className="stat-label">Proficiency</span>
                      <span className="stat-value">+{level1Stats.proficiency}</span>
                    </div>
                  </div>

                  {level1Stats.abilities && (
                    <div className="abilities-preview">
                      <h4>Starting Abilities</h4>
                      {level1Stats.abilities.map(ability => (
                        <div key={ability.name} className="ability-preview">
                          <span className="ability-name">{ability.name}</span>
                          <span className="ability-tier">({ability.tier} {ability.targetNumber}+)</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {/* Step 3: Way Selection */}
      {step === 'way' && classDefinition && (
        <section className="creation-step">
          <h2>Choose Your Way</h2>
          <p className="form-help">
            Your Way is your path of specialization within your class. You'll gain your first Way node at Level 2.
          </p>
          
          <div className="way-grid-structure">
            <p className="way-ring">{classDefinition.wayGridStructure}</p>
          </div>

          <div className="way-selection-grid">
            {classDefinition.ways.map(way => (
              <div
                key={way.name}
                className={`way-card ${character.startingWay === way.name ? 'selected' : ''}`}
                onClick={() => handleWaySelect(way.name)}
              >
                <h3>{way.name}</h3>
                <p className="way-theme">{way.theme}</p>
                <p className="way-adjacent">Adjacent: {way.adjacent.join(', ')}</p>
                
                {character.startingWay === way.name && (
                  <div className="way-nodes-preview">
                    <h4>Progression</h4>
                    {way.nodes.map(node => (
                      <div key={node.row} className="way-node-preview">
                        <span className="node-row">Row {node.row}:</span>
                        <span className="node-name">{node.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {classDefinition.wayCosmicTruth && (
            <div className="way-cosmic-truth">
              <h4>The Cosmic Truth</h4>
              {classDefinition.wayCosmicTruth.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Step 4: Review & Export */}
      {step === 'review' && classDefinition && level1Stats && (
        <section className="creation-step">
          <h2>Review Your Character</h2>
          
          <div className="character-review">
            <div className="review-section">
              <h3>Identity</h3>
              <div className="review-item">
                <span className="review-label">Name:</span>
                <span className="review-value">{character.name}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Affinity:</span>
                <span className="review-value">{character.affinity}</span>
              </div>
            </div>

            <div className="review-section">
              <h3>Class</h3>
              <div className="review-item">
                <span className="review-label">Class:</span>
                <span className="review-value">{character.class}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Custodial Power:</span>
                <span className="review-value">{classDefinition.custodialConnection}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Starting Way:</span>
                <span className="review-value">{character.startingWay}</span>
              </div>
            </div>

            <div className="review-section">
              <h3>Statistics (Level 1)</h3>
              <div className="review-stats">
                <div className="review-stat">
                  <span className="stat-name">Body HD</span>
                  <span className="stat-number">{level1Stats.bodyHD}{classDefinition.hitDieType}</span>
                </div>
                <div className="review-stat">
                  <span className="stat-name">Resolve</span>
                  <span className="stat-number">{level1Stats.resolve}</span>
                </div>
                <div className="review-stat">
                  <span className="stat-name">Proficiency</span>
                  <span className="stat-number">+{level1Stats.proficiency}</span>
                </div>
                <div className="review-stat">
                  <span className="stat-name">Exertion</span>
                  <span className="stat-number">{level1Stats.proficiency}</span>
                </div>
              </div>
            </div>

            {character.backstory && (
              <div className="review-section">
                <h3>Backstory</h3>
                <p className="review-backstory">{character.backstory}</p>
              </div>
            )}
          </div>

          <div className="export-section">
            <button onClick={handleExport} className="btn-primary">
              Create Character & Generate Code
            </button>
            
            {exportString && (
              <div className="export-result">
                <h4>Character Code</h4>
                <p className="export-help">Save this code to import your character later:</p>
                <textarea
                  readOnly
                  value={exportString}
                  rows={4}
                  onClick={(e) => e.currentTarget.select()}
                  className="export-textarea"
                />
                <button onClick={copyToClipboard} className="btn-secondary">
                  Copy to Clipboard
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Navigation */}
      <div className="step-navigation">
        {step !== 'identity' && (
          <button onClick={prevStep} className="btn-secondary">
            ← Previous
          </button>
        )}
        {step !== 'review' && (
          <button 
            onClick={nextStep} 
            className="btn-primary"
            disabled={!canProceed()}
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}

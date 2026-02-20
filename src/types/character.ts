export type HitDieType = 'd6' | 'd8' | 'd10';

export type ClassType = 'Combatant' | 'Priest' | 'Ranger' | 'Scholar' | 'Weaver' | 'Shaman' | 'Sovereign';

export type AffinityType = 'Guardian' | 'Freedom' | 'Memory' | 'Knowledge' | 'Chaos' | 'Order';

export type ActionTier = 'Basic' | 'Advanced' | 'Expert' | 'Legendary' | 'Ultimate';

export type CustodialPower = 'Concordant Halls' | 'Living Accord' | 'Curator Arcanum' | 'Sovereign Self';

// ═══════════════════════════════════════════════════════════════
// CLASS DEFINITION TYPES - Used to define class templates
// ═══════════════════════════════════════════════════════════════

export interface ClassAbility {
  name: string;
  tier: ActionTier;
  targetNumber: number;  // e.g., 2 for Basic (2+), 3 for Advanced (3+)
  successesRequired: number;
  description: string;
  range?: string;
  duration?: string;
  cost?: string;  // e.g., "1 Resolve", "2 HD"
  usesPerRest?: string;  // e.g., "Proficiency times per short rest"
  scaling?: string;  // How it improves with proficiency
}

export interface ClassPassive {
  name: string;
  description: string;
  bullets?: string[];  // For multi-point passives like social mastery
}

export interface LevelMilestone {
  level: number;
  proficiency: number;
  bodyHD: number;
  resolve: number;
  milestoneName: string;
  wayRow?: number;  // 1-5 for even levels
  abilities?: ClassAbility[];
  passives?: ClassPassive[];
  upgrades?: string[];  // Brief description of upgrades to existing abilities
}

export interface WayNode {
  row: number;
  name: string;
  description: string;
  tier?: ActionTier;  // For active abilities (Row 5 capstones)
  targetNumber?: number;
}

export interface Way {
  name: string;
  theme: string;
  adjacent: [string, string];  // Ring neighbors
  nodes: WayNode[];
}

export interface ArmorProficiency {
  type: 'Light' | 'Medium' | 'Heavy';
  dice: string;  // e.g., "2d6", "3d8", "2d10"
  unlockedAtLevel: number;
}

export interface ClassDefinition {
  name: ClassType;
  hitDieType: HitDieType;
  custodialConnection: CustodialPower;
  role: string;
  coreFantasy: string;
  classIdentity: string;
  
  // Proficiencies
  armorProficiencies: ArmorProficiency[];
  shieldProficiency: boolean;
  shieldDice?: string;
  weaponProficiency: string;
  
  // Progression
  levelProgression: LevelMilestone[];
  
  // Ways (subclass specialization)
  ways: Way[];
  wayGridStructure: string;  // Ring description
  wayCosmicTruth: string;  // Flavor text about the Ways
}

// ═══════════════════════════════════════════════════════════════
// CHARACTER TYPES - Used for player characters
// ═══════════════════════════════════════════════════════════════

export interface Skill {
  name: string;
  trained: boolean;
}

export interface PathNode {
  name: string;
  description: string;
  row: number;
  column: number;
  unlocked: boolean;
}

export interface Item {
  name: string;
  description: string;
  quantity?: number;
}

export interface Spell {
  name: string;
  tier: string;
  prepared: boolean;
}

// Tracks a single Way node selection
export interface WaySelection {
  wayName: string;      // e.g., "Way of the Shield"
  row: number;          // 1-5 (corresponds to levels 2/4/6/8/10)
  nodeName: string;     // e.g., "Shield Wall"
}

export interface Character {
  // Identity
  name: string;
  class: ClassType;
  level: number;
  affinity: AffinityType;
  backstory: string;

  // Resources (currentHD is editable, maxHD is derived from class/level)
  currentHD: number;
  maxHD: number;  // Derived: read-only, set by class progression
  hitDieType: HitDieType;  // Derived: read-only, set by class
  proficiency: number;  // Derived: read-only, set by level
  currentResolve: number;
  maxResolve: number;  // Derived: read-only (always 5)
  exertionBudget: number;  // Derived: read-only, equals proficiency

  // Way Progression
  startingWay: string;  // The Way chosen at level 1 (e.g., "Way of the Shield")
  waySelections: WaySelection[];  // All unlocked way nodes

  // Path Board (general feats from Affinity_Path_Board.md)
  pathBoard: PathNode[];
  chosenPath: string;

  // Equipment
  equippedArmor: string;  // Current armor being worn
  armorDice: string;  // Derived from equipped armor type
  tempHD: number;
  weapons: Item[];
  equipment: Item[];

  // Spells (if applicable)
  spells?: Spell[];
  preparedSpells?: number;

  // Affinity Dice
  affinityDiceAvailable: number;
  affinityDiceUsed: number;

  // Notes
  notes: string;
}

export const defaultCharacter: Character = {
  name: '',
  class: 'Combatant',
  level: 1,
  affinity: 'Guardian',
  backstory: '',
  
  // Resources - derived values set by class/level
  currentHD: 5,
  maxHD: 5,
  hitDieType: 'd10',
  proficiency: 1,
  currentResolve: 5,
  maxResolve: 5,
  exertionBudget: 1,
  
  // Way Progression
  startingWay: '',
  waySelections: [],
  
  // Path Board
  pathBoard: [],
  chosenPath: '',
  
  // Equipment
  equippedArmor: 'None',
  armorDice: '0',
  tempHD: 0,
  weapons: [],
  equipment: [],
  
  // Affinity Dice
  affinityDiceAvailable: 1,
  affinityDiceUsed: 0,
  
  // Notes
  notes: '',
};

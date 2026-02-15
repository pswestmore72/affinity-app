export type HitDieType = 'd6' | 'd8' | 'd10';

export type ClassType = 'Combatant' | 'Priest' | 'Ranger' | 'Scholar' | 'Weaver' | 'Shaman' | 'Sovereign';

export type AffinityType = 'Guardian' | 'Freedom' | 'Memory' | 'Knowledge' | 'Chaos' | 'Order';

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

export interface Character {
  // Identity
  name: string;
  class: ClassType;
  level: number;
  affinity: AffinityType;
  backstory: string;

  // Resources
  currentHD: number;
  maxHD: number;
  hitDieType: HitDieType;
  proficiency: number;
  currentResolve: number;
  maxResolve: number;
  exertionBudget: number;

  // Skills
  skills: Skill[];

  // Path Board
  pathBoard: PathNode[];
  chosenPath: string;

  // Equipment
  armorType: string;
  tempHD: number;
  maxTempHD: number;
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
  currentHD: 3,
  maxHD: 3,
  hitDieType: 'd10',
  proficiency: 1,
  currentResolve: 5,
  maxResolve: 5,
  exertionBudget: 1,
  skills: [
    { name: 'Agility', trained: false },
    { name: 'Awareness', trained: false },
    { name: 'Fortitude', trained: false },
    { name: 'Wilderness', trained: false },
    { name: 'Influence', trained: false },
    { name: 'Lore', trained: false },
    { name: 'Medicine', trained: false },
    { name: 'Craft', trained: false },
  ],
  pathBoard: [],
  chosenPath: '',
  armorType: 'Light',
  tempHD: 0,
  maxTempHD: 0,
  weapons: [],
  equipment: [],
  affinityDiceAvailable: 1,
  affinityDiceUsed: 0,
  notes: '',
};

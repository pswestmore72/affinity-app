// Class Definitions Index
// Import and export all class definitions from this file

export { CombatantClass, getCombatantAtLevel } from './combatant';

// Future class exports:
// export { PriestClass, getPriestAtLevel } from './priest';
// export { RangerClass, getRangerAtLevel } from './ranger';
// export { ScholarClass, getScholarAtLevel } from './scholar';
// export { WeaverClass, getWeaverAtLevel } from './weaver';
// export { ShamanClass, getShamanAtLevel } from './shaman';
// export { SovereignClass, getSovereignAtLevel } from './sovereign';

import { ClassDefinition, ClassType } from '../../types/character';
import { CombatantClass } from './combatant';

// Registry of all class definitions
export const ClassRegistry: Partial<Record<ClassType, ClassDefinition>> = {
  Combatant: CombatantClass,
  // Add others as they're built
};

// Helper to get a class definition by name
export function getClassDefinition(className: ClassType): ClassDefinition | undefined {
  return ClassRegistry[className];
}

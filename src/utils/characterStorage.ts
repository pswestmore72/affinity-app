import { Character } from '../types/character';

/**
 * Encode character data to a Base64 string for easy sharing
 */
export function encodeCharacter(character: Character): string {
  const jsonString = JSON.stringify(character);
  return btoa(jsonString);
}

/**
 * Decode a Base64 string back into character data
 */
export function decodeCharacter(encodedString: string): Character | null {
  try {
    const jsonString = atob(encodedString);
    const character = JSON.parse(jsonString) as Character;
    return character;
  } catch (error) {
    console.error('Failed to decode character:', error);
    return null;
  }
}

/**
 * Save character to localStorage
 */
export function saveCharacterToLocal(character: Character, slotName: string = 'default'): void {
  const encoded = encodeCharacter(character);
  localStorage.setItem(`affinity_character_${slotName}`, encoded);
}

/**
 * Load character from localStorage
 */
export function loadCharacterFromLocal(slotName: string = 'default'): Character | null {
  const encoded = localStorage.getItem(`affinity_character_${slotName}`);
  if (!encoded) return null;
  return decodeCharacter(encoded);
}

/**
 * Get all saved character slots
 */
export function getAllSavedCharacters(): string[] {
  const keys: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('affinity_character_')) {
      keys.push(key.replace('affinity_character_', ''));
    }
  }
  return keys;
}

/**
 * Delete a saved character
 */
export function deleteCharacter(slotName: string): void {
  localStorage.removeItem(`affinity_character_${slotName}`);
}

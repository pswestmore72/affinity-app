# Affinity TTRPG Web Application

A web-based character sheet and reference tool for the **Affinity TTRPG** system.

## About Affinity

Affinity is a tabletop roleplaying game built on d6 dice pools, where Hit Dice serve as both life and stamina, and every action demands meaningful choice.

### Core Features
- **All dice are d6** - No d20s, just pools of six-sided dice
- **Success Thresholds** - Roll 5+ for 1 success, 6 counts as 2 successes  
- **Hit Dice as Resource** - Your HD pool represents life, stamina, and capability
- **Exertion Risk** - Bonus dice burn HD on 1s, creating tension
- **Resolve** - Mental endurance (always 5 for player characters)

## Web Application

This React + TypeScript application provides:

### Character Management
- Create and edit character sheets
- Export characters as encoded strings (save locally)
- Import previously saved characters
- No account needed - all data stays on your machine

### Reference Pages
- **Classes**: View all 7 classes (Combatant, Priest, Ranger, Scholar, Weaver, Shaman, Sovereign)
- **Cosmology**: Learn about the Custodial Powers and gods of Aeralon
- **Rules**: Quick reference for core mechanics

## Development

### Prerequisites
- **Node.js 16+** (18+ recommended for local development)
- npm or yarn

**Note:** If you're on Node 14, the local build may fail. Upgrade to Node 16+ or use the GitHub Actions workflow for deployment (which uses Node 20 automatically).

### Setup
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## Project Structure
```
Affinity/
├── src/
│   ├── components/      # React components
│   ├── pages/           # Page components (Home, CharacterSheet, etc.)
│   ├── styles/          # CSS files for styling
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions (character encoding/decoding)
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── Basic Rules/         # Core system mechanics and quick reference
├── Player Book/         # Character creation, classes, spells, items, sheets
├── Game Master Book/    # GM guide, bestiary, NPC sheets
├── Campaigns/           # Pre-written campaigns
└── Pantheon/            # Cosmology and world lore
```

## TTRPG Documentation

The Affinity system is organized into three main books:

### 📘 [Basic Rules](Basic%20Rules/)
Core mechanics that everyone at the table needs to know:
- System overview and philosophy
- Dice resolution (success thresholds, exertion, contests)
- Combat rules
- Quick reference tables

### 📗 [Player Book](Player%20Book/)
Everything players need to create and play characters:
- Character creation guide
- All 7 classes with full progression
- Magic system and spell compendium
- Path Board customization
- Items and equipment
- Pre-made character sheets (Fighter, Rogue, Warlock, Paladin)

### 📕 [Game Master Book](Game%20Master%20Book/)
Tools and resources for running campaigns:
- Complete GM guide (encounter design, pacing, balance)
- Bestiary with creature stat blocks
- NPC templates and examples
- Scaling and homebrew guidance

### 📖 [Campaigns](Campaigns/)
Seven ready-to-run adventures:
- The Hollow Below (party origin, 5 sessions)
- The Platinum Paradox, The Frostmarch Vigil, and more

### 🌍 [Pantheon](Pantheon/)
World lore and cosmology:
- Aeralon cosmology
- Custodial Powers
- Gods and divine entities
- Planar structure

## Character Data Format

Characters are stored as JSON and encoded to Base64 strings for easy sharing:
1. Fill out character sheet in the app
2. Click "Export" to generate an encoded string
3. Copy the string and save it locally (text file, notes, etc.)
4. To restore: paste the string and click "Import"

## Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **GitHub Pages** - Static hosting

## License

This project is for personal use. All Affinity TTRPG content is original work.

## Contributing

This is a personal project for a custom TTRPG system. Feel free to fork and adapt for your own use!

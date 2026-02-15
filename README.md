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
- Node.js 18+ 
- npm or yarn

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
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions (character encoding/decoding)
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── public/              # Static assets
├── *.md                 # TTRPG system documentation
├── Campaigns/           # Pre-written campaigns
└── Pantheon/            # Cosmology documentation
```

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

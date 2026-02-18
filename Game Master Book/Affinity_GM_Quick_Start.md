# GM Quick Start Guide
## Running Your First Affinity Session

*The minimum you need to run a Level 1 game confidently.*

---

## The Core Philosophy

**Affinity is a risk-attrition system.** Players have Hit Dice. They spend them, lose them, and guard them. Your job: create situations where those dice matter.

**There are no hit points.** When you deal damage, you're destroying dice from dice pools. When an enemy has 5d8 and takes 3 damage, they now have 2d8.

---

## Quick Encounter Building

### For Level 1 Parties (3-5 Players)

| Encounter Type | Total Enemy HD | Suggested Composition |
|---------------|----------------|----------------------|
| **Easy** | 8-12 HD | 3-4 Trivial enemies (1-2 HD each) |
| **Medium** | 12-18 HD | 2-3 Basic enemies (3-5 HD each) |
| **Hard** | 18-25 HD | 1 Advanced + 2-3 Trivial |
| **Deadly** | 25+ HD | 1 Advanced (6-10 HD) + multiple Basic |

### Enemy Action Budget

| Enemy Tier | Actions | HD Range | Resolve |
|------------|---------|----------|---------|
| Trivial | 1 | 1-2 HD | 2 |
| Basic | 1-2 | 3-5 HD | 2 |
| Advanced | 2 | 6-10 HD | 3 |

**At Level 1, avoid Expert+ enemies unless you want a very hard fight.**

---

## Creating Quick Enemies

### The 30-Second NPC

```
NAME: [Creature type]
HD: [dice]         (Trivial: 1-2, Basic: 3-5)
PROF: 1-2          (use 1 for L1 content)
RESOLVE: 2
ARMOR: [if any]    (2d6 light, 2d8 medium)
MOVEMENT: 10 yards

ATTACK: [Name] (Basic, 2+)
- Rolls: 2-3d6 (fixed pool)
- Required: 1 success
- Base: 1-2 HD damage
```

### Example Enemies for Level 1

**Goblin Skulker** (Trivial)
- HD: 2d6, Prof: 1, Resolve: 2
- Attack: Rusty Dagger (2d6, 1 HD damage)
- Special: Flees at 1 HD remaining and/or 1- Resolve

**Orc Raider** (Basic)
- HD: 4d8, Prof: 2, Resolve: 2
- Armor: 2d6 (hide scraps)
- Attack: Greataxe (3d6, 2 HD damage)
- Special: +1d6 when below half HD

**Animated Statue** (Basic)
- HD: 5d10, Prof: 1, Resolve: 3
- Armor: 2d10 (stone body)
- Attack: Stone Fist (2d6, 2 HD damage)
- Special: Immune to fear/charm

---

## Running Combat

### Turn Structure
1. **Roll initiative** (everyone rolls 3d6, count successes, highest goes first)
   - You CAN exert on initiative (if not surprised)
   - Ties: highest single die wins, then GM decides
2. **Each turn:** Move (10 yards free) + 2 actions
3. **NPCs use their fixed dice pools** (no exertion tracking)

### When NPCs Attack
1. Roll the dice shown in their stat block
2. Count successes (5+ = 1, 6 = 2)
3. If they hit, player defends

### When NPCs Defend
1. Player declares damage
2. NPC rolls Proficiency dice using their HD type
3. 5+ = sustain (die survives), 4- = die destroyed
4. NPC loses dice from their pool

**NPC Simplification:** NPCs don't burn HD on 1s. Just roll and move on.

---

## Running Skill Challenges

**Affinity is a group game.** Most skill challenges are resolved as **group rolls** where everyone contributes and successes are pooled. No skill monkeys, no "face" characters, no ninja who does all the sneaking alone.

### Group Roll Method (Default)

1. **Announce the domain:** "This is an **Agility** challenge."
2. **Everyone rolls:** Each player rolls Proficiency + any exertion + domain bonuses
3. **Pool successes:** Add all successes together
4. **Compare to threshold:** Did the group total meet the required successes?

### Setting Difficulty

Find your dice pool (Players × Proficiency), pick a tuple from top (easy) to bottom (hard):

```
                    DICE POOL (Players × Prof) →
           │   3       4       5       6    
___________________________________________
  EASY     │ (2+,2)  (3+,2)  (4+,2)  (5+,2)
           │ (3+,2)  (4+,2)  (5+,2)  (4+,3)
           │ (4+,2)  (5+,2)  (3+,3)  (2+,4)
           │ (5+,2)  (5+,2)  (6,2)   (6,2) 
           │ (6,2)   (5+,2)  (4+,3)  (5+,3)
           │ (3+,3)  (6,2)   (5+,3)  (4+,4)
           │ (4+,3)  (6,2)   (5+,3)  (4+,4)
           │ -----   (6,2)   (6,2)   (6,2) 
           │ -----   (5+,3)  (5+,3)  (5+,4)
           │ -----   (5+,3)  (5+,3)  (6,4) 
           │ -----   -----   (6,4)   (6,4) 
  IMPOSS.  │ -----   -----   -----   (5+,5)
```

**Pip flavor:** 2+ = anyone can help, 5+ = expertise required, 6 = only perfection counts

*At Level 1, expect players to exert for harder challenges.* For the full matrix covering all party sizes and levels, see the Skill Challenge Design guide.

### When to Use Individual Rolls

- **Initiative order actions:** Each character acts separately
- **Personal consequences:** Resisting poison, maintaining concentration
- **Spotlight moments:** One player attempting something only they can do
- **GM discretion:** When the fiction demands individual outcomes

### The Eight Domains

| Domain | Covers |
|--------|--------|
| **Agility** | Stealth, acrobatics, precise movement |
| **Awareness** | Perception, insight, investigation |
| **Fortitude** | Endurance, resistance, staying power |
| **Wilderness** | Tracking, foraging, animals, navigation |
| **Influence** | Persuasion, deception, intimidation |
| **Lore** | History, arcana, religion |
| **Medicine** | Healing, diagnosis, anatomy |
| **Craft** | Making, repairing, building |

---

## Damage and Death

### When Players Take Damage
1. Attacker declares HD damage
2. Player rolls defense (1 roll per attack at Prof 1)
3. 5+ on defense = that die survives, 1 damage cancelled
4. Failed rolls or excess damage = lose dice from pool (armor first, then body)

### At 0 Body HD
- Player makes Resolve checks each round
- 4- = lose 1 Resolve
- If healed above 0 HD, stops dying
- At 0 HD AND 0 Resolve = dead

**For Session 1:** If a player hits 0 HD, let them make one Resolve check, then have allies stabilize them or enemies shift target. Real death can come later when stakes are clear.

---

## Awarding Affinity Dice

When a player embodies their Virtue in a meaningful way:
- Award 1 Affinity Die
- Max awards per day = Proficiency (1 at Level 1)

**Simple approach:** Award 1 per session for roleplay aligned with Virtue.

---

## Quick Reference Tables

### Success Thresholds

| Roll | Result |
|------|--------|
| 1-4 | No success |
| 5 | 1 success |
| 6 | 2 successes |
| 1 on exertion | Lose 1 HD |

### Defense Success Rate by Die Type

| Die | Chance of 5+ |
|-----|-------------|
| d6 | 33% |
| d8 | 38% |
| d10 | 40% |
| d12 | 50% |

### Armor Types

| Armor | Defense Dice |
|-------|-------------|
| Light | 2d6 |
| Medium | 2d8 |
| Heavy | 2d10 |
| Shield | +1d12 |

### Level 1 Character Stats

| Class Type | Body HD | Defense Die |
|------------|---------|-------------|
| Tough (d10) | 5d10 | d10 |
| Balanced (d8) | 5d8 | d8 |
| Fragile (d6) | 4d6 | d6 |

All Level 1: Proficiency 1, Resolve 5, Defense Capacity 1

---

## What You Don't Need for Session 1

Skip these until later:
- ❌ Complex social duels (just use Influence rolls)
- ❌ Travel system (handwave travel for now)
- ❌ Expert+ tier abilities (Level 1 players can't use them)
- ❌ Legendary enemies (save for later)
- ❌ Resolve death spiral details (just know: 0 HD = danger, 0 Resolve = collapse)

---

## Session 1 Checklist

Before the session:
- [ ] Prepare 2-3 encounters (combat or skill challenge)
- [ ] Have 3-4 simple NPCs ready
- [ ] Know where documents are for reference
- [ ] Print/copy Quick Reference for players

During the session:
- [ ] Explain: "No hit points—you have dice that get destroyed"
- [ ] Remind players: "Roll d6s, 5+ is a success, 6 is two"
- [ ] On defense: "Roll one die, 5+ saves it, otherwise lose it"
- [ ] Keep fights short (3-4 rounds at Level 1)

After the session:
- [ ] Award XP (100-300 for Level 1 encounters)
- [ ] Note what worked/didn't
- [ ] Plan next session's encounters

---

## Emergency GM Fixes

**Fight too easy?**
- Add reinforcements
- Give enemies +1d6 to attacks
- NPC uses desperate moves

**Fight too hard?**
- Enemies flee at half HP
- Reinforcements arrive (for players)
- Environmental collapse ends fight early

**Player confused about dice?**
- "Roll d6s. Count 5s and 6s. That's your successes."
- "When you're hit, roll defense. 5+ = that armor die survives."

**Player at 0 HD?**
- Make a Resolve check (1d6: 4- = lose Resolve, 5 = hold, 6 = gain)
- Stabilize action (Basic, 2+) from ally stops the spiral
- Don't kill players in Session 1 unless it's earned

---

## You're Ready

Run the game. Make mistakes. Adjust as you go.

The system is forgiving at Level 1:
- Small dice pools mean combat is fast
- One defense roll per attack keeps things simple
- NPCs with 2-5 HD don't last long

*Trust the dice. Trust your players. Welcome to GMing Affinity.*

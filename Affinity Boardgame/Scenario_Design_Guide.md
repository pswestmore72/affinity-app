# AFFINITY: CONVERGENCE — SCENARIO DESIGN GUIDE

*The Focal Point draws crises to itself like gravity draws water. Your task is to shape that crisis into legend.*

---

## SCENARIO FUNDAMENTALS

Every Convergence scenario tells a story of heroes racing against encroaching darkness. The mechanics serve that narrative—never the reverse.

### Core Structure

```
SCENARIO = Setup + Story Rounds + Resolution
```

**Setup:** Establish the map, place starting enemies, position heroes, explain the objective.

**Story Rounds:** Play through Chapter Cards and Directive Cards, facing escalating threats.

**Resolution:** Heroes either achieve victory (completing the final Chapter's objective) or suffer defeat (party wipe or failed critical condition).

---

## SCENARIO COMPONENTS

### 1. Scenario Card

The master document for the scenario. Contains:

| Element | Description |
|---------|-------------|
| **Title** | Evocative name that hints at the challenge |
| **Length** | Fast (30-45 min), Medium (60-90 min), or Long (90-120 min) |
| **Difficulty** | Apprentice / Journeyman / Master |
| **Player Count** | Recommended range (typically 2-4 or 3-6) |
| **Setup Instructions** | Map layout, starting positions, initial enemies |
| **Victory Condition** | What heroes must accomplish |
| **Defeat Conditions** | How heroes can lose beyond party wipe |
| **Special Rules** | Scenario-specific modifications |

**Example Scenario Card:**

> **THE HOLLOW BELOW**
> *Length: Medium | Difficulty: Journeyman | Players: 3-4*
>
> **Setup:** Use the Cavern map. Place heroes in the Entry Chamber. Place 6 Crawling Horrors in the Depths (spaces marked D1-D6). Place the Pale Shepherd token on the Altar space.
>
> **Victory:** Defeat the Pale Shepherd before Round 8.
>
> **Defeat:** The Pale Shepherd reaches the Surface Exit OR all heroes fall.
>
> **Special Rule — Rising Darkness:** At the end of each round, the Pale Shepherd moves 2 spaces toward the Surface Exit.

---

### 2. Chapter Cards

Scenarios divided into narrative chapters. Each chapter has:

- **Trigger:** When this chapter begins (round number or event)
- **Narration:** Story text to read aloud
- **Directive:** What changes mechanically
- **Objective:** What heroes must accomplish to advance

**Chapter Structure by Scenario Length:**

| Length | Chapters | Rounds per Chapter |
|--------|----------|-------------------|
| Fast | 2 | 2-3 |
| Medium | 3 | 3-4 |
| Long | 4-5 | 2-3 |

**Example Chapter Card:**

> **CHAPTER 2: THE CORRUPTION SPREADS**
> 
> *Trigger: Beginning of Round 4*
>
> *"The darkness pulses like a heartbeat. Wherever the Shepherd's shadow falls, the stone weeps black ichor. Your torches gutter and dim."*
>
> **Directive:** Spawn 2 Shadow Stalkers at each entrance to the Depths. All spaces within 2 of the Pale Shepherd become Corrupted Ground (entering costs +1 movement).
>
> **Objective:** Clear a path to the Altar before the Shepherd reaches the Mid Chamber.

---

### 3. Directive Cards

Single instructions that modify gameplay. Drawn or triggered between rounds.

**Directive Types:**

| Type | Effect |
|------|--------|
| **Spawn** | Add enemies to the map |
| **Environmental** | Change terrain or conditions |
| **Escalation** | Increase enemy power or behavior |
| **Narrative** | Story beats with mechanical effects |
| **Relief** | Healing, resources, or advantages for heroes |

**Directive Card Distribution by Difficulty:**

| Difficulty | Spawn | Environmental | Escalation | Relief |
|------------|-------|---------------|------------|--------|
| Apprentice | 30% | 20% | 20% | 30% |
| Journeyman | 35% | 25% | 25% | 15% |
| Master | 40% | 25% | 30% | 5% |

**Example Directive Cards:**

> **THEY'RE COMING THROUGH THE WALLS** (Spawn)
> *Spawn 1 Crawling Horror at each wall marker. If no wall markers, spawn 2 at the nearest entrance.*

> **THE TORCH FLICKERS** (Environmental)
> *All ranged attacks have -1 damage this round. At the end of this round, the effect ends.*

> **SECOND WIND** (Relief)
> *Each hero may heal 2 Health or draw 1 additional resource card.*

---

### 4. Enemy Cards

Each enemy type has a card defining:

| Element | Description |
|---------|-------------|
| **Name** | Enemy identifier |
| **Type** | Minion / Elite / Mini-Boss / Boss |
| **Stats** | Health, Attack, Defense, Speed |
| **Behavior** | How the enemy acts on its turn |
| **Abilities** | Special actions or passives |
| **Defeat Bonus** | What heroes gain when destroyed |

**Enemy Stat Scaling:**

| Type | Health | Attack | Defense | Speed |
|------|--------|--------|---------|-------|
| Minion | 2-4 | 1-2 | 0-1 | 2-3 |
| Elite | 5-8 | 3-4 | 1-2 | 3-4 |
| Mini-Boss | 12-20 | 4-5 | 2-3 | 2-3 |
| Boss | 25-40 | 5-7 | 3-4 | 2-3 |

---

## ENCOUNTER DESIGN

### Enemy Budgets

Each scenario has an **Enemy Budget** based on player count and length.

**Budget Formula:**
```
Base Budget = (Player Count × 10) + (Length Modifier)
```

| Length | Length Modifier |
|--------|----------------|
| Fast | +0 |
| Medium | +10 |
| Long | +20 |

**Enemy Costs:**

| Type | Cost | Typical Quantity (4 players, Medium) |
|------|------|--------------------------------------|
| Minion | 1 | 8-12 total across scenario |
| Elite | 3 | 3-5 total across scenario |
| Mini-Boss | 8 | 1-2 total across scenario |
| Boss | 15 | 1 (finale only) |

**Example Budget (4 players, Medium):**
```
Base = (4 × 10) + 10 = 50 points

Allocation:
- 10 Minions (10 points)
- 4 Elites (12 points)
- 2 Mini-Bosses (16 points)
- 1 Boss (15 points)
Total: 53 points (slightly over for challenge)
```

---

### Enemy Composition Philosophy

**The Wave Principle:**
Don't deploy all enemies at once. Pace encounters using waves:

| Wave | Timing | Composition |
|------|--------|-------------|
| Initial | Setup | Minions only (establishing threat) |
| Early | Chapters 1-2 | Minions + 1-2 Elites |
| Mid | Chapter 2-3 | Elites + Mini-Boss |
| Climax | Final Chapter | Boss + Elite support |
| Reinforcement | Directive Cards | Small groups of Minions |

**The Triangle of Threat:**
Every encounter should have three elements:
1. **Numbers** — Multiple targets requiring area attacks
2. **Power** — Single high-threat enemy requiring focus fire
3. **Pressure** — Time constraint or environmental hazard

**Example Triangle:**
> *Six Crawling Horrors (Numbers) surround the Shadow Stalker Elite (Power) while Corrupted Ground spreads 1 space per round (Pressure).*

---

### Mini-Boss Design

Mini-Bosses are the "statement" enemies—memorable fights that test party coordination.

**Mini-Boss Structure:**

| Element | Guidelines |
|---------|------------|
| **Health** | 12-20 (enough for 3-4 rounds of combat) |
| **Phase Threshold** | Optional: behavior changes at 50% Health |
| **Signature Ability** | One powerful action that demands response |
| **Weakness** | A condition that enables bonus damage |
| **Support** | Usually accompanied by 1-2 Minions |

**Mini-Boss Ability Templates:**

- **Charge:** Move up to 4 spaces toward furthest hero, then attack
- **Summon:** Spawn 1-2 Minions at the start of the Mini-Boss turn
- **Aura:** All enemies within 2 spaces gain +1 Attack
- **Regeneration:** Heal 2 Health at start of turn unless Burning
- **Retaliation:** After being attacked, immediately move 1 and attack a different hero

**Example Mini-Boss:**

> **PALE SHEPHERD**
> *Type: Mini-Boss | Health: 16 | Attack: 4 | Defense: 2 | Speed: 3*
>
> **Behavior:** Moves toward the nearest hero. If adjacent to a hero, attacks twice.
>
> **Voice of the Gloam (Signature):** At the start of each round, the nearest hero must discard 1 resource card or take 2 damage.
>
> **Weakness — Light's Touch:** When attacked by a hero using Gold resources, takes +2 damage.
>
> **Defeat Bonus:** Each hero may draw 2 resource cards.

---

### Boss Design

The Boss is the scenario's final challenge—a multi-phase fight that tests everything the party has learned.

**Boss Structure:**

| Phase | Health Threshold | Behavior Change |
|-------|-----------------|-----------------|
| Phase 1 | 100%-66% | Standard attacks, basic abilities |
| Phase 2 | 65%-33% | New abilities unlock, increased aggression |
| Phase 3 | 32%-0% | Desperate/devastating attacks, possible adds |

**Boss Design Principles:**

1. **Telegraph Attacks:** Give heroes one round to reposition before devastating abilities
2. **Multiple Targets:** Boss should threaten more than one hero per turn
3. **Interactive Weakness:** Include a mechanic heroes can exploit through coordination
4. **Adds Management:** Spawn support enemies that die quickly but punish ignoring them
5. **Victory Condition Variety:** Consider objectives beyond "reduce to 0 Health"

**Example Boss:**

> **THE HOLLOW KING**
> *Type: Boss | Health: 32 | Attack: 5 | Defense: 3 | Speed: 2*
>
> **PHASE 1 (32-22 Health):**
> - **Grasp of Endings:** Attack all heroes within 2 spaces
> - **Summon Thralls:** Spawn 2 Crawling Horrors at the Chamber entrances
>
> **PHASE 2 (21-11 Health):**
> - **Desperation Rising:** The Hollow King gains +1 Attack permanently
> - **Soul Rend (Signature):** Target hero must pass a test (discard 2 cards) or take 6 damage
> - **Terrain Collapse:** One randomly determined space becomes Hazardous (entering deals 3 damage)
>
> **PHASE 3 (10-0 Health):**
> - **Final Gambit:** At the end of each round, ALL heroes take 2 damage
> - **Weakening:** Defense reduced to 1
>
> **Weakness — Anchored to the Altar:** While within 2 spaces of the Altar, the Hollow King cannot use Soul Rend.
>
> **Victory:** Reduce to 0 Health while the Altar remains uncorrupted.

---

## MAP DESIGN

### Map Elements

| Element | Mechanical Function |
|---------|---------------------|
| **Open Ground** | Normal movement and combat |
| **Difficult Terrain** | Costs +1 movement to enter |
| **Hazardous Terrain** | Deals damage when entering |
| **Blocking Terrain** | Cannot be entered (walls, pillars) |
| **Cover** | +1 Defense when adjacent |
| **Elevated Ground** | +1 to ranged attacks, -1 to be hit by melee |
| **Spawn Points** | Where enemies appear from Directives |
| **Objective Markers** | Locations relevant to victory conditions |

### Map Principles

**Chokepoints:** Include 1-2 narrow passages where Garretth can control enemy approach.

**Flanking Routes:** Alternative paths that reward Taprek's mobility.

**Ranges:** Open spaces of 4-5 spaces for Da'Avid's ranged attacks.

**Clusters:** Areas where enemies group, enabling Panpo's area abilities.

**Safe Zones:** Positions where Libestra can heal without being in direct danger.

---

## PACING AND TENSION

### The Tension Curve

```
     TENSION
        ^
        |     /\
        |    /  \    /\
        |   /    \  /  \
        |  /      \/    \
        | /              \_____(Resolution)
        +-------------------------> ROUNDS
         Setup  Mid   Climax  End
```

**Setup (Rounds 1-2):** Establish threat, let heroes find their footing. Low enemy numbers, high exploration.

**Rising Action (Rounds 3-5):** Escalating challenges, resource pressure begins. Elites appear. Stakes become clear.

**Climax (Rounds 6-8):** Boss or final objective. Maximum pressure. Heroes must commit remaining resources.

**Resolution:** Clear victory or defeat. No ambiguity.

### Preventing Slogs

If combat drags:
- Reduce enemy Health, increase enemy numbers
- Add time pressure (objective countdown)
- Use environmental changes to force repositioning
- Offer meaningful choices (save NPC vs. stop enemy advance)

---

## DIFFICULTY CALIBRATION

### Apprentice Scenarios

For new players or casual sessions:
- Generous Relief Directives
- Mini-Bosses have obvious weaknesses
- Defeat condition has 2+ round warning
- Resource cards draw +1 per round
- Enemy stat reduction: -1 Attack, -1 Health per enemy

### Journeyman Scenarios

Standard challenge:
- Balanced Directive mix
- Mini-Bosses have discoverable weaknesses
- Clear victory paths requiring coordination
- Standard resource economy

### Master Scenarios

For experienced groups seeking challenge:
- Minimal Relief Directives
- Mini-Bosses have hidden or conditional weaknesses
- Multiple defeat conditions possible
- Resource scarcity (no bonus draws)
- Enemy stat increase: +1 Attack to Elites and above

---

## STORYTELLING INTEGRATION

### Narrative Moments

Build in moments where Storytelling abilities feel essential:

**"Save the NPC" Moment:**
> *The priest is cornered. They have 4 Health remaining and 3 enemies approaching. Standard attacks won't clear them in time.*

**"Turn the Tide" Moment:**
> *Wave after wave keeps coming. The spawn points must be sealed, but enemies block every approach.*

**"Heroic Sacrifice" Moment:**
> *The door will only stay open if someone holds it. The Boss strikes anyone in that position.*

### Read-Aloud Text Guidelines

- **Keep it brief.** 2-3 sentences maximum.
- **Focus on sensory details.** What do heroes see, hear, smell?
- **End with stakes.** What danger is present?
- **Avoid dictating emotion.** Don't tell players they feel fear.

**Good Example:**
> *"The Shepherd's voice echoes from every direction—not words, but the memory of words, the shape of grief. Your torches dim. In the darkness ahead, something moves."*

**Poor Example:**
> *"You feel terrified as the scary monster appears. It is very dangerous and you know you must fight it. Everyone is scared but determined."*

---

## SCENARIO TEMPLATES

### Template: The Delve

**Premise:** Heroes explore a dangerous location seeking an objective.

**Structure:**
- Chapter 1: Enter location, clear initial resistance
- Chapter 2: Discover complication (trap, puzzle, environmental hazard)
- Chapter 3: Confront guardian, claim objective

**Best For:** Dungeon crawls, tomb raids, fortress infiltrations

---

### Template: The Defense

**Premise:** Heroes protect a location or NPC from waves of enemies.

**Structure:**
- Chapter 1: First wave, establish defensive positions
- Chapter 2: Second wave with Elite support, walls breach
- Chapter 3: Final assault with Mini-Boss or Boss

**Best For:** Siege scenarios, escort missions, last stands

---

### Template: The Race

**Premise:** Heroes and enemies both pursue an objective—first to reach it determines outcome.

**Structure:**
- Chapter 1: Both sides advance, skirmishes begin
- Chapter 2: Obstacles force choices—fight through or find alternate route
- Chapter 3: Final sprint to objective, everything committed

**Best For:** Chase scenarios, artifact hunts, rescue missions

---

### Template: The Mystery

**Premise:** Heroes must discover information before they can confront the threat.

**Structure:**
- Chapter 1: Investigation, light combat, clues gathered
- Chapter 2: Revelation changes understanding—new threat identified
- Chapter 3: Confront true enemy with gathered knowledge

**Best For:** Investigation scenarios, betrayal reveals, hidden enemy plots

---

## SAMPLE SCENARIO: WHISPERS IN THE STONE

*A complete example demonstrating all principles.*

---

**WHISPERS IN THE STONE**
*Length: Medium | Difficulty: Journeyman | Players: 3-4*

**Background:**
The abandoned mine called Thorndeep has begun singing. Miners who entered seeking old silver veins return changed—or don't return at all. The song grows louder each night, and now it reaches the village.

**Setup:**
- Use the Mine map (3 connected chambers)
- Place heroes in the Entrance Chamber
- Place 4 Thrall Miners in the Mid Chamber
- Place the Singing Stone token in the Deep Chamber
- Set Round Counter to 1

**Victory:** Destroy the Singing Stone (20 Health, 2 Defense) before Round 10.

**Defeat:** 
- Round 10 ends with the Stone intact
- All heroes fall
- The Stone reaches 30 Health (it absorbs nearby death)

**Special Rules:**
- **The Song:** At the end of each round, each hero must discard 1 resource card or suffer -1 Attack next round (the song weakens resolve).
- **Absorption:** When an enemy is defeated within 2 spaces of the Stone, the Stone heals 2 Health.
- **Corruption Spread:** At the end of Rounds 4 and 7, all spaces adjacent to the Stone become Corrupted Ground.

---

**CHAPTER 1: DESCENT**
*Trigger: Game Start*

*"The mine yawns before you, timbers groaning like old bones settling. From somewhere far below, you hear it—not singing, exactly. Humming. The kind of sound that makes your teeth ache and your thoughts scatter."*

**Directive:** Place Mining Equipment tokens (improvised weapons—discard for +2 damage once) in 3 marked spaces.

**Objective:** Reach the Mid Chamber.

---

**CHAPTER 2: THE CHANGED**
*Trigger: Any hero enters Mid Chamber*

*"Lantern light catches glinting eyes. The miners stand in the shadow, tools raised—but wrong. Their movements are too smooth, synchronized like dancers following music you can't hear. They turn toward you as one."*

**Directive:** 
- Thrall Miners activate (Behavior: Move toward nearest hero, attack if adjacent)
- Spawn 2 Echoing Shades at the Mid Chamber entrances
- The Singing Stone now pulses—heroes can see it glowing in the Deep Chamber

**Objective:** Clear the Mid Chamber of enemies.

---

**CHAPTER 3: HARMONICS**
*Trigger: Mid Chamber cleared OR Round 6 begins*

*"The humming intensifies—not louder, but closer, wrapping around your thoughts like cold fingers. The Stone calls to what remains of the miners below. And to something else. Something that was buried with intention."*

**Directive:**
- Spawn the **Choir Master** (Mini-Boss) in the Deep Chamber
- The Choir Master stands between heroes and the Stone
- Spawn 2 Thrall Miners adjacent to the Choir Master

**Objective:** Destroy the Singing Stone.

---

**ENEMY CARDS:**

**THRALL MINER**
*Type: Minion | Health: 3 | Attack: 2 | Defense: 0 | Speed: 2*

**Behavior:** Move toward nearest hero. If adjacent, attack.

**Deaf to Pain:** Does not suffer negative status effects.

**Defeat Bonus:** None (the Stone absorbs their end).

---

**ECHOING SHADE**
*Type: Elite | Health: 6 | Attack: 3 | Defense: 1 | Speed: 4*

**Behavior:** Move toward hero who dealt damage most recently. Attack twice if adjacent.

**Phase Through Stone:** Ignores difficult terrain in the mine.

**Resonance:** While within 3 spaces of the Stone, has +1 Attack.

**Defeat Bonus:** The hero who defeats it may draw 1 resource card.

---

**CHOIR MASTER**
*Type: Mini-Boss | Health: 14 | Attack: 4 | Defense: 2 | Speed: 2*

**Behavior:** Does not move. Attacks nearest hero. If no hero adjacent, uses Harmony.

**Harmony (Signature):** All enemies within 3 spaces heal 2 Health. The Stone heals 3 Health.

**Conductor's Wrath:** When the Choir Master takes 5+ damage in a single attack, it immediately moves 2 spaces and attacks the source.

**Weakness — Silence:** If a hero uses a Storytelling ability while adjacent to the Choir Master, it cannot use Harmony next round.

**Defeat Bonus:** The Stone loses 5 Health immediately. All allies may heal 3 Health.

---

**DIRECTIVE CARDS (shuffle, draw 1 at end of each round):**

1. **Fresh Converts** (Spawn): Spawn 2 Thrall Miners at the mine entrance.
2. **Cave-In** (Environmental): Block one randomly determined passage until a hero spends 2 Steel to clear it.
3. **The Song Crescendos** (Escalation): This round, "The Song" requires discarding 2 cards instead of 1.
4. **Moment of Clarity** (Relief): Each hero may ignore "The Song" this round.
5. **Harmonic Surge** (Escalation): The Stone heals 4 Health. If already at 20, it gains +1 Defense permanently.
6. **Emergency Supplies** (Relief): Place a Supply Cache token in the Mid Chamber. A hero there may discard it to heal 4 or draw 3 resource cards.

---

**CONCLUSION:**

*If victorious:*
> "The Stone shatters—not dramatically, but like old ice cracking in spring sun. The sound simply... stops. The thralls collapse, finally released. In the silence, you hear only your own breathing, and the ordinary sounds of a world no longer singing."

*If defeated (Round 10):*
> "The song reaches its final movement. You feel it bloom in your own chest, beautiful and terrible. The village will hear it tonight. And tomorrow, they will come to join the choir. The Convergence called you here—but you were too late to answer."

---

*"Every scenario is a story. Make it one worth telling."*

---

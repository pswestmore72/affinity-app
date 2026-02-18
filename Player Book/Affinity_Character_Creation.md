# Character Creation

## Step 1: Choose Your Class

Your class determines your core Hit Dice and starting abilities.

### Available Classes

| Class | Hit Die | Playstyle |
|-------|---------|-----------|
| **Combatant** | d10 | Versatile warrior, multiple fighting styles |
| **Weaver** | d6 | Arcane spellcaster, reality manipulation |
| **Priest** | d8 | Divine magic, support and smiting |
| **Ranger** | d8 | Wilderness warrior, tracker |
| **Sovereign** | d10 | Resource efficiency master, self-sufficient duelist |
| **Scholar** | d8 | Knowledge weaponizer, pattern reader |
| **Shaman** | d6 | Spirit communion, threshold walker |

### Understanding Class Progression

Your class provides TWO parallel progression systems:

**1. Core Progression (Every Level):**
- At every level (1-10), you gain core abilities, mechanics, or class fantasy elements
- These define your fundamental growth as your class archetype
- Level 1 provides starting foundation; each level builds on your class identity

**2. Ways (Class-Specific Subclass Specialization):**
- Each class has multiple "Ways"—subclass specializations that deepen your chosen fantasy
- You choose one Way at Level 1, then gain **one node on EVEN LEVELS ONLY (2, 4, 6, 8, 10)**
- Ways are organized as grids (4 columns × 5 rows), allowing flexible progression between adjacent nodes
- Example: A Combatant might choose **Way of the Sentinel** (tank/protector) or **Way of the Weapon Master** (offensive specialist)
- **See your Class document for available Ways**

**3. Paths (General Feats):**
- Broad, non-class-specific customization available to ALL classes
- You gain Path feats at **Level 1 (Primary Feat), then Levels 3, 6, 9, 10**
- Paths allow cross-class builds: A Priest can take War-Trained, a Combatant can take Silver Tongue
- **See Affinity_Path_Board.md for the complete feat system**

**Progression Summary:**

| Level | Core Abilities/Mechanics | Way Node | Path Feat |
|-------|-------------------------|----------|----------|
| 1 | ✅ Starting foundation | ❌ Choose Way (no node yet) | ✅ Primary Feat |
| 2 | ✅ Core progression | ✅ Row 1 node | ❌ No |
| 3 | ✅ Core progression | ❌ No | ✅ Second feat |
| 4 | ✅ Core progression | ✅ Row 2 node | ❌ No |
| 5 | ✅ Core progression | ❌ No | ❌ No |
| 6 | ✅ Core progression | ✅ Row 3 node | ✅ Third feat |
| 7 | ✅ Core progression | ❌ No | ❌ No |
| 8 | ✅ Core progression | ✅ Row 4 node | ❌ No |
| 9 | ✅ Core progression | ❌ No | ✅ Fourth feat |
| 10 | ✅ Core progression | ✅ Row 5 node | ✅ Fifth feat |
| Level | Proficiency | Tough (d10) HD | Balanced (d8) HD | Fragile (d6) HD | Resolve |
|-------|-------------|----------------|------------------|-----------------|---------|
| 1 | 1 | 5 | 5 | 4 | 5 |
| 2 | 1 | 7 | 7 | 5 | 5 |
| 3 | 2 | 9 | 8 | 6 | 5 |
| 4 | 2 | 11 | 10 | 8 | 5 |
| 5 | 3 | 13 | 12 | 9 | 5 |
| 6 | 3 | 15 | 13 | 11 | 5 |
| 7 | 4 | 17 | 15 | 12 | 5 |
| 8 | 4 | 19 | 17 | 14 | 5 |
| 9 | 5 | 21 | 18 | 15 | 5 |
| 10 | 5 | 23 | 20 | 17 | 5 |

### 📝 How to Write Hit Dice on Your Character Sheet

**⚠️ CRITICAL: Hit Dice are INDIVIDUAL DICE, not summed hit points.**

**Correct Notation:**
```markdown
Hit Dice: 7d10 (1d10, 1d10, 1d10, 1d10, 1d10, 1d10, 1d10)
Resolve: 5 (1d6, 1d6, 1d6, 1d6, 1d6)
Proficiency: 2
Armor: 3d8 light leather (1d8, 1d8, 1d8)
Shield: 1d12 wooden shield (1d12)
Weapon: Longsword

Total Defense Pool: [1d12] → [1d8, 1d8, 1d8] → [1d10, 1d10, 1d10, 1d10, 1d10, 1d10, 1d10]
                    (shield)   (armor layer)      (body layer - outermost to innermost)
```

**What This Means:**
- **7d10** = You have SEVEN separate d10 dice in your body pool
- **3d8 armor** = Three separate d8 dice form your armor layer (destroyed BEFORE body)
- **1d12 shield** = One d12 die is your outermost defense layer
- When you take **3 HD damage**, you lose **3 individual dice** (not "3 hit points")
- Dice are destroyed one at a time, from outermost layer inward

**Defense Flow:**
1. Damage hits shield layer first (1d12)
2. Once shield destroyed (0 dice remaining), damage hits armor (3d8)
3. Once armor destroyed (0 dice remaining), damage hits body (7d10)
4. Each die you lose is GONE until you rest/heal (regain dice)

**Example Combat:**
```
Start: [1d12] → [1d8, 1d8, 1d8] → [1d10 ×7]
Take 5 HD damage with Defense Capacity 2:
  - Roll shield die: 4 ❌ (shield destroyed)
  - Roll armor die: 7 ✅ (armor survives)
  - No rolls left: auto-lose 3 dice from armor/body
Result: [0] → [0] → [1d10 ×4]

Your shield + armor + 3 body dice are DESTROYED.
You now have 4d10 remaining (not "28/70 HP").
```

**There are no hit points. Only dice that exist or don't.**

---

## Step 3: Understand the Eight Skills

Skills are **context domains** that define when certain abilities apply—they are not trainable attributes.

**The Eight Skill Domains:**
- **Agility** — Precision movement, stealth, dexterous manipulation
- **Awareness** — Sensing, insight, investigation
- **Fortitude** — Physical resistance, holding out, resilience
- **Wilderness** — Tracking, navigation, animals, foraging
- **Influence** — Persuasion, deception, intimidation
- **Lore** — History, arcana, religion, theory
- **Medicine** — Healing, anatomy, diagnosis
- **Craft** — Making, repairing, engineering

**How Skills Work:**
- Skills themselves do NOT grant bonus dice
- **Class abilities, feats, and special features** grant bonus dice when a roll falls within a skill domain
- The GM identifies which skill domain applies to a given challenge
- Players remember and invoke their abilities that apply to that domain
- Any character can attempt rolls in any domain—but some have abilities that help

**Example:** A Ranger with "Nature's Treaty" ability gains +2d6 when rolling for Wilderness-related tasks. A Scholar with a Lore-focused feat gains bonus dice on Lore checks. Both can attempt both types of rolls, but each excels in their chosen domain.

**Design Philosophy:** This prevents "skill monkey" characters and allows everyone to participate in all challenge types. Your class and feat choices determine where you gain advantages.

**See Core Mechanics for complete skill rules.**

---

## Step 4: Choose a Defining Affinity
*this is a heavy work in progress, this will be the main inspiration engine that drives bonuses and banes (going against affinity). These Affinity will directly tie into Classes, as well as the cosmology and powers that govern reality. I want the system to be simple but impactful, so players can remember it, and it feels useful to alter gameplay and roleplaying. This system will also replace sytems like "backstories", "origins",  "ancestry", racial augments.*

Your virtue represents your character's core motivation and grants **Affinity Dice** when you embody it.

### Light & Order Virtues
- **Memory** *(Aluneth)*: Gain 1 Affinity Dice when you preserve truth against erasure or honor the dead's true story
- **Communion** *(Ilyra)*: Gain 1 Affinity Dice when you shelter the weary or rebuild community after devastation
- **Guardian** *(Caerith)*: Gain 1 Affinity Dice when you stand watch against overwhelming odds or protect the defenseless

### Balance & Cycle Virtues
- **Growth** *(Thymera)*: Gain 1 Affinity Dice when you heal the broken or nurture life in hostile places
- **Decay** *(Darthun)*: Gain 1 Affinity Dice when you accept necessary endings or clear corruption to allow renewal
- **Consequence** *(Thalos)*: Gain 1 Affinity Dice when you ensure choices have weight or witness justice through to completion

### Shadow & Change Virtues
- **Flux** *(Iosyx)*: Gain 1 Affinity Dice when you catalyze transformation through chaos or embrace radical change
- **Freedom** *(Zarun)*: Gain 1 Affinity Dice when you break bonds or forge your own identity against expectation

### Tyranny & Corruption Virtues
- **Obligation** *(Azravael)*: Gain 1 Affinity Dice when you bind someone to favorable terms or collect on forgotten debts
- **Suffering** *(Gephorix)*: Gain 1 Affinity Dice when you reveal truth through pain or force someone to confront despair

### Affinity Dice

Affinity Dice are bonus d6s earned by embodying your chosen virtue.

**Gaining Affinity Dice:**
- When you embody your Affinity (GM judges), gain 1 Affinity Die
- Maximum: You may gain Affinity Dice up to **Proficiency times per day**
- Example: Proficiency 3 = max 3 Affinity Dice gained per day

**Storing Affinity Dice:**
- You may store up to **Level** Affinity Dice at once
- Example: Level 5 = store max 5 Affinity Dice
- Unused Affinity Dice do NOT expire (persist until spent)

**Spending Affinity Dice:**
- On any roll, you may add stored Affinity Dice as bonus dice
- **Affinity Dice are SAFE bonus dice:**
  - 1s rolled on Affinity Dice do NOT burn HD
  - They do NOT count toward your per-action exertion cap
- You may spend multiple Affinity Dice on one roll (up to your stored pool)

**Sharing Affinity Dice:**
- As a **free action** on your turn, transfer any number of stored Affinity Dice to an ally within 30 yards
- That ally adds them to their stored pool (respecting their Level cap)
- Shared Affinity Dice follow the same spending rules
- "Our purpose is shared."

**Tracking:**
Use tokens, marks, or dice to track stored Affinity Dice between sessions.

---

## Step 5: Choose Starting Equipment

### Armor (Choose One)
- **No Armor** (no temp HD)
- **Light Armor** (2d6 temp HD)
- **Medium Armor** (2d8 temp HD)
- **Heavy Armor** (2d10 temp HD) — **Requires Proficiency 2+** OR **Combatant/Sovereign class**
- **Shield** (1d12 temp HD)
- **Rage** type abilities (2d12 temp HD) when roll initiative
- **Magic Armor** (2d12 temp HD)

**Note:** Heavy Armor restriction prevents fragile classes (Weavers, Shamans) from turtling at Level 1. They must invest in advancement or multiclass to access heavy protection.

### Weapons (Choose Two)

**Light Weapons** (Base Impact 1 HD)
- Dagger, shortsword, hand axe, club

**Heavy Weapons** (Base Impact 2 HD, requires both hands)
- Longsword, greatsword, battleaxe, greataxe, maul, halberd

**Precise Weapons** (Base Impact 1 HD, lower threshold by 1)
- Rapier, spear

**Ranged Weapons**
- Shortbow (Base Impact 1 HD, range 30/100)
- Longbow (Base Impact 2 HD, range 50/150, requires both hands)
- Crossbow (Base Impact 1 HD, range 40/120)
*I don't think that I want to introduce weapon special mechanics in the final game; unneeded bloat, maybe just a class fantasy of the Combatant*

## Advancement

### Gaining Levels
You level up when the DM says so (typically after significant story achievements).

When you gain a level:
1. **Increase HD pool** (see progression table)
2. **Increase Proficiency** (recalculate: half level, round up)
3. **Increase Exertion Budget** (equals your new Proficiency)
4. **Gain class features** (odd levels: 1, 3, 5, 7, 9)
5. **Choose a Path feat** (levels 1, 3, 6, 9, and 10)

### Feats
Feats represent specialized training and unique talents beyond your class abilities.

**You gain Path feats at levels 1, 3, 6, 9, and 10.** At Level 1, choose a Primary Feat (your foundation). At subsequent feat levels, choose connected nodes on the Path Board.

See the **Feats** section above for the complete list of available feats and their prerequisites.

Feats allow customization of character progress where class features follow predefined paths. Choose feats that complement your class or shore up weaknesses.

# Affinity TTRPG - Fix-It Plan
**System Review & Development Priorities**  
*Generated: February 15, 2026*

---

## 📊 Overview

This document outlines critical issues, mechanical clarity needs, and development priorities for the Affinity TTRPG system. Items are organized by severity and impact on playability.

**Priority Levels:**
- 🔴 **CRITICAL** - Must fix before any playtesting (system-breaking)
- 🟡 **HIGH** - Should fix for smooth play (causes confusion/rulings)
- 🟢 **MEDIUM** - Nice to have for V1.0 (enhances experience)

---

## ✅ What's Working (Don't Change)

Before we dive into fixes, these are the **exceptional pillars** of your system:

1. **Core HD System** - HD as life + stamina is genuinely innovative
2. **Exertion Risk** - 1s burning HD creates organic tension
3. **Explosive 6s** - 2 successes feels satisfying without being swingy
4. **Threshold Tiers** - 2+/3+/4+/5+/6 scaling is elegant
5. **Resolve as Mental HP** - Social combat targeting Resolve is brilliant
6. **Class Fantasy** - Oath-bound Combatants, Priests as conduits, War Cries
7. **Path Board Philosophy** - "Feats augment fantasy, not class identity"
8. **The Hollow Below Campaign** - Excellent showcase/playtest vehicle

**These are your strengths. Protect them during revisions.**

---

## 🔴 CRITICAL FIXES (Must Fix Before Playtest)

### 1. Resolve Scaling Contradiction ✅ RESOLVED

**Status:** ✅ **FIXED**  
**Files Affected:**
- `Player Book/Affinity_Character_Creation.md` ✅
- `Basic Rules/Affinity_Quick_Reference.md` ✅
- `Basic Rules/Affinity_Core_Mechanics.md` ✅

**The Problem:**
Character Creation table showed Resolve scaling from 2 to 6 across levels, contradicting the explicit statement that "Resolve: 5 (constant for all player characters, regardless of level)".

**Decision Made:**
✅ **Option A: Resolve is ALWAYS 5 for players** (creates consistent pressure, easier bookkeeping)

**Implemented Fix:**
- ✅ Fixed Character Creation Level Progression table - all Resolve values now show 5
- ✅ Confirmed Quick Reference shows Resolve constant at 5 for all levels
- ✅ Confirmed Core Mechanics states "All characters have a maximum Resolve of 5"
- ✅ NPCs explicitly noted to have variable Resolve (typically = Proficiency)

**All files now consistent: Player Resolve = 5 (constant), NPC Resolve = Variable**

---

### 2. Rest & Recovery Rules Missing ✅ RESOLVED

**Status:** ✅ **FIXED**  
**Files Affected:**
- `Basic Rules/Affinity_Core_Mechanics.md` ✅
- `Basic Rules/Affinity_Quick_Reference.md` ✅

**The Problem:**
No rules existed for HD recovery, Resolve recovery, or rest mechanics—creating an unplayable death spiral.

**Decision Made:**
✅ **Two-tier rest system: Rest (threatened) vs Recover (safe)**

**Implemented Fix:**
- ✅ **Rest (0.5-8 hours, threatened):** Regain Proficiency HD, regain 1 Resolve, reset short rest abilities
- ✅ **Recover (6+ hours, safe):** Regain all HD, regain all Resolve (5), reset all abilities, re-roll armor temp HD
- ✅ **2 Rests per day maximum** (prevents rest-spam degenerate play)
- ✅ **Safety requirement** for Recover (Rangers/Priests can create safe spaces)
- ✅ **Armor repair** tied to class abilities (doesn't auto-regenerate)
- ✅ **Class augmentation** noted (Rangers, Priests, Sovereigns, Scholars can improve rest effectiveness)

**Strategic Depth Created:**
- Meaningful choice: Rest early vs push through
- Resource management: Save rests for desperate situations
- Class synergy: Rangers/Priests become valuable for creating safety
- Armor repair: Rewards diverse party composition

**Full rules added to Core Mechanics with examples, condensed version added to Quick Reference**

---

### 3. Defense Roll Clarity ✅ RESOLVED

**Status:** ✅ **FIXED**  
**Files Affected:**
- `Basic Rules/Affinity_Combat_Rules.md` ✅
- `Basic Rules/Affinity_Quick_Reference.md` ✅

**The Problem:**
Combat Rules said "Roll ½ Proficiency dice using their class HD type" without clarifying rounding, minimum dice, or why die type matters when rolling for 5+ threshold.

**Decision Made:**
✅ **Defense Capacity = ½ Proficiency (rounded up, minimum 1 die)**

**Implemented Fix:**
- ✅ **Layered Defense System:** Magical barriers (d12) → Armor temp HD (d6/d8/d10) → Permanent HD (class die type)
- ✅ **Die Type Matters:** Each layer defends using its own die type (d12 barriers = 50% sustain rate, d6 armor = 33% rate)
- ✅ **Defense Capacity:** ½ Prof rounded up creates tight, strategic defense scaling (1 die at low levels, max 3 dice at Level 10)
- ✅ **Overwhelming Damage:** If damage > defense capacity, you still roll but auto-fail depletion
- ✅ **Layer Depletion:** Any remaining damage after defense roll depletes entire layer, moves to next layer inward
- ✅ **No Explosive 6/8/10/12s:** Highest roll on defense dice count as 1 success only on defense rolls
- ✅ **No Exertion/Affinity:** Defense is reactive, no voluntary dice additions
- ✅ **Comprehensive examples:** Combatant (successful armor defense), Weaver (overwhelming damage cascade), Scholar (unarmored class HD defense)
- ✅ **Strategic notes:** Armor is lifeline, 0 HD ≠ death, healing exists, magical barriers superior

**Design Philosophy Preserved:**
- Brutal but fair: Armor loss creates death spiral pressure
- Strategic tension: Retreat to Recover vs push through
- Class synergy value: Magical protection from Weavers/Priests/Shamans is crucial
- Die type differentiation: d12 magical barriers twice as durable as d6 armor

**Full defense mechanics with layered system, success rate tables, and three detailed examples added to Combat Rules. Condensed reference table added to Quick Reference.**

---

### 4. Armor Temp HD Mechanics ✅ RESOLVED

**Status:** ✅ **FIXED**  
**Files Affected:**
- `Basic Rules/Affinity_Combat_Rules.md` ✅
- `Basic Rules/Affinity_Core_Mechanics.md` ✅
- `Player Book/Affinity_Items.md` ✅
- `Player Book/Affinity_Character_Creation.md` ✅
- `Basic Rules/Affinity_Quick_Reference.md` ✅

**The Problem:**
No consolidated explanation of when to roll armor dice, how it depletes, and how it recovers.

**Decision Made:**
✅ **All mechanics already covered through Defense Roll and Rest & Recovery systems**

**Implemented Fix:**
- ✅ **When to roll**: "Rolled when donned" (explicit in Items.md, shown in Defense examples)
- ✅ **Armor types**: Light (2d6), Medium (2d8), Heavy (2d10), Shield (+1d12) documented in Items.md and Quick Reference
- ✅ **Heavy armor requirements**: "Requires Proficiency 2+ OR Combatant/Sovereign class" (Character_Creation.md)
- ✅ **Depletion mechanics**: Layered defense system explains armor as middle layer between magical barriers and permanent HD
- ✅ **Recovery rules**: 
  - Does NOT regenerate automatically during Rest
  - Recover (safe, 6+ hours): Re-roll armor temp HD when donning
  - Rest with Craft/Mend abilities: Can repair armor
  - Without repair abilities: Stays depleted until Recover

**Design Philosophy Preserved:**
- Armor as consumable resource creates strategic tension
- Losing armor mid-adventure forces retreat decisions
- Class abilities (Craft/Mend) have meaningful value
- Shields (d12) provide superior protection vs light armor (d6)

**All armor mechanics fully documented across Defense Roll system, Rest & Recovery rules, Items catalog, and Character Creation guide.**

---

### 5. Action Economy Ambiguity ✅ RESOLVED

**Status:** ✅ **FIXED**  
**Files Affected:**
- `Basic Rules/Affinity_Combat_Rules.md` ✅
- `Basic Rules/Affinity_Core_Mechanics.md` ✅
- `Basic Rules/Affinity_Quick_Reference.md` ✅

**The Problem:**
Core Mechanics said "Each action has its own Exertion budget = Your Proficiency dice" while Quick Reference said "Max dice = Your Level (split across all actions)" creating a fundamental contradiction about whether exertion pools are shared or independent.

**Decision Made:**
✅ **Option B: Each Action Gets Independent Proficiency Pool**

**Implemented Fix:**
- ✅ **Movement:** 10 yards base (doesn't cost an action)
- ✅ **Actions:** Up to 2 standard actions for player characters (NPCs may have different action counts)
- ✅ **Exertion per Action:** Each action has independent Proficiency exertion pool
  - Max exertion per single action = Proficiency
  - Max exertion per turn = Proficiency × 2 (if taking 2 actions)
  - Unused exertion does NOT carry between actions
- ✅ **Free Actions:** Drop item, speak briefly (GM discretion at table)
- ✅ **Additional Movement:** Some classes/paths/abilities/actions grant extra movement beyond base 10 yards

**Example Clarified:**
Level 5 character (Proficiency 3):
- Action 1: Attack using 3 Proficiency dice + up to 3 Exertion dice
- Action 2: Cast spell using 3 Proficiency dice + up to 3 Exertion dice
- **Total possible: 6 Proficiency dice + 6 Exertion dice = 12d6 per turn**

**Design Philosophy Preserved:**
- Aggressive, dynamic combat with high exertion potential
- Each action is independently powerful
- Encourages taking 2 actions per turn (double the aggression, double the risk)
- HD burn on 1s creates meaningful risk when maximizing exertion
- Scales with Proficiency, not Level (keeps low-level play intense)

**All action economy rules clarified across Combat Rules, Core Mechanics, and Quick Reference with consistent language and examples.**

---

### 6. Bonus Damage Cap Wording ✅ RESOLVED

**Status:** ✅ **FIXED**  
**Files Affected:**
- `Basic Rules/Affinity_Core_Mechanics.md` ✅
- `Basic Rules/Affinity_Combat_Rules.md` ✅
- `Basic Rules/Affinity_Quick_Reference.md` ✅

**The Problem:**
Core Mechanics said "Extra successes beyond required add +1 HD damage each (capped at Proficiency)" without clarifying whether the cap meant (A) bonus damage maximum or (B) counting only Proficiency successes. The ambiguous language created confusion about damage calculation.

**Decision Made:**
✅ **Bonus damage from extra successes is capped at Proficiency (not the count of successes)**

**Implemented Fix:**

**Core Mechanics (2 locations updated):**
- ✅ **Damage Calculation section added** with clear structure:
  - **Base Damage:** Determined by weapon, spell, or ability (never capped)
  - **Bonus Damage:** Each success beyond required adds +1 HD damage (capped at Proficiency)
  - **Bonus Damage Cap:** Explicitly states only bonus from extra successes is capped, not base damage
- ✅ **Example added:** Combatant (Prof 3) with heavy weapon rolling 8 successes = 2 HD base + 3 HD bonus (6 extra capped at Prof 3) = **5 HD total**
- ✅ **Design rationale:** Prevents low-tier actions with massive exertion from creating wild power spikes while preserving meaningful scaling

**Combat Rules:**
- ✅ **Attack Sequence step 6 expanded** from single line to explicit breakdown:
  - Base Damage (from weapon/ability)
  - + Bonus Damage (extra successes, max = Proficiency)
  - Total Damage = Base + Bonus (capped)

**Quick Reference:**
- ✅ **Action Resolution step 5 updated** to "(Base + Bonus, bonus capped at Prof)" for condensed clarity

**Design Philosophy Preserved:**
- Proficiency as natural damage scaling: Level 10 (Prof 5) can add max +5 HD bonus
- Prevents degenerate "roll 20 dice on Basic attack" strategies
- Base damage never capped (Heavy weapon always deals base 2 HD minimum)
- Extra successes still valuable (every success up to Prof cap adds damage)
- Applies universally: Attacks, spells, social conflict (Resolve damage), all actions

**All damage calculation language now consistent and unambiguous across Core Mechanics, Combat Rules, and Quick Reference.**

---

## 🟡 HIGH PRIORITY (Should Fix for Smooth Play)

### 7. Affinity Dice Mechanics Unclear ✅ RESOLVED

**Status:** ✅ **FIXED**  
**Files Affected:**
- `Player Book/Affinity_Character_Creation.md` ✅
- `Basic Rules/Affinity_Core_Mechanics.md` ✅
- `Basic Rules/Affinity_Quick_Reference.md` ✅

**The Problem:**
Multiple contradictions and unanswered questions:
- "Can be stored until used (max LEVEL at a time)"
- "Gain maximum Proficiency times per long rest" ← No "long rest" exists in Affinity
- "Count as exertion dice, drawn from turn budget" ← Unclear if they count against exertion cap
- "Can be shared with allies" ← No mechanics for how

**Decision Made:**
✅ **Affinity Dice count as exertion dice with full sharing mechanics**

**Implemented Fix:**

**All Three Files Updated with Complete Mechanics:**

**Gaining Affinity Dice:**
- ✅ When you embody your Affinity (GM judges), gain 1 Affinity Die
- ✅ Maximum: You may gain Affinity Dice up to **Proficiency times per day** (corrected from "per long rest")
- ✅ Example: Proficiency 3 = max 3 Affinity Dice gained per day

**Storing Affinity Dice:**
- ✅ You may store up to **Level** Affinity Dice at once
- ✅ Example: Level 5 = store max 5 Affinity Dice
- ✅ Unused Affinity Dice do NOT expire (persist until spent)

**Spending Affinity Dice:**
- ✅ On any roll, you may add stored Affinity Dice as bonus dice
- ✅ **Affinity Dice count as exertion dice:**
  - They burn your HD if they roll 1s
  - They count toward your per-action exertion cap (max Proficiency per action)
- ✅ You may spend multiple Affinity Dice on one roll (respecting action cap)

**Sharing Affinity Dice:**
- ✅ As a **free action** on your turn, transfer any number of stored Affinity Dice to an ally within 30 yards
- ✅ That ally adds them to their stored pool (respecting their Level cap)
- ✅ Shared Affinity Dice follow the same spending rules
- ✅ "Our purpose is shared."

**Tracking:**
- ✅ Use tokens, marks, or dice to track stored Affinity Dice between sessions

**Design Philosophy Preserved:**
- Virtue embodiment creates mechanical advantage
- Sharing mechanic reinforces party cooperation
- Affinity Dice as exertion = risk/reward tension (1s burn HD)
- Cap prevents degenerate play while scaling with advancement
- Daily gain limit = Proficiency (scales naturally)
- Storage limit = Level (prevents hoarding at low levels, allows reserves at high levels)

**All Affinity Dice mechanics now fully documented with clear answers to all spending, sharing, gaining, and storage questions.**

---

### 8. Skill Training Levels Incomplete

**Status:** 🟡 HIGH  
**Files Affected:**
- `Basic Rules/Affinity_Core_Mechanics.md`
- `Basic Rules/Affinity_Quick_Reference.md`

**The Problem:**
Core Mechanics says: "Skills do NOT grant dice directly. Instead, class abilities may grant bonuses when specific skills apply."

But Character Creation says: "Select 2 skills to be Trained in (+1d6 bonus when applicable)"

**Which is it?**

Also, Quick Reference shows:
```
Training Level:
- Trained: +1d6
- Expert: +2d6
- Master: +3d6
```

But **no rules exist** for gaining Expert or Master training.

**Recommended Fix:**
```markdown
## The Eight Skills

Skills represent specialized training domains. When a skill applies to your action, you gain bonus dice.

**The Eight Skill Domains:**
1. **Agility** — Precision movement, stealth, dexterous manipulation  
2. **Awareness** — Sensing, insight, investigation  
3. **Fortitude** — Physical resistance, holding out, resilience  
4. **Wilderness** — Tracking, navigation, animals, foraging  
5. **Influence** — Persuasion, deception, intimidation  
6. **Lore** — History, arcana, religion, theory  
7. **Medicine** — Healing, anatomy, diagnosis  
8. **Craft** — Making, repairing, engineering

**Training Levels:**
- **Trained:** +1d6 when skill applies  
- **Expert:** +2d6 when skill applies *(Requires Level 5 + feat slot investment)*  
- **Master:** +3d6 when skill applies *(Requires Level 9 + feat slot investment)*

**Skill Dice Do NOT Burn HD on 1s** (like Proficiency dice, they represent reliable training)

**Starting Skills:**
At character creation, choose **2 skills** to be Trained in.

**Advancing Skills:**
- At Levels 4, 8: Gain Training in 1 additional skill (OR advance existing skill to Expert/Master if requirements met)
- Feat investment can advance skills to Expert/Master (see Feat: Skill Mastery in Path Board)

**When Skills Apply:**
The GM judges when a skill is relevant to your action. If your declared action clearly uses that skill domain, add the bonus dice to your roll.
```

**Action Items:**
- [ ] Clarify skill dice mechanics (DO grant dice, but don't burn HD on 1s)
- [ ] Add rules for advancing to Expert/Master (feat investment + level requirement)
- [ ] Create "Skill Mastery" feat in Path Board (allows advancing one skill)
- [ ] Remove "skills don't grant dice" from Core Mechanics (contradicts Character Creation)

---

### 9. Monster Exertion Rules Missing

**Status:** 🟡 HIGH  
**Files Affected:**
- `Game Master Book/Affinity_Bestiary.md`
- `Game Master Book/Affinity_Game_Masters_Guide.md` (needs new section)

**The Problem:**
Bestiary says: "Most monsters/enemies are more likely to choose to exert (maybe can exert more) as they are wreckless"

But monster stat blocks show:
```
Orc Raider (Level 3)
- Attack: Greataxe (Heavy, Basic)
  - Rolls: 3d6
  - Required: 1
  - Base: 2 HD
```

**Questions:**
- Is that 2 Prof + 1 Exertion? Or just "3d6 always"?
- Do monsters have an Exertion Budget?
- Do 1s burn monster HD?
- Can monsters exert beyond Proficiency?

**Recommended Fix:**

**Option A: Monsters Don't Use Exertion Rules (Simpler for GM)**
```markdown
## Monster Actions

Monsters use simplified action rules:
- **No Exertion Budget:** Monsters roll fixed dice pools
- **No HD Burn on 1s:** Monster dice don't burn their HP
- **Fixed Dice Pools:** Stat blocks show total dice rolled (Prof + typical exertion)
- **Reckless Attacks:** Some monsters can choose to roll additional dice (noted in tactics)

**Example:**
Orc Raider - Greataxe Attack
- Rolls: 3d6 (always)
- Required: 1 success
- Base: 2 HD damage
- Special: Blood Rage — When below half HD, rolls 5d6 instead
```

**Option B: Monsters Use Full Exertion Rules (Mechanically Consistent)**
```markdown
## Monster Exertion

Monsters follow the same exertion rules as PCs:
- **Exertion Budget:** = Proficiency per turn (same as PCs)
- **HD Burn:** 1s on exertion dice burn monster HD
- **Reckless:** Monsters typically exert more aggressively than PCs (use max exertion frequently)

**Monster Stat Block Format:**
- **Proficiency:** X
- **Attack Name (Tier, Threshold):**
  - Prof Dice: X (don't burn on 1s)
  - Typical Exertion: Y (burns HD on 1s)
  - Required: Z
  - Base Damage: W HD

**Example:**
Orc Raider (Proficiency 2)
- Greataxe Attack (Basic, 2+):
  - Prof Dice: 2d6
  - Typical Exertion: 1d6 (total 3d6)
  - Required: 1
  - Base: 2 HD
```

**Decision Needed:**
Option A is simpler for GMs. Option B is mechanically consistent but adds bookkeeping.

**Action Items:**
- [ ] Choose Option A (simplified) or Option B (consistent)
- [ ] Update monster stat block format in Bestiary introduction
- [ ] Revise 5-10 monster examples to match chosen format
- [ ] Add "Running Monsters" section to GM Guide

---

### 10. Multi-Target Action Rules

**Status:** 🟡 HIGH  
**Files Affected:**
- `Basic Rules/Affinity_Combat_Rules.md`
- `Player Book/Affinity_Magic_System.md`

**The Problem:**
No rules exist for:
- Can I fireball 5 enemies?
- Do I roll once or per target?
- Do targets defend individually?
- Do extra successes distribute or duplicate?

Some abilities specify:
- War Cry: Rally = "one ally"
- War Cry: Hold the Line = "10-yard radius centered on you, affects all allies"

But no GENERAL rules for multi-target resolution.

**Recommended Fix:**
```markdown
## Multi-Target Actions

Actions can affect multiple targets in several ways:

### Single-Target Actions (Default)
- Roll once
- Affect one target
- Target defends normally
- Extra successes add bonus damage

### Area Actions (Radius, Cone, Line)
- Define area (e.g., "15-yard radius", "30-yard cone")
- Roll **once**
- All creatures in area are affected
- **Each target defends individually**
- Extra successes **do NOT add bonus damage** (prevents one-shotting groups)
- Extra successes may increase area size (GM's discretion)

**Example:** Fireball (Expert, 4+, requires 3, base 3 HD, 15-yard radius)
- Weaver rolls 6 successes
- All enemies in radius defend individually against 3 HD damage (no bonus from extra successes)
- GM may rule: Extra successes increase radius to 20 yards

### Multi-Target Actions (Choose Targets)
- Choose up to X targets (ability specifies)
- Roll **once**
- Each chosen target defends individually
- Extra successes distribute among targets (your choice, max 1 per target)

**Example:** War Cry: Rally (affects 3 allies)
- Combatant rolls 5 successes (requires 2)
- 3 extra successes → distribute +1 effect to each of 3 allies

### Sustained Area Effects (Hold the Line, Sanctify Space)
- Create a zone that persists for duration
- Creatures entering or starting turn in zone are affected
- Roll once when cast, effect applies to all creatures in zone while active
- Does not require additional rolls per round
```

**Action Items:**
- [ ] Add "Multi-Target Actions" section to Combat Rules
- [ ] Update all area spells in Spell Compendium to specify target rules
- [ ] Clarify which class abilities use which targeting type
- [ ] Add examples to Quick Reference

---

### 11. Rush Ability Completion

**Status:** 🟡 HIGH  
**Files Affected:**
- `Basic Rules/Affinity_Combat_Rules.md`
- `Basic Rules/Affinity_Core_Mechanics.md`

**The Problem:**
Rush is marked "WORK IN PROGRESS" but it's a **universal action available to all classes** = core survival mechanic.

Current incomplete design:
- Roll Prof + Exertion
- Each success = 1 HD restored
- Costs 1 Resolve automatically
- 1s burn HD (risky gamble)

**Missing details:**
- What action type? (One of your 2 actions? Bonus action? Reaction?)
- What tier? (Basic 2+? Advanced 3+?)
- Is recovery capped? (Unlimited if you roll well?)
- Usable how often? (At-will? Once per combat?)

**Recommended Fix:**
```markdown
## Rush (Universal Action)

**Action:** Standard (uses one of your 2 actions)  
**Tier:** Basic (2+ threshold)  
**Cost:** 1 Resolve (automatic)  
**Frequency:** Usable once per short rest

**Effect:**
You push past pain and exhaustion, forcing your body beyond its limits.

**Resolution:**
1. Lose 1 Resolve immediately (you must have at least 1 Resolve to use Rush)
2. Roll Proficiency + any amount of Exertion dice
3. Each success (5+) restores 1 HD
4. **Recovery Cap:** You may restore a maximum of **Proficiency HD** (even if you roll more successes)
5. **Risk:** Any 1s rolled on exertion dice burn HD as normal

**The Gamble:**
- Roll few exertion dice = safer, but less recovery
- Roll many exertion dice = more recovery potential, but risk burning HD
- You might end up with LESS HD than when you started

**Example:**
Fighter (Proficiency 3, at 2 HD remaining, 3 Resolve)
- Uses Rush (loses 1 Resolve → now at 2 Resolve)
- Rolls 3 Prof + 4 Exertion dice (7d6 total)
- Results: 6, 5, 4, 3, 2, 1, 1
- Successes: 2 (the 6 and 5)
- Burned HD: 2 (the two 1s)
- **Net result: 2 HD restored - 2 HD burned = 0 HD change** (but lost 1 Resolve)

**Philosophy:**
Rush is desperation. When you need HP NOW and are willing to gamble collapse for survival.
```

**Action Items:**
- [ ] Finalize Rush mechanics (action type, tier, cap, frequency)
- [ ] Add Rush to Core Mechanics in "Universal Actions" section
- [ ] Add Rush to Quick Reference
- [ ] Playtest Rush extensively (is Prof cap too restrictive? Too generous?)

---

## 🟢 MEDIUM PRIORITY (Nice to Have for V1.0)

### 12. Affinity Bane Triggers

**Status:** 🟢 MEDIUM  
**Files Affected:**
- `Player Book/Affinity_Character_Creation.md`

**The Problem:**
Affinity Dice have triggers for GAINING dice ("when you embody your virtue") but no mechanical consequences for betraying your virtue.

Currently it's all carrot, no stick.

**Recommended Addition:**
For each Affinity, add:
- 3 specific GAIN triggers (when you embody virtue)
- 2 specific BANE triggers (when you betray virtue)

**Example:**
```markdown
### Memory (Aluneth)

**Gain 1 Affinity Die when:**
- You spend an action to record/preserve truth that others want forgotten
- You honor a dead NPC's last wish despite personal cost
- You refuse to let trauma or history be minimized

**Lose 1 Affinity Die when:**
- You destroy records to protect yourself from consequences
- You lie about the past to avoid present conflict

### Growth (Thymera)

**Gain 1 Affinity Die when:**
- You heal/restore something broken despite easier options
- You nurture life in a hostile/corrupted place (plant garden in wasteland, etc.)
- You choose long-term growth over short-term survival

**Lose 1 Affinity Die when:**
- You destroy something fertile/growing for convenience
- You choose extraction over cultivation when both were possible
```

**Action Items:**
- [ ] Write 3 Gain + 2 Bane triggers for each of the 10 Affinity virtues
- [ ] Add "Bane Triggers" section to Affinity rules
- [ ] Provide GM guidance on enforcing Bane triggers (don't punish players constantly, but make betrayal MEANINGFUL)
- [ ] Playtest: Do Bane triggers feel punishing or interesting?

---

### 13. Path Board Completion

**Status:** 🟢 MEDIUM  
**Files Affected:**
- `Player Book/Affinity_Path_Board.md`

**The Current State:**
You have:
- Excellent design philosophy
- Power budget guidelines
- Examples of good vs bad feats
- Incomplete node trees for disciplines

**What's Missing:**
- Full 10 discipline feat trees (with 6-8 nodes each)
- Bridge nodes connecting disciplines
- Visual layout of node connections

**You have solid examples and philosophy. This is "just" implementation work.**

**Recommended Approach:**
1. Start with 3 disciplines most needed for The Hollow Below playtest:
   - Combat discipline (for Combatants)
   - Spellcasting discipline (for Weavers/Priests)
   - Wilderness discipline (for Rangers)
2. Build 6 nodes per discipline (Levels 1, 3, 6, 9, 10)
3. Add 2-3 bridge nodes connecting disciplines
4. Playtest with those 3 trees
5. Expand to remaining 7 disciplines post-playtest

**Action Items:**
- [ ] Identify 3 core disciplines needed for first playtest
- [ ] Design 6 nodes per discipline (following power budget)
- [ ] Create visual node map (ASCII art or diagram)
- [ ] Playtest feat balance (are nodes roughly equal power?)
- [ ] Expand to remaining disciplines after successful playtest

---

### 14. Expanded Bestiary

**Status:** 🟢 MEDIUM  
**Files Affected:**
- `Game Master Book/Affinity_Bestiary.md`

**The Current State:**
You have ~15 creatures spanning Trivial to Advanced tiers.

**What's Missing:**
- Expert tier threats (Level 6-7 equivalent)
- Legendary tier bosses (Level 8-9 equivalent)
- Varied creature types (currently heavy on undead/spirits)
- Creatures showcasing different threat types (artillery, tanks, swarms, controllers)

**Recommendation:**
You have enough for early playtesting. Expand bestiary AS NEEDED when:
- Playtesting reveals missing archetypes
- Campaign design requires specific creatures
- Class balance needs testing against varied threats

**Don't build 100 monsters before playtesting. Build 20, test, iterate.**

**Action Items:**
- [ ] Add 3 Expert tier creatures (for Level 5+ encounters)
- [ ] Add 1 Legendary tier boss (for capstone encounter)
- [ ] Ensure creature variety: Tank, Artillery, Skirmisher, Controller, Support
- [ ] Playtest creature balance (are they too easy? Too deadly?)
- [ ] Expand based on playtest needs

---

### 15. Travel & Journey System

**Status:** 🟢 MEDIUM  
**Files Affected:**
- `Basic Rules/Affinity_Core_Mechanics.md` (referenced but incomplete)

**The Problem:**
Core Mechanics mentions "Travel & Journey System" in Mode 2: Threshold Mode, but **no full system exists yet**.

Current text:
> "Travel & navigation (see Travel & Journey System section for complete journey mechanics)"

**But there is no such section.**

**Recommendation:**
This is worldbuilding/campaign design, not core rules. You can add this post-playtest.

**IF YOU WANT IT FOR V1.0:**
```markdown
## Travel & Journey System

**Travel uses Threshold Mode** (task-based, not conflict-based).

### Journey Phases

**Phase 1: Planning (Pre-Journey)**
- Set destination and route
- Determine journey difficulty (Basic/Advanced/Expert based on terrain, weather, danger)
- Assign party roles: Navigator, Scout, Forager, Guard

**Phase 2: Navigation (Each Travel Day)**
- Navigator rolls Proficiency + Exertion (using Wilderness skill if trained)
- Required successes = Journey difficulty × days
- Success: Make progress, arrive safely
- Failure: Complication (lost, weather, encounter, supplies lost)

**Phase 3: Encounters (GM Discretion)**
- Based on terrain, roll for random encounters
- Use threshold mode for non-combat challenges (river crossing, cliff climbing)
- Use contest mode for combat/chase encounters

**Example:**
Party travels through haunted forest (3 days, Advanced difficulty = 3+ threshold).
- Navigator (Ranger, Prof 3, Wilderness trained): Rolls 4d6 (3 Prof + 1 Exertion + 1 Wilderness)
- Day 1: 2 successes
- Day 2: 3 successes (5 total)
- Day 3: 1 success (6 total)
- Required: 6 successes over 3 days
- Success! Party arrives without complication.
```

**Action Items:**
- [ ] Decide if Journey System is essential for V1.0 (or defer to V1.1)
- [ ] If essential: Write full Travel & Journey System section
- [ ] Add journey examples to GM Guide
- [ ] Playtest with The Hollow Below (travel to/from Stonebridge)

---

## 📋 Implementation Checklist

Use this checklist to track progress as you work through fixes:

### Critical Fixes (Required for Playtest)
- [x] **Issue #1:** Resolve scaling fixed across all documents ✅
- [x] **Issue #2:** Rest & Recovery rules written and integrated ✅
- [x] **Issue #3:** Defense roll mechanics clarified ✅
- [x] **Issue #4:** Armor temp HD system fully explained ✅
- [x] **Issue #5:** Action economy unambiguously defined ✅
- [x] **Issue #6:** Bonus damage cap explicitly worded ✅

**🎉 ALL CRITICAL FIXES COMPLETE — SYSTEM IS PLAYTEST READY! 🎉**

### High Priority (Smooth Play)
- [x] **Issue #7:** Affinity Dice mechanics complete ✅
- [ ] **Issue #8:** Skill training progression rules added
- [ ] **Issue #9:** Monster exertion rules decided & documented
- [ ] **Issue #10:** Multi-target action rules written
- [ ] **Issue #11:** Rush ability finalized

### Medium Priority (V1.0 Polish)
- [ ] **Issue #12:** Affinity Bane triggers created
- [ ] **Issue #13:** Path Board: 3 core disciplines complete (6 nodes each)
- [ ] **Issue #14:** Bestiary: +4 creatures (3 Expert, 1 Legendary)
- [ ] **Issue #15:** Travel & Journey System (if needed)

---

## 🎯 Recommended Next Steps

**Week 1-2: Critical Fixes**
1. Fix Resolve contradiction (#1)
2. Write Rest & Recovery rules (#2)
3. Clarify Defense rolls (#3)
4. Document Armor temp HD (#4)
5. Define Action Economy (#5)
6. Rewrite Bonus Damage section (#6)

**Week 3: High Priority**
7. Complete Affinity Dice mechanics (#7)
8. Add Skill progression rules (#8)
9. Finalize Rush ability (#11)

**Week 4: Playtest Prep**
10. Decide Monster exertion approach (#9)
11. Write Multi-target rules (#10)
12. Build 3 core Path Board disciplines (#13)

**Week 5+: Playtest The Hollow Below**
- Run campaign with 3-4 players
- Document pain points, unclear rules, balance issues
- Iterate based on feedback

**Post-Playtest: Polish**
- Add Affinity Banes (#12)
- Expand Bestiary (#14)
- Add Journey System if needed (#15)
- Balance classes based on play data

---

## 💬 Discussion Questions

Before diving into fixes, let's align on key decisions:

1. ~~**Resolve:** Confirm constant at 5? Or scale with level?~~ ✅ **DECIDED: Constant at 5**
2. **Action Economy:** Option A (Level total) or Option B (Prof per action)?
3. **Defense Rolls:** Full Proficiency or Half Proficiency?
4. **Monster Exertion:** Simplified (Option A) or Consistent (Option B)?
5. **Rush Cap:** Proficiency cap appropriate? Or unlimited recovery?

**Let's tackle these together, Wizard.** Which issue should we address first?

---

*"The path to greatness is paved with honest assessment and deliberate refinement. Your system has exceptional bones. Now we sharpen them."* ⚔️📖

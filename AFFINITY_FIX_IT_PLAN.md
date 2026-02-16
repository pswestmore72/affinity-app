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
- ✅ **Recover (6+ hours, safe):** Regain all HD, regain all Resolve (5), reset all abilities, restore armor layer
- ✅ **2 Rests per day maximum** (prevents rest-spam degenerate play)
- ✅ **Safety requirement** for Recover (Rangers/Priests can create safe spaces)
- ✅ **Armor repair** tied to class abilities (doesn't auto-restore during Rest)
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
No consolidated explanation of how armor interacts with the defense system.

**Decision Made:**
✅ **Armor provides defense dice rolled DURING defense, NOT pre-rolled when donned**

**Implemented Fix:**
- ✅ **Armor as defense layer:** Armor provides dice (2d6/2d8/2d10/+1d12 shield) rolled on defense as your OUTER layer
- ✅ **Rolled during defense:** When you take damage, roll armor dice first. Each 5+ cancels 1 damage.
- ✅ **Layer depletion:** If ANY damage remains after rolling armor dice, the armor layer is depleted (destroyed until repaired/rest)
- ✅ **Defense sequence:** Magical barriers (d12) → Armor layer (d6/d8/d10) → Permanent HD (class die type)
- ✅ **Heavy armor requirements:** "Requires Proficiency 2+ OR Combatant/Sovereign class" (Character_Creation.md)
- ✅ **Recovery rules:** 
  - Rest with Craft/Mend abilities: Can restore armor layer
  - Recover (safe, 6+ hours): Armor layer fully restored
  - Without repair abilities: Stays depleted until Recover

**Design Philosophy Preserved:**
- Armor as defense layer creates strategic tension
- Losing armor mid-adventure forces retreat decisions OR reliance on permanent HD
- Class abilities (Craft/Mend) have meaningful value
- Shields (+1d12) provide superior defensive die vs light armor (d6)
- Die type matters: d10 armor succeeds 60% vs d6 armor at 33%

**All armor mechanics fully documented across Defense Roll system, Rest & Recovery rules, Items catalog, and Character Creation guide.**

---

### 5. Action Economy Ambiguity ✅ RESOLVED

**Status:** ✅ **FIXED** (Enhanced with tier restrictions, triggered actions, and held actions)  
**Files Affected:**
- `Basic Rules/Affinity_Combat_Rules.md` ✅
- `Basic Rules/Affinity_Core_Mechanics.md` ✅
- `Basic Rules/Affinity_Quick_Reference.md` ✅
- `Game Master Book/Affinity_Game_Masters_Guide.md` ✅
- `Game Master Book/Affinity_Bestiary.md` ✅

**The Problem:**
Core Mechanics said "Each action has its own Exertion budget = Your Proficiency dice" while Quick Reference said "Max dice = Your Level (split across all actions)" creating a fundamental contradiction about whether exertion pools are shared or independent. Additionally, no rules existed for action tier restrictions, reactions, or held actions.

**Decision Made:**
✅ **Option B: Each Action Gets Independent Proficiency Pool + Tier Restrictions + Triggered/Held Actions**

**Implemented Fix:**

**Core Action Economy:**
- ✅ **Movement:** 10 yards base (doesn't cost an action)
- ✅ **Actions:** Up to 2 standard actions for player characters (NPCs may have different action counts)
- ✅ **Exertion per Action:** Each action has independent Proficiency exertion pool
  - Max exertion per single action = Proficiency
  - Max exertion per turn = Proficiency × 2 (if taking 2 actions)
  - Unused exertion does NOT carry between actions
- ✅ **Free Actions:** Drop item, speak briefly (GM discretion at table)
- ✅ **Additional Movement:** Some classes/paths/abilities/actions grant extra movement beyond base 10 yards

**NEW: Action Tier Restrictions:**
- ✅ **Only 1 action may be Expert tier or higher per turn** (player characters)
- ✅ Once you attempt Expert/Legendary/Ultimate/Mythical action (success or failure), remaining actions must be Basic or Advanced tier
- ✅ You may take 2 Basic, 2 Advanced, or 1 Basic + 1 Advanced in any combination
- ✅ You may combine 1 Expert+ action with 1 Basic/Advanced action
- ✅ **Design rationale:** High-tier actions demand intense focus—you cannot maintain that power output twice in one turn

**NEW: Triggered Actions (Reactions):**
- ✅ Special abilities that activate in response to specific triggers
- ✅ If you haven't acted this round, you may use triggered actions when triggers occur
- ✅ Uses one of your 2 actions for the turn
- ✅ Subject to the same tier restrictions as normal actions
- ✅ **Example:** Priest uses Guardian's Interception (Advanced) as triggered action before their initiative, leaving only 1 action when their turn arrives

**NEW: Held Actions:**
- ✅ You may hold actions on your turn, waiting for a specific trigger
- ✅ Must declare the trigger condition and which action you'll use
- ✅ When trigger occurs: Use held action immediately (interrupts current action)
- ✅ If trigger doesn't occur by round's end: May only use held actions for Basic tier actions (at initiative count 0)
- ✅ **Risk:** Wasting your turn if trigger never happens
- ✅ **Tactical use:** Counterspelling, intercepting charges, coordinating with allies, reacting to positioning

**NEW: NPC Tier-Specific Restrictions:**
- ✅ **All NPCs:** Only 1 action may be Expert tier or higher per turn
- ✅ **Legendary NPCs:** May use no more than 1 Legendary-tier action per round
- ✅ **Ultimate NPCs:** May use no more than 1 Ultimate-tier action per round
- ✅ **Mythical NPCs:** May use no more than 1 Mythical-tier action per round
- ✅ Prevents "spam the best ability" tactics, creates dynamic varied combat
- ✅ **Example:** Legendary Dragon with 4 actions = 1 Legendary Breath + 3 Basic/Advanced attacks

**Example Clarified:**
Level 5 character (Proficiency 3):
- Action 1: Ultimate Spell (Expert tier) using 3 Proficiency dice + up to 3 Exertion dice
- Action 2: Healing Touch (Basic tier) using 3 Proficiency dice + up to 3 Exertion dice  
- **Total possible: 6 Proficiency dice + 6 Exertion dice = 12d6 per turn**
- **Restriction:** Cannot use 2 Expert+ actions in same turn

**Design Philosophy Preserved:**
- Aggressive, dynamic combat with high exertion potential
- Each action is independently powerful
- Encourages taking 2 actions per turn (double the aggression, double the risk)
- HD burn on 1s creates meaningful risk when maximizing exertion
- Scales with Proficiency, not Level (keeps low-level play intense)
- **NEW:** Tier restrictions create meaningful choices about when to unleash ultimate power
- **NEW:** Triggered actions and held actions add tactical depth and reactive gameplay

**All action economy rules clarified across Combat Rules, Core Mechanics, Quick Reference, GM Guide, and Bestiary with consistent language and comprehensive examples.**

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

### 8. Skill System Documentation ✅ RESOLVED

**Status:** ✅ **FIXED** (Design Clarification)  
**Files Affected:**
- `Player Book/Affinity_Character_Creation.md` ✅
- `Basic Rules/Affinity_Quick_Reference.md` ✅
- `Basic Rules/Affinity_Core_Mechanics.md` ✅ (already correct)

**The Problem:**
Character Creation incorrectly said "Select 2 skills to be Trained in (+1d6 bonus)" which contradicted Core Mechanics.

**Decision Made:**
✅ **Skills are context domains only—class abilities/feats grant bonus dice when skill domains apply**

**Implemented Fix:**
- ✅ Removed "choose 2 skills to be Trained" from Character Creation
- ✅ Replaced with explanation that skills are context domains
- ✅ Clarified that class abilities, feats, and features grant bonus dice when specific skill domains apply
- ✅ Updated Quick Reference to remove training level table, added clear explanation
- ✅ Examples added: Ranger's Nature's Treaty (+2d6 Wilderness), Scholar's Arcane Study (+2d6 Lore)

**Design Philosophy:**
- No "skill monkey" characters who monopolize skill checks
- Any character can attempt any roll in any domain
- Class and feat choices determine where you gain advantages (bonus dice)
- Player-driven: Players remember and invoke their abilities when domains apply
- GM identifies which skill domain applies to a given challenge

**All skill system documentation now consistent across Character Creation, Core Mechanics, and Quick Reference.**

---

### 9. NPC/Monster Action Rules ✅ RESOLVED

**Status:** ✅ **FIXED**  
**Files Affected:**
- `Game Master Book/Affinity_Bestiary.md` ✅
- `Game Master Book/Affinity_Game_Masters_Guide.md` ✅

**The Problem:**
Bestiary said "monsters are more likely to exert (maybe can exert more) as they are reckless" but stat blocks showed fixed dice pools without explaining whether NPCs use exertion rules, whether 1s burn their HD, or how their action economy works.

**Decision Made:**
✅ **Option A: NPCs use simplified mechanics (no exertion budgets, no HD burn from 1s)**

**Implemented Fix:**

**Bestiary Updates:**
- ✅ Updated Power Tier table to include **Actions Per Turn** and **Max Resolve** columns
- ✅ Added comprehensive **"NPC Action Rules"** section explaining:
  - Fixed dice pools (no exertion choices)
  - No HD burn from 1s on NPC rolls
  - Reckless traits for conditional power spikes
  - Variable actions by tier (Trivial = 1, Legendary+ = 2 + party scaling)
  - Variable Resolve by tier (unlike PCs who always have 5)
  - Defense rolls using same system but simplified
- ✅ Updated **"NPC Stat Block Format"** section to clarify dice pools are fixed totals
- ✅ Added GM tips for adjusting difficulty and using stat blocks flexibly

**GM Guide Updates:**
- ✅ Added comprehensive **"Running NPCs"** section (before Running Combat Encounters) covering:
  - Core NPC design philosophy (streamlined for GM efficiency)
  - Power tier table with actions and Resolve
  - Step-by-step action resolution
  - Dice pool explanation (Prof + typical aggression = fixed total)
  - Reckless traits as alternative to exertion choices
  - NPC defense rolls (simplified, no HD burn)
  - Resolve as narrative tool (varies by tier)
  - Multiple actions for high-tier NPCs (party size scaling)
  - Encounter building guidelines (action economy balance)
  - Social encounters with NPCs
  - GM tips for streamlined management

**Key Design Decisions:**
- **Why simplify NPCs?** GMs may run 3-8 NPCs simultaneously—complex exertion tracking slows the game
- **Why variable actions?** Solo bosses need multiple actions to challenge full parties (prevents action economy imbalance)
- **Why variable Resolve?** Creates mechanical differentiation (cowardly minions vs ironwilled champions)
- **Why no HD burn from 1s?** Reduces GM cognitive load dramatically
- **Reckless traits:** Replace exertion choices with conditional bonuses ("Blood Rage: When below half HD, +2d6")

**Power Tier Action/Resolve Scaling:**
- Trivial: 1 action, Resolve 2
- Basic: 1-2 actions, Resolve 2
- Advanced: 1-2 actions, Resolve 3
- Expert: 2 actions, Resolve 4
- Legendary: 2 + ½ party size (up) actions, Resolve 5+
- Ultimate: 2 + ½ party size (up) actions, Resolve 8+
- Mythical: 2 + party size (up) actions, Resolve 11+

**All NPC mechanics now fully documented with practical GM guidance for running simplified, dynamic encounters.**

---

### 10. Multi-Target Action Rules ✅ RESOLVED

**Status:** ✅ **FIXED**  
**Files Affected:**
- `Basic Rules/Affinity_Combat_Rules.md` ✅
- `Player Book/Affinity_Magic_System.md` ✅

**The Problem:**
No rules existed for multi-target resolution:
- Can I fireball 5 enemies?
- Do I roll once or per target?
- Do targets defend individually?
- Do extra successes distribute or duplicate?

Some abilities specified individual targeting, but no GENERAL rules existed for multi-target mechanics.

**Decision Made:**
✅ **Comprehensive multi-target system with four distinct resolution types + proficiency scaling**

**Implemented Fix:**

**Combat Rules - "Multi-Target Actions" Section Added (~200 lines):**

**1. Single-Target Actions (Baseline):**
- Roll once, target defends individually
- Extra successes add bonus damage (capped at Proficiency)
- Standard resolution applies

**2. Area Actions (Radius, Cone, Line):**
- **Roll once** for the entire area effect
- **All creatures in area affected** automatically
- **Each defends individually** (separate defense rolls)
- **Extra successes increase area size, NOT damage** (prevents instant-kill on groups)
- **Proficiency Scaling:** Each 2 extra successes = +5 yards to radius/range (max Proficiency × 5 yards)
- **Tactical Choice:** Caster chooses to expand area OR keep base size
- Examples: Fireball, Chain Lightning, environmental explosions

**3. Multi-Target Selection Actions:**
- **Choose specific targets** up to base limit (ability specifies)
- **Roll once** for all chosen targets
- **Each defends individually**
- **Extra successes can:**
  - Add 1 additional target per extra success (max = Proficiency additional targets)
  - OR distribute as +1 intensity among existing targets (max +1 per target)
- **Proficiency Scaling:** Add up to Proficiency bonus targets with extra successes
- **Tactical Choice:** More targets (spread effects) OR higher intensity (overwhelm defenses)
- Examples: War Cry Rally, Chain Lightning, Barrage of Arrows

**4. Sustained Area Effects (Zones):**
- **Roll once when created**
- Define area and duration (ability specifies)
- **Affects creatures entering or starting turn in zone**
- **No additional rolls needed** (initial success count persists)
- **Effect continues even if caster falls unconscious**
- Examples: Hold the Line, Wall of Flames, Sanctify Space

**Targeting Summary Table Added:**
- Quick reference for: Roll count, Defense type, Extra success use, Prof scaling
- All four action types clearly differentiated

**Magic System - "Multi-Target Spells" Section Added:**
- Overview of three spell targeting types (Area, Multi-Select, Sustained Zones)
- Proficiency scaling explanation for spellcasters
- Cross-reference to Combat Rules for complete mechanics

**Design Philosophy Preserved:**
- **Roll once principle:** Speeds combat resolution, prevents dice fatigue
- **Individual defenses:** Each creature has chance to resist/mitigate
- **Proficiency scaling:** Low-level spells remain useful at high levels (bigger area, more targets)
- **Tactical choices:** Extra successes create meaningful decisions (area vs intensity, targets vs power)
- **No damage stacking on areas:** Prevents degenerate "nova the room" strategies
- **Zone independence:** Sustained effects create battlefield control without concentration/maintenance

**Examples Provided:**
- Fireball with area scaling (Proficiency 4, expanding 15-yard radius to 25 yards)
- War Cry Rally adding bonus targets (affecting 3 allies instead of 2)
- Chain Lightning distributing intensity (+1 damage to 2 of 3 targets)
- Hold the Line zone persisting after caster falls unconscious
- Wall of Flames damaging enemies who enter or remain in zone

**All multi-target mechanics now fully documented with comprehensive examples, tactical guidance, and proficiency scaling naturally integrated.**

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

### 11. Rush Ability Completion ✅ RESOLVED

**Status:** ✅ **FIXED**  
**Files Affected:**
- `Basic Rules/Affinity_Combat_Rules.md` ✅
- `Basic Rules/Affinity_Core_Mechanics.md` ✅
- `Basic Rules/Affinity_Quick_Reference.md` ✅

**The Problem:**
Rush was marked "WORK IN PROGRESS" but it's a **universal action available to all classes** = core survival mechanic. Previously had incomplete design with dice rolls and exertion risk, creating unnecessary complexity.

**Decision Made:**
✅ **Rush is a clean, simple trade: 1 Resolve → Proficiency HD (no roll, no risk)**

**Implemented Fix:**

**Combat Rules - "Rush" Section Added (Universal Actions):**

**Action Type:** Standard (uses one of your 2 actions)  
**Cost:** 1 Resolve (automatic, no Resolve check)  
**Effect:** Immediately regain Proficiency HD  
**Frequency:** Resets on Rest (short rest)

**How Rush Works:**
1. Declare Rush on your turn (uses one action)
2. Automatically lose 1 Resolve (no roll required—voluntary sacrifice)
3. Immediately regain HD equal to your Proficiency
4. **No dice roll, no exertion, no risk of burning HD**

**Design Philosophy:**
- **Clean trade:** Mental fortitude (Resolve) → Physical vitality (HD)
- **No gambling:** Unlike healing spells or exertion actions, Rush is guaranteed recovery
- **Strategic cost:** Losing Resolve creates death spiral risk (penalties, reduced defense)
- **Desperation mechanic:** Trade tomorrow's strength for today's survival
- **Predictable:** Players know exactly what they're getting (Proficiency HD)

**Example:**
```
Level 5 Combatant (Proficiency 3, at 3 HD / 11 max, 4 Resolve)
- Uses Rush (one action)
- Loses 1 Resolve: 4 → 3 Resolve
- Gains 3 HD: 3 HD → 6 HD
- Can use second action normally
- Rush resets on next Rest
```

**Core Mechanics - Resolve Check Clarification:**
- Updated Resolve check to explicitly state "4 or less" for consistency
- Added note: "Rush action bypasses check (voluntary loss)"
- Clarified that choosing to use Rush does not trigger additional Resolve checks

**Quick Reference - Universal Actions & Resolve Checks Added:**
- Rush summary: Cost, Effect, Frequency
- Condensed explanation: "Trade mental fortitude for physical recovery"
- Complete Resolve check reference added (when required, how to roll, Rush exception)

**Key Design Decisions:**
- **Why no roll?** Reduces complexity, makes Rush reliable in desperate situations
- **Why Proficiency HD?** Scales naturally with advancement (1 HD at Level 1, 5 HD at Level 10)
- **Why automatic Resolve loss?** Rush is about willpower, not luck—you choose this sacrifice
- **Why resets on Rest?** Prevents spam, encourages resource management (max 2 Rests per day = max 2 Rushes normally)
- **Why available to all?** Universal survival option prevents "only healers can save dying characters" problem

**NPCs May Have Rush:**
Some elite NPCs or monsters may use Rush to survive longer than expected, creating dangerous "won't stay down" moments in combat.

**All Rush mechanics now fully documented with clear examples and strategic guidance.**

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

### High Priority (Smooth Play) — ALL COMPLETE ✅
- [x] **Issue #7:** Affinity Dice mechanics complete ✅
- [x] **Issue #8:** Skill system documentation clarified ✅
- [x] **Issue #9:** NPC/Monster action rules decided & documented ✅
- [x] **Issue #10:** Multi-target action rules written ✅
- [x] **Issue #11:** Rush ability finalized ✅
- [x] **Issue #12:** Steady ability implemented ✅

**Documentation for Issue #12: Steady Ability**

**Status:** COMPLETE  
**Location:** Combat Rules (Universal Actions section), Core Mechanics (Resolve section), Quick Reference, Classes (Priest/Sovereign enhancements)

**Implementation:**
- **Steady Action:** -3 HD → +1 Resolve (fixed cost, no roll, resets on Rest)
- Universal action available to all characters
- Clean inverse of Rush (Rush: 1 Resolve → Prof HD, Steady: 3 HD → 1 Resolve)
- Provides baseline Resolve management for everyone

**Priest & Sovereign Specialization:**
- **Priests:** Power Word: Endure restores BOTH HD and Resolve to others at range with no personal cost (superior support)
- **Priests:** Divine Conduit restores Resolve while dealing damage (offensive restoration)
- **Sovereigns:** Internal Alchemy HD→Will triggers automatically when taking damage, no action required (passive efficiency)
- **Sovereigns:** Resource Cascade restores Resolve while attacking successfully (combat-integrated restoration)
- **Sovereigns:** Efficient Recovery provides Rush-like trade but usable Prof times per rest (frequency advantage)

**Design Philosophy:**
- Everyone has baseline Resolve management (Steady: 3 HD → 1 Resolve)
- Priests and Sovereigns are demonstrably superior at Resolve manipulation
- Priests excel at restoring Resolve to others and channeling power for self-restoration
- Sovereigns excel at automatic/passive Resolve restoration during combat
- Class identity preserved while providing universal survival tool

---

### Medium Priority (V1.0 Polish)
- [ ] **Issue #13:** Affinity Bane triggers created
- [ ] **Issue #14:** Path Board: 3 core disciplines complete (6 nodes each)
- [ ] **Issue #15:** Bestiary: +4 creatures (3 Expert, 1 Legendary)
- [ ] **Issue #16:** Travel & Journey System (if needed)

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

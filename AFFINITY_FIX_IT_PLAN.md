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

### 2. Rest & Recovery Rules Missing

**Status:** 🔴 CRITICAL  
**Files Affected:**
- `Basic Rules/Affinity_Core_Mechanics.md` (needs new section)
- `Basic Rules/Affinity_Quick_Reference.md` (needs addition)

**The Problem:**
No rules exist for:
- Natural HD recovery during short rest
- Natural HD recovery during long rest
- Resolve recovery rates
- Can you spend HD to heal like D&D 5e?

**Without this, HD attrition becomes a death spiral.**

**Recommended Fix:**
```markdown
## Rest & Recovery

### Short Rest (1 hour)
- Regain all Resolve up to maximum (5 for PCs)
- May spend HD to heal yourself:
  - Roll any number of your remaining HD
  - Regain HD equal to total rolled
  - Those HD are spent (not recoverable until long rest)
- Reset short rest abilities (War Cries, Power Words, etc.)

### Long Rest (8 hours)
- Regain half your maximum HD (round down, minimum 1)
- Regain all Resolve to maximum
- Reset all daily abilities
- Remove all temporary HD from armor (re-roll when donning armor again)

### Example:
Fighter with 9d10 HD (max) is at 3 HD remaining after combat.
- Short Rest: Spends 2 of remaining 3 HD, rolls 2d10 → 7+4 = 11 HD regained (back to 12 HD, has 1 HD left unspent)
- Long Rest: Regains half max (9/2 = 4 HD), bringing them to 5 HD total
```

**Action Items:**
- [ ] Add "Rest & Recovery" section to Core Mechanics (after "Character Resources")
- [ ] Add condensed version to Quick Reference
- [ ] Clarify if armor temp HD re-rolls on long rest or when re-donning armor
- [ ] Specify if abilities reset on short vs long rest (document per ability)

---

### 3. Defense Roll Clarity

**Status:** 🔴 CRITICAL  
**Files Affected:**
- `Basic Rules/Affinity_Combat_Rules.md`
- `Basic Rules/Affinity_Quick_Reference.md`

**The Problem:**
Combat Rules say: "Roll ½ Proficiency dice using their class HD type, each 5+ cancels 1 damage"

**Questions:**
- Level 1-2 characters roll 0.5 dice? (Proficiency 1 → ½ = ?)
- Round up or down?
- Why does "class HD type" matter if you're rolling for 5+ successes? (d10 vs d6 same success rate)

**Likely Intent:**
You meant "roll FULL Proficiency dice" and the "½" was a typo OR you meant something else entirely.

**Recommended Fix:**
```markdown
## Defense Rolls

When you take HD damage from an attack or effect:

1. **Armor Absorbs First:** Deplete temporary HD from armor before rolling defense
2. **Roll Defense Dice:** Roll Proficiency d6s (regardless of class HD type)
3. **Count Successes:** Each 5+ cancels 1 incoming HD damage
4. **No Exertion Allowed:** You cannot add exertion dice to defense rolls
5. **No Explosive Dice:** 6s count as 1 success only (not 2)
6. **Apply Remaining Damage:** Subtract from your HD pool

**Example:**
Fighter (Proficiency 3, 9d10 HD, 7 temp HD from armor) is hit for 10 HD damage.
- Armor absorbs 7 damage (temp HD depleted to 0)
- Roll 3d6 defense → 6, 4, 5 = 2 successes
- Cancel 2 damage (3 remaining)
- Subtract 3 from HD pool (9 → 6 HD remaining)
```

**Decision Needed:**
- Full Proficiency or Half Proficiency for defense?
- Does class HD type matter for defense? (If not, remove mention)

**Action Items:**
- [ ] Clarify defense dice count (Full Prof recommended)
- [ ] Explicitly state rounding if using ½ Prof
- [ ] Confirm 6s on defense = 1 success only (not 2)
- [ ] Remove "class HD type" reference if it doesn't mechanically matter
- [ ] Add defense example to Quick Reference

---

### 4. Armor Temp HD Mechanics

**Status:** 🔴 CRITICAL  
**Files Affected:**
- `Basic Rules/Affinity_Combat_Rules.md`
- `Player Book/Affinity_Character_Creation.md`

**The Problem:**
Quick Reference says "Light Armor: 2d6 temp HD" but never explains:
- When do you roll armor dice? (Start of combat? When donning? Daily?)
- How is it depleted? (Before defense roll? Instead of defense roll?)
- Does it regenerate? (Long rest? Short rest? Re-donning only?)

**Recommended Fix:**
```markdown
## Armor & Temporary HD

Armor provides **Temporary Hit Dice** that absorb damage before your permanent HD pool.

**When You Don Armor:**
- Roll armor dice immediately (e.g., Light Armor = roll 2d6)
- Total rolled = your current temporary HD
- This temp HD pool remains until depleted or armor is removed

**When You Take Damage:**
1. Deplete temporary HD first (no roll needed, straight subtraction)
2. Once temp HD = 0, roll defense dice against remaining damage
3. Apply any remaining damage to permanent HD pool

**Armor Types:**
- **Light Armor:** 2d6 temp HD (leather, padded)
- **Medium Armor:** 2d8 temp HD (chainmail, scale)
- **Heavy Armor:** 2d10 temp HD (plate, full plate) — *Requires Proficiency 2+ OR Combatant/Sovereign class*
- **Shield:** +1d12 temp HD (adds to armor total)
- **Magic Armor:** 2d12 temp HD (enchanted protection)

**Recovery:**
- Temp HD do NOT regenerate during rest
- Remove armor and re-don it to re-roll temp HD (takes 1 minute)
- Strategic: Rest in armor to keep temp HD, or doff/don to re-roll?

**Example:**
Combatant wears Medium Armor (2d8) + Shield (+1d12).
- Rolls 2d8 → 4+7 = 11 temp HD
- Rolls 1d12 → 9 temp HD
- **Total: 20 temp HD buffer before taking real damage**
```

**Action Items:**
- [ ] Add "Armor & Temporary HD" section to Combat Rules
- [ ] Add armor table to Character Creation (already exists, clarify rolling)
- [ ] Decide: Can you re-roll armor temp HD on long rest? (Recommend: No, must doff/don)
- [ ] Clarify if "Rage abilities" (2d12 temp HD) stack with armor

---

### 5. Action Economy Ambiguity

**Status:** 🔴 CRITICAL  
**Files Affected:**
- `Basic Rules/Affinity_Combat_Rules.md`
- `Basic Rules/Affinity_Core_Mechanics.md`

**The Problem:**
Core Mechanics says: "You may take up to 2 actions per turn"

Quick Reference says: "Exertion Budget: Max dice = Your Level (split across all actions this turn, max Proficiency per action)"

But Core Mechanics ALSO says: "Each action has its own Exertion budget = Your Proficiency dice"

**This is contradictory.**

**Example Confusion:**
Level 5 Combatant (Proficiency 3, "Level" = 5)
- Can I use 3 exertion on Action 1 AND 3 exertion on Action 2? (Total 6?)
- Or is my TOTAL exertion budget 5 for the turn, split however I want?
- If the latter, the "max Prof per action" = 3 means I can't spend all 5 on one action?

**Recommended Fix (Choose One):**

**Option A: Exertion = Level Total, Split as Desired**
```markdown
## Action Economy

Each turn you have:
- **Movement:** 10 yards (does not cost an action)
- **Actions:** Up to 2 standard actions
- **Exertion Budget:** Total = Your LEVEL per turn
  - You may split exertion across your actions as desired
  - **Max Proficiency exertion dice per single action** (prevents dumping all dice on one attack)
- **Free Actions:** Drop item, speak briefly

**Example (Level 5, Proficiency 3):**
- Action 1: Attack with 3 exertion (max allowed per action)
- Action 2: Attack with 2 exertion (5 total spent, budget exhausted)
```

**Option B: Each Action Gets Independent Proficiency Pool**
```markdown
## Action Economy

Each turn you have:
- **Movement:** 10 yards (does not cost an action)
- **Actions:** Up to 2 standard actions
- **Exertion Budget:** Each action may use up to PROFICIENCY exertion dice independently
  - Unused exertion does NOT carry to next action
  - Max exertion per turn = Proficiency × 2 (if taking 2 actions)

**Example (Proficiency 3):**
- Action 1: Attack with up to 3 exertion
- Action 2: Attack with up to 3 exertion
- Total possible: 6 exertion per turn
```

**Decision Needed:**
Which option fits your intended balance? Option A conserves resources. Option B enables more aggressive play.

**Action Items:**
- [ ] Choose Option A or Option B (or design Option C)
- [ ] Rewrite action economy section for crystal clarity
- [ ] Update Quick Reference with chosen rule
- [ ] Ensure all class abilities respect the action economy (War Cries, spells, etc.)

---

### 6. Bonus Damage Cap Wording

**Status:** 🔴 CRITICAL  
**Files Affected:**
- `Basic Rules/Affinity_Core_Mechanics.md`
- `Basic Rules/Affinity_Combat_Rules.md`

**The Problem:**
Core Mechanics says: "Extra successes beyond required add +1 HD damage each (capped at Proficiency)"

**Ambiguous:** Does "capped at Proficiency" mean:
- **A)** Extra successes can only add UP TO Proficiency bonus damage?
- **B)** You can only COUNT Proficiency extra successes?

**Example:**
Fighter (Prof 3) rolls 7 successes on Basic attack (requires 1).
- Base damage: 2 HD (heavy weapon)
- Extra successes: 6

**If Cap = Proficiency Bonus Damage Max:**
Final damage = 2 HD (base) + 3 HD (capped) = **5 HD total**

**If Cap = Count Only Proficiency Successes:**
Same result, different math pathway.

**Recommended Fix:**
```markdown
## Damage Calculation

**Base Damage:** Determined by weapon, spell, or ability

**Bonus Damage:** Each success beyond the required amount adds +1 HD damage

**Bonus Damage Cap:** Bonus damage from extra successes is capped at your **Proficiency** score
- This prevents exponential scaling at high levels
- Base damage is never capped (only bonus from extra successes)

**Example:**
Combatant (Proficiency 3) attacks with heavy weapon (2 HD base, requires 2 successes).
- Rolls 8 successes (6 extra)
- Base: 2 HD
- Bonus: 6 successes, but capped at Proficiency 3 = +3 HD
- **Total: 5 HD damage**
```

**Action Items:**
- [ ] Rewrite bonus damage section with explicit cap language
- [ ] Add example calculation to Combat Rules
- [ ] Clarify if cap applies to spells (assume yes, needs confirmation)
- [ ] Update Quick Reference with damage formula

---

## 🟡 HIGH PRIORITY (Should Fix for Smooth Play)

### 7. Affinity Dice Mechanics Unclear

**Status:** 🟡 HIGH  
**Files Affected:**
- `Player Book/Affinity_Character_Creation.md`

**The Problem:**
Multiple contradictions and unanswered questions:
- "Can be stored until used (max LEVEL at a time)"
- "Gain maximum Proficiency times per long rest"
- "Count as exertion dice, drawn from turn budget" ← Does this mean they DO count against exertion budget?
- "Can be shared with allies" ← No mechanics for how

**Questions:**
1. If I'm Level 5, can I store 5 Affinity Dice total?
2. Do unused Affinity Dice expire at long rest?
3. When I spend an Affinity Die, does it count against my per-action Proficiency exertion cap?
4. How do I share them with allies? (Action? Free action? Range?)

**Recommended Fix:**
```markdown
## Affinity Dice

Affinity Dice are bonus d6s earned by embodying your chosen virtue.

**Gaining Affinity Dice:**
- When you embody your Affinity (GM judges), gain 1 Affinity Die
- Maximum: You may gain Affinity Dice up to **Proficiency times per long rest**
- Example: Proficiency 3 = max 3 Affinity Dice gained between long rests

**Storing Affinity Dice:**
- You may store up to **Level** Affinity Dice at once
- Example: Level 5 = store max 5 Affinity Dice
- Unused Affinity Dice do NOT expire (persist until spent)

**Spending Affinity Dice:**
- On any roll, you may add stored Affinity Dice as bonus dice
- **Affinity Dice count as exertion dice:**
  - They burn your HD if they roll 1s
  - They count toward your per-action exertion cap (max Proficiency per action)
- You may spend multiple Affinity Dice on one roll (respecting action cap)

**Sharing Affinity Dice:**
- As a **free action** on your turn, transfer any number of stored Affinity Dice to an ally within 30 yards
- That ally adds them to their stored pool (respecting their Level cap)
- Shared Affinity Dice follow the same spending rules
- "Our purpose is shared."

**Tracking:**
Use tokens, marks, or dice to track stored Affinity Dice between sessions.
```

**Action Items:**
- [ ] Rewrite Affinity Dice section with full mechanics
- [ ] Add Affinity Dice to Quick Reference
- [ ] Clarify if Affinity Dice count toward "Bonus Dice Cap" (Level + 3 per action)
- [ ] Provide GM guidance on awarding Affinity Dice (specific trigger examples per virtue)

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
- [ ] **Issue #2:** Rest & Recovery rules written and integrated
- [ ] **Issue #3:** Defense roll mechanics clarified
- [ ] **Issue #4:** Armor temp HD system fully explained
- [ ] **Issue #5:** Action economy unambiguously defined
- [ ] **Issue #6:** Bonus damage cap explicitly worded

### High Priority (Smooth Play)
- [ ] **Issue #7:** Affinity Dice mechanics complete
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

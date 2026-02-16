# Combat Rules

## Action Economy

### Actions Per Turn

**Player characters may take up to 2 actions per turn,** but face the following restrictions:

**Action Tier Restrictions:**
- **Only 1 action may be Expert tier or higher** per turn
- Once you attempt an Expert/Legendary/Ultimate/Mythical action (success or failure), remaining actions must be Basic or Advanced tier
- You may take 2 Basic actions, 2 Advanced actions, or 1 Basic + 1 Advanced in any combination
- You may combine 1 Expert+ action with 1 Basic/Advanced action

**Example Scenarios:**
```
✅ ALLOWED:
- Attack (Basic) + Attack (Basic)
- Spell (Advanced) + Defend (Basic)
- Ultimate Spell (Legendary) + Healing Touch (Basic)

❌ NOT ALLOWED:
- Fireball (Expert) + Teleport (Expert)
- Power Word: Stun (Expert) + Divine Strike (Expert)
```

**Design Philosophy:** 
High-tier actions demand intense focus and exertion. You cannot maintain that level of power output twice in one turn without complete exhaustion.

---

### Triggered Actions (Reactions)

**Triggered actions are special abilities that activate in response to specific events** rather than on your turn.

**How Triggered Actions Work:**

1. **Requires a Trigger:** The ability must specify what event activates it (e.g., "when an ally within 10 yards is hit by an attack")

2. **Before Your Initiative:** If you have not yet acted in the current round, you may use triggered actions when their trigger occurs
   - This uses one of your 2 actions for the turn
   - When your initiative comes up, you have 1 fewer action available
   - Subject to tier restrictions (if you use an Expert reaction, your turn actions must be Basic/Advanced)

3. **After Your Initiative:** If you've already acted this round, you cannot use triggered actions (unless an ability specifically states otherwise)

**Example:**
```
Initiative Order: Enemy Orc (15), Fighter (12), Priest (8)

- Orc attacks Fighter
- Priest hasn't gone yet this round
- Priest has "Guardian's Interception (Advanced)" — triggered when ally within 10 yards is attacked
- Priest uses Guardian's Interception as a triggered action
- When Priest's initiative (8) comes up, Priest has only 1 action remaining
```

---

### Held Actions

**You may choose to hold one or both of your actions** until later in the round, waiting for a specific trigger.

**Holding Actions:**

1. **Declare the Hold:** On your turn, state: "I'm holding my action(s) for [specific trigger]"
   - Must specify the trigger condition (e.g., "when the mage casts a spell", "when an enemy approaches")
   - Must specify which action you intend to use

2. **Trigger Occurs:** When the trigger happens, you may immediately use your held action
   - Interrupts the current action (resolved before the trigger completes)
   - Functions exactly like a triggered action

3. **No Trigger by End of Round:** If your trigger doesn't occur before the round ends:
   - You may use held actions **only for Basic tier actions**
   - This happens at initiative count 0 (after all other combatants)
   - You forfeit the opportunity for higher-tier actions

**Example:**
```
Fighter's turn (initiative 14):
- "I hold my action. When the mage starts casting, I'll charge and attack."

Mage's turn (initiative 10):
- Mage begins casting Fireball (Expert)
- Fighter's held action triggers
- Fighter charges and attacks (interrupting the spell if successful)

Alternative: If mage never casts:
- Round ends
- Fighter gets initiative count 0
- Fighter may only use Basic tier action now (e.g., simple attack, move)
```

**Tactical Use:**
- Counterspelling enemy casters
- Intercepting charging enemies
- Coordinating with allies ("when you grapple him, I'll strike")
- Reacting to enemy positioning

**Risk:** You might waste your turn waiting for a trigger that never comes.

---

### Movement

- **Base Movement:** 10 yards per turn (doesn't cost an action)
- **Additional Movement:** Some classes, abilities, or actions grant extra movement
- **Difficult Terrain:** Costs double movement
- **Moving Through Enemies:** Requires Agility check or special ability

---

### Free Actions

- Drop an item
- Speak briefly (a sentence or two)
- Call out a warning
- GM discretion for other minor actions

---

## Attack Resolution

### Attack Sequence

1. **Declare attack, target, and exertion** (up to Proficiency dice per action)
2. **Determine action tier and required successes**
3. **Roll Proficiency + Exertion dice**
4. **Count successes** (at or above Threshold = 1, 6 = 2)
5. **Check if required successes met**
6. **Calculate damage:**
   - Base Damage (from weapon/ability)
   - \+ Bonus Damage (extra successes, max = Proficiency)
   - Total Damage = Base + Bonus (capped)
7. **Burn HD for any 1s rolled on exertion dice**
8. **Target defends** (see Defense Rolls section below)
9. **Apply final damage**

**See Action Tiers section in Core Mechanics for Success Thresholds by tier.**

---

## Multi-Target Actions

Actions can affect multiple targets in several distinct ways. Understanding these mechanics prevents table confusion and enables strategic gameplay.

### Single-Target Actions (Default)

Most actions affect one target:

- **Roll once** using Proficiency + Exertion
- Target defends individually
- Extra successes add bonus damage (capped at Proficiency)
- Standard attack resolution applies

---

### Area Actions (Radius, Cone, Line)

Some actions affect an **area** rather than specific targets—typically spells like Fireball, explosions, or environmental hazards.

**How Area Actions Work:**

1. **Define Area:** Specify shape and size (e.g., "15-yard radius", "30-yard cone", "50-yard line")
2. **Roll Attack Once:** Use Proficiency + Exertion to determine effect strength
3. **All Creatures in Area Affected:** Every creature in the area is targeted
4. **Each Target Defends Individually:** Roll separate defense for each creature
5. **Extra Successes Do NOT Add Bonus Damage** (prevents instantly annihilating entire battalions)

**Proficiency Scaling (Area Size):**

Extra successes beyond required threshold can **increase area size** instead of adding damage:

- **Each 2 extra successes = +5 yards** added to radius/range
- **Maximum area increase = Proficiency × 5 yards**
- **Caster chooses:** Expand area OR keep base size (tactical decision before resolution)

**Example (Area Spell with Scaling):**
```
Weaver (Proficiency 4) casts Fireball (Expert tier, 4+ threshold, base 3 HD damage, 15-yard radius)
- Rolls 3 Prof + 4 Exertion = 7d6
- Results: 6, 6, 5, 4, 3, 2, 1
- Successes: 5 (two 6s = 4 successes, one 5 = 1 success)
- Required: 4 successes → 1 extra success

Weaver cannot increase area (needs 2 extra successes minimum)
- All enemies in 15-yard radius defend against 3 HD damage (no bonus damage)
- Each enemy rolls defense separately
- Weaver burns 1 HD (rolled a 1 on exertion die)

Alternative: If Weaver had rolled 8 successes:
- 4 extra successes → +10 yards radius (15 → 25 yard radius)
- Weaver chooses: Catch more enemies in larger area, OR keep base radius
```

**Design Philosophy:**  
Area attacks don't scale damage with extra successes because hitting 5 enemies for base damage is already devastating. Extra successes allow you to expand the blast zone, catching enemies who thought they were safe.

---

### Multi-Target Selection Actions

Some actions let you **choose specific targets** rather than affecting an area—such as Chain Lightning, Barrage of Arrows, or War Cry: Rally.

**How Multi-Select Actions Work:**

1. **Choose Targets:** Select up to X targets (ability specifies base number)
2. **Roll Attack Once:** Single roll applies to all chosen targets
3. **Each Target Defends Individually:** Separate defense roll for each
4. **Extra Successes Can:**
   - **Add Additional Targets:** 1 extra success = 1 additional target (max = Proficiency additional targets)
   - **OR Distribute Intensity:** Spread extra successes among existing targets as +1 effect each (max +1 per target)

**Proficiency Scaling (Target Count):**

- **Base targets:** Listed in ability description
- **Additional targets:** Up to Proficiency bonus targets using extra successes
- **Each extra success = 1 additional target** (your choice which enemy/ally)

**Example 1 (Adding Targets - Support Ability):**
```
Combatant (Proficiency 3) uses War Cry: Rally (affects 2 allies, Basic tier 2+, grants +1 HD healing to each)
- Rolls 3 Prof + 2 Exertion = 5d6
- Results: 6, 5, 4, 3, 2
- Successes: 3 (one 6 = 2 successes, one 5 = 1 success)
- Required: 2 successes → 1 extra success

Combatant adds 1 additional ally (base 2 + 1 extra = 3 allies total)
- 3 allies each receive +1 HD healing immediately
- Proficiency 3 means could have added up to 3 additional allies if more successes rolled
```

**Example 2 (Distributing Intensity - Damage Ability):**
```
Weaver (Proficiency 5) casts Chain Lightning (hits 3 targets, Expert tier 4+, 2 HD base damage each)
- Rolls 3 Prof + 5 Exertion = 8d6
- Results: 6, 6, 5, 5, 4, 3, 2, 1
- Successes: 6 (two 6s = 4, two 5s = 2)
- Required: 4 successes → 2 extra successes

Weaver distributes 2 extra successes among the 3 targets (max +1 per target):
- Target A (Orc): 2 HD + 1 bonus = 3 HD damage → Orc defends against 3 HD
- Target B (Goblin): 2 HD + 1 bonus = 3 HD damage → Goblin defends against 3 HD
- Target C (Wolf): 2 HD base = 2 HD damage → Wolf defends against 2 HD
- Weaver burns 1 HD (rolled a 1 on exertion die)

Alternatively, Weaver could have added 2 more targets instead (hitting 5 enemies total for 2 HD each)
```

**Tactical Choice:**
- **More Targets:** Spread damage/effects to more creatures (action economy advantage)
- **Higher Intensity:** Focus power on fewer targets (higher chance to overwhelm defenses)

---

### Sustained Area Effects (Zones)

Some actions create **persistent zones** that last for a duration—such as Hold the Line, Sanctify Space, or Wall of Flames.

**How Sustained Zones Work:**

1. **Roll Once When Created:** Initial roll determines zone's effect strength
2. **Define Area and Duration:** Specified in ability (e.g., "10-yard radius, lasts 1 minute")
3. **Affects Creatures Entering or Starting Turn in Zone:** No additional rolls needed
4. **Effect Persists Independently:** Zone continues even if caster falls unconscious or leaves area
5. **Use Initial Success Count:** All targets affected by zone use your original roll's success total

**Example (Buff Zone):**
```
Priest (Proficiency 2) casts Hold the Line (10-yard radius centered on self, lasts 1 minute)
- Effect: All allies in zone gain +2d6 when rolling defense
- Rolls once when casting: 4 successes (meets threshold)
- Zone activates

Round 1: Fighter and Rogue in zone, both have +2d6 defense
Round 2: Weaver enters zone, gains +2d6 defense
Round 3: Priest falls unconscious, zone persists (duration not dependent on caster)
Round 10: Duration ends (1 minute = 10 rounds)

No additional rolls needed after initial cast—zone effect is constant.
```

**Example (Damage Zone):**
```
Weaver casts Wall of Flames (20-yard line, lasts 3 rounds)
- Effect: Creatures entering or starting turn in flames take 2 HD damage
- Rolls once when casting: 5 successes (meets Expert threshold)
- Wall appears

Enemy Orc charges through flames:
- Takes 2 HD damage, defends individually
- No new roll from Weaver—original success count applies

Next round, same Orc starts turn still in flames:
- Takes 2 HD damage again, defends again
```

**Design Philosophy:**  
Sustained zones create battlefield control without requiring caster concentration or repeated rolls. Once established, the zone is a persistent environmental effect.

---

### Targeting Summary Table

| Action Type | Roll Count | Defense | Extra Successes | Proficiency Scaling |
|-------------|-----------|---------|-----------------|---------------------|
| **Single-Target** | Once | Individual | +Damage (capped at Prof) | N/A |
| **Area Effect** | Once | Individual (each target) | +Area Size | +5 yards per 2 successes (max Prof × 5) |
| **Multi-Select** | Once | Individual (each target) | +Targets OR +Intensity | +1 target per success (max Prof additional) |
| **Sustained Zone** | Once (when cast) | Individual (when triggered) | Effect persists unchanged | Duration/area per ability |

**Key Principles:**
- **Always roll once** for the action, regardless of target count
- **Targets always defend individually** (even in area effects)
- **Extra successes scale differently** based on action type
- **Proficiency determines maximum scaling** (bigger areas, more targets as you advance)

---

## Defense Rolls

When you take HD damage from an attack or harmful effect, you defend using a **layered defense system**.

### Defense Dice Capacity

Your defense capacity = **½ Proficiency (rounded up, minimum 1 die)**

| Level | Proficiency | Defense Dice |
|-------|-------------|-------------|
| 1-2 | 1 | 1 die |
| 3-4 | 2 | 1 die |
| 5-6 | 3 | 2 dice |
| 7-8 | 4 | 2 dice |
| 9-10 | 5 | 3 dice |

**This represents your ability to react, brace, and absorb damage—not your total durability.**

### Layered Defense System

Your defenses are depleted from **outermost layer inward:**

1. **Magical Barriers** (spells, abilities granting temp HD) — Roll using the die type granted (usually d12)
2. **Armor Temp HD** (physical armor) — Roll using armor die type (d6, d8, or d10)
3. **Permanent HD** (your body) — Roll using your class HD type (d6, d8, or d10)

**You defend each layer separately, starting from the outermost.**

### Defense Roll Sequence

**Step 1:** Identify which layer is being attacked (start with outermost)

**Step 2:** Check if damage exceeds your defense capacity
- If **damage ≤ defense dice capacity:** Roll defense dice
- If **damage > defense dice capacity:** Auto-fail (cannot roll defense, layer depletes immediately)

**Step 3:** Roll defense dice using the **die type of the layer being defended**
- Each die rolling **5+ = sustains the layer** (cancels 1 damage)
- Each die rolling **4- = fails to sustain**
- **Highest rolls count as only 1 success** (no explosive dice on defense—6s, 8s, 10s, 12s all = 1 success only)
- **No exertion allowed** (defense is reactive, not voluntary)

**Step 4:** Resolve the layer
- **If all damage canceled:** Layer survives intact, no further damage
- **If any damage remains:** Layer is depleted (lose temp HD from that layer equal to its current maximum), remaining damage moves to next layer inward

**Step 5:** Repeat for each layer until damage is exhausted or you reach 0 permanent HD

### Examples

**Example 1: Combatant with Armor (Successful Defense)**

*Level 5 Combatant (Proficiency 3, Defense Capacity = 2 dice)*
- Current HD: 11d10 permanent HD
- Wearing medium armor (2d8 armor layer)
- Takes 3 HD damage from orc's axe

**Defense:**
- Damage (3) vs Defense capacity (2 dice)
- Roll 2d8 for armor layer → Results: 7, 4
- Successes: 1 (the 7 rolls 5+, the 4 does not)
- Canceled: 1 damage, 2 damage remains
- **Armor layer depletes:** Armor destroyed, no longer usable for defense
- 2 damage moves to permanent HD layer

- Roll 2d10 for permanent HD → Results: 6, 3
- Successes: 1 (the 6)
- Canceled: 1 damage, 1 damage remains
- **Lose 1 permanent HD:** 11d10 → 10d10

**Final State:** 10d10 HD, armor destroyed (must repair or rest to restore armor layer)

---

**Example 2: Weaver with Magical Barrier (Overwhelming Damage)**

*Level 1 Weaver (Proficiency 1, Defense Capacity = 1 die)*
- Current HD: 5d6 permanent HD
- Magical barrier (2d12 from Shield spell - outermost layer)
- Light armor (2d6 armor layer - middle layer)
- Takes 4 HD damage from area spell

**Defense:**
- Damage (4) > Defense capacity (1)? Yes—**cannot roll enough dice to stop it all**
- Roll 1d12 for magical barrier (outermost) → Result: 9
- Success: 1 (the 9 rolls 5+)
- Canceled: 1 damage, 3 damage remains
- **Magical barrier depletes:** Barrier spell exhausted
- 3 damage moves to armor layer

- Damage (3) > Defense capacity (1)? Yes (still too much)
- Roll 1d6 for armor → Result: 2
- Success: 0 (the 2 fails)
- Canceled: 0 damage, 3 damage remains
- **Armor layer depletes:** Armor destroyed
- 3 damage moves to permanent HD

- Roll 1d6 for permanent HD → Result: 5
- Success: 1 (the 5)
- Canceled: 1 damage, 2 damage remains
- **Lose 2 permanent HD:** 5d6 → 3d6

**Final State:** 3d6 HD, barrier exhausted, armor destroyed (both layers must be restored before defending with them again)

---

**Example 3: Scholar with No Armor (Class HD Matters)**

*Level 7 Scholar (Proficiency 4, Defense Capacity = 2 dice, d8 HD)*
- Current HD: 13d8 permanent HD
- No armor (scholar robes)
- Takes 2 HD damage from poison dart

**Defense:**
- No armor or magical layers, defend with permanent HD
- Damage (2) = Defense capacity (2)? Yes, can roll
- Roll 2d8 for permanent HD → Results: 6, 7
- Successes: 2 (both roll 5+)
- Canceled: 2 damage, 0 remains
- **Fully defended!** No HD lost

**Final State:** 13d8 HD (unharmed)

*The d8 HD gives the Scholar a 62.5% chance per die to defend successfully—much better than a d6 Weaver's 33.33% chance.*

---

### Why Die Type Matters

**Success Rate per Die (5 or 6):**
- **d6:** 33.33% (2 in 6)
- **d8:** 37.5% (3 in 8)
- **d10:** 40% (4 in 10)
- **d12:** 50% (6 in 12)

**Magical barriers (d12) are twice as likely to sustain as light armor (d6).** This makes magical protection incredibly valuable, even in small amounts.

**Tough classes (d10 HD) are noticeably more durable than fragile classes (d6 HD)** when armor fails—40% vs 33% chance per die to reduce damage.

### Defense Roll Restrictions

- **No Explosive Dice:** Highest possible rolls (6s, 8s, 10s, 12s) count as 1 success only, not 2
- **No Exertion:** You cannot voluntarily add exertion dice to defense rolls
- **No Affinity Dice:** Defense is reactive; you cannot spend Affinity Dice
- **No Skills Apply:** Skills don't grant bonus dice to defense rolls
- **Defense Action:** If you took the Defend action on your turn, you gain +2d6 bonus dice for defense rolls until your next turn (these bonus dice are rolled in addition to your normal defense capacity)

### Strategic Notes

**Armor Is Your Lifeline:** Once armor depletes, you're rolling your fragile HD pool with limited dice. Protect your armor, repair it when possible, or retreat to Recover.

**Magical Barriers Are Superior:** d12 barriers have 50% sustain rate vs d6 armor's 33%—seek Weavers, Priests, and Shamans who can grant magical protection.

**0 HD ≠ Death:** At 0 permanent HD, you still have Resolve. You're unconscious and dying, but allies can stabilize you with healing before you reach -5 Resolve.

**Healing Exists:** Priests, Shamans, Scholars (Medicine), the Rush action, and Rest/Recover mechanics all restore HD. Don't treat every hit as permanent.

**Defense Scales Slowly:** Your defense capacity only increases every 4 levels. Armor, positioning, and magical protection matter more than leveling up.

---

## Defense Actions

### Defend Action

Instead of attacking, you can take the **Defend** action:

- **Gain 2d6 bonus dice** for this round's defense rolls
- These are rolled as d6s and follow the same rules (5+ cancels damage)
- Defense sequence: Armor layer rolled first → Permanent HD → Then bonus d6s
- Lasts until start of your next turn

### Intervene (If have not yet acted in turn order)

Use an action to protect an ally within 5 yards:

**Action:** Basic (2+ threshold)
- Required: 1 success
- Effect: Each success cancels 1 HD damage to ally
- Uses exertion from your turn's budget

---

## Universal Actions

*These actions are available to all classes. Some classes may have abilities that interact with or modify these universal actions.*

### Rush

**You sacrifice mental fortitude for immediate physical recovery.**

**Action Type:** Standard (uses one of your 2 actions)  
**Cost:** 1 Resolve (automatic, no Resolve check required)  
**Effect:** Immediately regain Proficiency HD  
**Frequency:** Resets on Rest (short rest)

**How Rush Works:**

1. **Declare Rush:** On your turn, use one action to Rush
2. **Lose 1 Resolve:** You automatically lose 1 Resolve (no roll—you choose to sacrifice it)
3. **Regain HD:** Immediately regain HD equal to your Proficiency
4. **No Dice, No Risk:** Rush does not require a roll and cannot burn HD from 1s

**The Trade:**
You're converting long-term mental fortitude (Resolve) into short-term physical vitality (HD). This is adrenaline—pushing past pain through sheer force of will.

**When to Use Rush:**
- You're below half HD and need immediate recovery
- Healing abilities are unavailable or already used
- You have Resolve to spare but can't afford to wait for rest
- You need to survive one more round of combat

**Example:**
```
Level 5 Combatant (Proficiency 3, currently at 3 HD / 11 max, 4 Resolve)
- Takes a devastating hit, now at 3 HD and worried about next attack
- Uses Rush (one action)
- Loses 1 Resolve: 4 → 3 Resolve
- Gains 3 HD: 3 HD → 6 HD
- Now has breathing room to continue fighting
- Can use second action to attack or defend
```

**Strategic Considerations:**
- **Resolve matters:** Dropping to low Resolve creates death spiral (penalties to actions, defense dice reduction)
- **Resets on Rest:** You can use Rush again after resting (max 2 Rests per day = max 2 Rushes per day normally)
- **No stacking with Resolve triggers:** Even if you drop to 0 Resolve from Rush, you don't make a Resolve check (you chose this)
- **NPCs may have Rush too:** Some elite NPCs or monsters may use Rush to survive longer than expected

**Design Philosophy:**  
Rush is desperation made mechanical. You're trading tomorrow's strength for today's survival. Unlike healing spells that restore HD through magic, Rush is willpower—you're simply refusing to fall.

---

### Steady (Universal Action)

**Steady** is the inverse of Rush—while Rush converts mental fortitude into physical vitality (Resolve → HD), Steady converts physical vitality into mental fortitude (HD → Resolve). Where Rush enables desperate physical recovery, Steady enables mental clarity through sacrifice.

**All characters have access to Steady.**

**Action Type:** Standard (uses 1 of 2 actions)  
**Cost:** Lose 3 HD  
**Effect:** Gain 1 Resolve immediately  
**Frequency:** Resets on Rest (short rest)

**No roll required**—this is a guaranteed trade. You sacrifice body for renewed mental clarity.

**Design Philosophy:**
- Clean resource conversion (HD → Resolve)
- Fixed cost (3 HD) regardless of level
- Simple to execute at the table
- Provides universal Resolve management tool
- Inverse of Rush (Rush: 1 Resolve → Prof HD, Steady: 3 HD → 1 Resolve)
- **Priests and Sovereigns are still superior** at Resolve restoration through their class abilities

**Example:**
Level 5 Combatant (10 HD, 2 Resolve) is Shaken and needs Resolve to attempt Expert actions. Uses Steady: Loses 3 HD (now 7 HD), gains 1 Resolve (now 3 Resolve). Can now attempt Expert actions again and has better defense dice.

**When to Use Steady:**
- You've taken heavy physical damage but your Resolve is intact (high HD, low Resolve)
- You need to break out of Resolve penalties (Shaken/Weakened stages)
- You need mental fortitude for Expert actions or Resolve checks
- Social combat has drained your Resolve but your body is fresh
- You're preparing for a mental/social challenge ahead

**Trade-Off Awareness:**
- Steady costs precious HD (your survival buffer)
- Each use reduces your physical stamina
- Death requires 0 HD AND 0 Resolve—managing both resources is critical
- Overuse can leave you physically vulnerable
- **Priests and Sovereigns can do this more efficiently or restore Resolve to others**

---

## NPCs & Monsters

### Monster Stats

Enemies have simplified stats:

- **HD Pool:** Total Hit Dice
- **Proficiency:** Half their effective level
- **Attacks:** Dice pool + damage
- **Special Abilities:** Unique powers
*most monsters/ enemies are more likely to choose to exert (maybe can exert more) as they are wreckless and willing/needing to do anything to win*

**Example Monster:**

**Orc Raider (Level 3)**
- HD: 7d8
- Proficiency: 2
- Attack: Greataxe (Heavy, Basic)
  - Rolls: 3d6
  - Required: 1
  - Base: 2 HD (heavy weapon)
- Special: Blood Rage — When below half HD, +2 to attack rolls

---

## Environmental Combat

Some battlefields have **Lair Actions** or **Environmental Phases** that occur at specific initiative counts.

These create dynamic battlefields:
- Favor enemies on home terrain
- Force tactical repositioning
- Deal damage, impose conditions, or limit movement

---

## Damage Types

Some creatures resist or are vulnerable to specific damage types:

- **Physical:** Slashing, Piercing, Bludgeoning
- **Elemental:** Fire, Cold, Lightning, Thunder, Acid
- **Mystical:** Radiant, Necrotic, Force, Psychic

**Resistance:** Defender rolls +2d6 when defending against this type  
**Vulnerability:** Defender rolls -2d6 when defending against this type (minimum 0)  
**Immunity:** Automatically negate all damage of that type

---

## Range

### Melee Range
- Within 5 yards
- Requires melee weapon or unarmed strike

### Ranged
- **Short range:** 10-30 yards (no penalty)
- **Long range:** 30-100 yards (-1d6 to attack)
- **Extreme range:** Varies by weapon (-2d6 to attack, may be impossible)

### Thrown Weapons
- Can be used in melee range without penalty
- Follow ranged rules at distance

# Combat Rules

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
- Wearing medium armor: 12 temp HD (rolled 2d8 earlier)
- Takes 3 HD damage from orc's axe

**Defense:**
- Damage (3) ≤ Defense capacity (2)? No, but still rollable
- Roll 2d8 for armor layer → Results: 7, 4
- Successes: 1 (the 7 rolls 5+, the 4 does not)
- Canceled: 1 damage, 2 damage remains
- **Armor depletes:** Lose all 12 temp HD from armor
- 2 damage moves to permanent HD layer

- Roll 2d10 for permanent HD → Results: 6, 3
- Successes: 1 (the 6)
- Canceled: 1 damage, 1 damage remains
- **Lose 1 permanent HD:** 11d10 → 10d10

**Final State:** 10d10 HD, 0 temp HD from armor (armor destroyed)

---

**Example 2: Weaver with Magical Barrier (Overwhelming Damage)**

*Level 1 Weaver (Proficiency 1, Defense Capacity = 1 die)*
- Current HD: 5d6 permanent HD
- Magical barrier: 9 temp HD (rolled 2d12 earlier from spell)
- Light armor: 7 temp HD (rolled 2d6 earlier)
- Takes 4 HD damage from area spell

**Defense:**
- Damage (4) > Defense capacity (1)? Yes—**cannot roll enough dice to stop it**
- Roll 1d12 for magical barrier → Result: 9
- Success: 1 (the 9 rolls 5+)
- Canceled: 1 damage, 3 damage remains
- **Magical barrier depletes:** Lose all 9 temp HD from magical barrier
- 3 damage moves to armor layer

- Damage (3) > Defense capacity (1)? Yes (still too much)
- Roll 1d6 for armor → Result: 2
- Success: 0 (the 2 fails)
- Canceled: 0 damage, 3 damage remains
- **Armor depletes:** Lose all 7 temp HD from armor
- 3 damage moves to permanent HD

- Roll 1d6 for permanent HD → Result: 5
- Success: 1 (the 5)
- Canceled: 1 damage, 2 damage remains
- **Lose 2 permanent HD:** 5d6 → 3d6

**Final State:** 3d6 HD, 0 magical barrier, 0 armor (both destroyed, barely alive)

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
- Can be combined with normal defense dice (temp HD/permanent HD rolled first, then bonus d6s)
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

### Rush (Adrenaline) — **WORK IN PROGRESS**

**This ability will be available to all classes. Each class may interact with it slightly differently based on their class design.**

**Action** (Basic, 2+)
- Roll Proficiency + Exertion dice
- For each success: Restore 1 HD
- 1s still burn HD (standard exertion risk)
- **Using Rush automatically costs 1 Resolve**

**The Choice:**
- Do I burn myself further to survive?
- Do I lose my morale position?
- Do I gamble survival on rolling more 1s?

**Design Intent:**
This creates a desperate moment where characters push beyond their limits. The Resolve cost means you're sacrificing mental fortitude for physical survival—trading long-term stability for immediate recovery. The exertion risk means you might burn more HD than you recover if you roll poorly. It's adrenaline as a double-edged sword.

*Class-specific variations and refinements to be developed during playtesting.*

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
